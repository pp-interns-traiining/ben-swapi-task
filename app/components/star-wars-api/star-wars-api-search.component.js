"use strict";

class StarWarsApiSearchController {
  constructor($http, $filter, $timeout) {
    this.results = [];
    this.finalResults = [];
    this.term = "";
    this.disableButton = false;
    this.$http = $http;
    this.$filter = $filter;
    this.$timeout = $timeout;
  }

  iterableRequest(url, resolve) {
    console.log("Searching...");
    this.$http.get(url).then((response) => {
      this.results = [...this.results, ...response.data.results];
      response.data.next
        ? this.iterableRequest(response.data.next, resolve)
        : resolve();
    });
  }

  swapiSearch() {
    this.results = [];
    this.finalResults = [];
    this.disableButton = true;
    new Promise((resolve, reject) =>
      this.iterableRequest(
        `https://swapi.co/api/people?search=${this.term}&callback=foo`,
        resolve,
      ),
    ).then(() =>
      this.$timeout(() => {
        this.disableButton = false;
        this.finalResults = this.results;
      }),
    );
  }
}

StarWarsApiSearchController.$inject = ["$http", "$filter", "$timeout"];

angular.module("starWarsApi").component("search", {
  templateUrl: "components/star-wars-api/star-wars-api-search.template.html",
  controller: StarWarsApiSearchController,
  binding: {
    term: "<",
  },
});
