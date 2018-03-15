"use strict";

class StarWarsApiAgeController {
  constructor($filter, starWarsService) {
    this.description =
      "Search the database to find the difference between the oldest and youngest characters in Star Wars.";
    this.results = [];
    this.answer = "";
    this.disableButton = false;
    this.$filter = $filter;
    this.starWarsService = starWarsService;
  }

  compareAges() {
    this.results = [];
    this.disableButton = true;

    this.starWarsService
      .getCharacters("https://swapi.co/api/people?callback=foo")
      .then((response) => {
        this.results = response.filter((item) =>
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
      });
  }
}

StarWarsApiAgeController.$inject = ["$filter", "starWarsService"];

angular.module("starWarsApi").component("age", {
  templateUrl: "components/star-wars-api/star-wars-api-age.template.html",
  controller: StarWarsApiAgeController,
});
