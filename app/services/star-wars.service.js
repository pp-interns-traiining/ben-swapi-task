"use strict";

class StarWarsService {
  constructor($http) {
    console.log("service created");
    this.$http = $http;
  }

  getCharacters(url, results = []) {
    if (!url) return results;
    console.log("Searching...");
    return this.$http.get(url).then((response) => {
      results = [...results, ...response.data.results];
      return this.getCharacters(response.data.next, results);
    });
  }
}

StarWarsService.$inject = ["$http"];

angular.module("starWarsApi").service("starWarsService", StarWarsService);
