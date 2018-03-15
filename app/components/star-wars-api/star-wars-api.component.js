"use strict";

class StarWarsApiController {
  constructor() {
    // this.example = "example";
  }
}

// StarWarsApiController.$inject = ["$http", "$filter"];

angular.module("starWarsApi").component("swapi", {
  templateUrl: "components/star-wars-api/star-wars-api.template.html",
  controller: StarWarsApiController,
});
