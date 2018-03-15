"use strict";

class StarWarsApiAgeController {
  constructor($http, $filter, $timeout) {
    this.description =
      "Search the database to find the difference between the oldest and youngest characters in Star Wars.";
    this.results = [];
    this.answer = "";
    this.disableButton = false;
    this.$http = $http;
    this.$filter = $filter;
    this.$timeout = $timeout;
  }

  iterableRequest(url) {
    if (!url) return;
    console.log("Searching...");
    return this.$http.get(url).then((response) => {
      this.results = [...this.results, ...response.data.results];
      return this.iterableRequest(response.data.next);
    });
  }

  compareAges() {
    this.results = [];
    this.disableButton = true;

    this.iterableRequest("https://swapi.co/api/people?callback=foo").then(
      () => {
        this.results = this.results.filter((item) =>
          item.birth_year.includes("BBY"),
        );
        this.results.map(
          (item) => (item.birth_year = item.birth_year.slice(0, -3) - 0),
        );
        this.results = this.$filter("orderBy")(this.results, "birth_year");
        let youngest = this.results[0];
        let oldest = this.results[this.results.length - 1];
        this.answer = `The oldest character is the Star Wars movies is ${
          oldest.name
        }, born in ${oldest.birth_year}BBY. The youngest is ${
          youngest.name
        }, born in ${
          youngest.birth_year
        }BBY. There is a difference of ${oldest.birth_year -
          youngest.birth_year} years between them.`;
        this.disableButton = false;
      },
    );
  }
}

StarWarsApiAgeController.$inject = ["$http", "$filter", "$timeout"];

angular.module("starWarsApi").component("age", {
  templateUrl: "components/star-wars-api/star-wars-api-age.template.html",
  controller: StarWarsApiAgeController,
});
