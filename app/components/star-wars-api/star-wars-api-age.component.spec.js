// "use strict";
//
// describe("age", () => {
//   beforeEach(module("age"));
//
//   describe("StarWarsApiAgeController", () => {
//     let ctrl;
//
//     beforeEach(
//       inject(($componentController) => {
//         ctrl = $componentController("age");
//       }),
//     );
//
//     it("should create two arrays that are 8 items long", function() {
//       expect(ctrl.grid).toBe([]);
//     });
//   });
// });
//
// describe("age", function() {
//   beforeEach(module("starWarsApi"));
//
//   describe("controller", function() {
//     var $httpBackend, ctrl;
//
//     // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
//     // This allows us to inject a service and assign it to a variable with the same name
//     // as the service while avoiding a name conflict.
//     beforeEach(
//       inject(function($componentController, _$httpBackend_) {
//         $httpBackend = _$httpBackend_;
//         $httpBackend
//           .expectGET("https://swapi.co/api/people?callback=foo")
//           .respond([{ name: "Nexus S" }, { name: "Motorola DROID" }]);
//
//         ctrl = $componentController("age");
//       }),
//     );
//   });
// });
