"use strict";

class StarWarsApiSearchController {
  constructor(starWarsService) {
    this.results = [];
    this.finalResults = [];
    this.disableButton = false;
    this.starWarsService = starWarsService;
  }

  setActiveChar(character) {
    this.activeChar = character;
  }

  swapiSearch() {
    this.results = [];
    this.finalResults = [];
    this.activeChar = "";
    this.disableButton = true;

    this.starWarsService
      .getCharacters(
        `https://swapi.co/api/people?search=${this.term}&callback=foo`,
      )
      .then((response) => {
        this.disableButton = false;
        this.finalResults = response;
      })
      .catch((err) => console.log("err searching:", err));
  }
}

StarWarsApiSearchController.$inject = ["starWarsService"];

angular.module("starWarsApi").component("search", {
  templateUrl: "components/star-wars-api/star-wars-api-search.template.html",
  controller: StarWarsApiSearchController,
  binding: {
    term: "@",
    activeChar: "<",
  },
});
