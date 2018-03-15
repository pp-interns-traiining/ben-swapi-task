"use strict";

// Declare app level module which depends on views, and components
angular.module("myApp").config([
  "$httpProvider",
  function($httpProvider) {
    $httpProvider.defaults.withCredentials = true;
  },
  "$locationProvider",
  "$routeProvider",
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix("!");

    $routeProvider
      .when("/drum", { template: "<drum-machine></drum-machine>" })
      .when("/swapi", { template: "<swapi></swapi>" })
      .otherwise("/swapi");
  },
]);
