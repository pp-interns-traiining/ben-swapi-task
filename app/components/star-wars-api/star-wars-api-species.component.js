"use strict";

class StarWarsApiSpeciesController {
  constructor($http, starWarsService) {
    this.description =
      "Search the database for the most common species in the Star Wars movies.";
    this.results = [];
    this.count = [];
    this.humansList = [];
    this.answer = "";
    this.disableButton = false;
    this.$http = $http;
    this.starWarsService = starWarsService;
  }

  deleteItem(index) {
    this.humansList = [
      ...this.humansList.slice(0, index),
      ...this.humansList.slice(index + 1),
    ];
  }

  countSpecies() {
    this.results = [];
    this.disableButton = true;
    this.$http
      .get("https://swapi.co/api/species?callback=foo")
      .then((response) => {
        this.count = Array(response.data.count + 1).fill(0);
      });
    this.starWarsService
      .getCharacters("https://swapi.co/api/people?callback=foo")
      .then((response) => {
        response.map((item) => {
          item.species.map((item) => {
            let n = item.match(/\d+/);
            this.count[n] = this.count[n] + 1;
          });
        });
        let mostCommon = this.count.indexOf(Math.max(...this.count));
        this.$http
          .get(`https://swapi.co/api/species/${mostCommon}?callback=foo`)
          .then((res) => {
            this.answer = `The most common species in the Star Wars movies, appearing a total of ${
              this.count[mostCommon]
            } times, is the ${res.data.name} race.`;
            this.results = response.filter((item) => item.species.length);
            this.humansList = this.results.filter(
              (item) => item.species[0] == res.data.url,
            );
            this.disableButton = false;
          });
      });
  }
}

StarWarsApiSpeciesController.$inject = ["$http", "starWarsService"];

angular.module("starWarsApi").component("species", {
  templateUrl: "components/star-wars-api/star-wars-api-species.template.html",
  controller: StarWarsApiSpeciesController,
});
