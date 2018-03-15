"use strict";

class StarWarsApiSearchController {
  constructor($http, $filter, $timeout, $q) {
    this.results = [];
    this.finalResults = [];
    this.disableButton = false;
    this.$http = $http;
    this.$filter = $filter;
    this.$timeout = $timeout;
    this.$q = $q;
  }

  iterableRequest(url) {
    if (!url) return;
    console.log("Searching...");
    return this.$http.get(url).then((response) => {
      this.results = [...this.results, ...response.data.results];
      return this.iterableRequest(response.data.next);
    });
  }

  setActiveChar(character) {
    this.activeChar = character;
  }

  swapiSearch() {
    this.results = [];
    this.finalResults = [];
    this.activeChar = "";
    this.disableButton = true;

    this.iterableRequest(
      `https://swapi.co/api/people?search=${this.term}&callback=foo`,
    )
      .then(() => {
        this.disableButton = false;
        this.finalResults = this.results;
      })
      .catch((err) => console.log("err searching:", err));
  }
}

StarWarsApiSearchController.$inject = ["$http", "$filter", "$timeout", "$q"];

angular.module("starWarsApi").component("search", {
  templateUrl: "components/star-wars-api/star-wars-api-search.template.html",
  controller: StarWarsApiSearchController,
  binding: {
    term: "@",
    activeChar: "<",
  },
});
