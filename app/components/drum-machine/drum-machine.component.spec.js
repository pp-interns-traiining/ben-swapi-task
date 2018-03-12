"use strict";

describe("drumMachine", function() {
  beforeEach(module("drumMachine"));

  describe("drumMachineController", function() {
    let ctrl;

    beforeEach(
      inject(function($componentController) {
        ctrl = $componentController("drumMachine");
      }),
    );

    it("should create two arrays that are 8 items long", function() {
      expect(ctrl.grid).toBe([
        [
          { cell: 0, value: 0, focus: false },
          { cell: 1, value: 0, focus: false },
          { cell: 2, value: 0, focus: false },
          { cell: 3, value: 0, focus: false },
          { cell: 4, value: 0, focus: false },
          { cell: 5, value: 0, focus: false },
          { cell: 6, value: 0, focus: false },
          { cell: 7, value: 0, focus: false },
        ],
        [
          { cell: 8, value: 0, focus: false },
          { cell: 9, value: 0, focus: false },
          { cell: 10, value: 0, focus: false },
          { cell: 11, value: 0, focus: false },
          { cell: 12, value: 0, focus: false },
          { cell: 13, value: 0, focus: false },
          { cell: 14, value: 0, focus: false },
          { cell: 15, value: 0, focus: false },
        ],
        [
          { cell: 16, value: 0, focus: false },
          { cell: 17, value: 0, focus: false },
          { cell: 18, value: 0, focus: false },
          { cell: 19, value: 0, focus: false },
          { cell: 20, value: 0, focus: false },
          { cell: 21, value: 0, focus: false },
          { cell: 22, value: 0, focus: false },
          { cell: 23, value: 0, focus: false },
        ],
        [
          { cell: 24, value: 0, focus: false },
          { cell: 25, value: 0, focus: false },
          { cell: 26, value: 0, focus: false },
          { cell: 27, value: 0, focus: false },
          { cell: 28, value: 0, focus: false },
          { cell: 29, value: 0, focus: false },
          { cell: 30, value: 0, focus: false },
          { cell: 31, value: 0, focus: false },
        ],
        [
          { cell: 32, value: 0, focus: false },
          { cell: 33, value: 0, focus: false },
          { cell: 34, value: 0, focus: false },
          { cell: 35, value: 0, focus: false },
          { cell: 36, value: 0, focus: false },
          { cell: 37, value: 0, focus: false },
          { cell: 38, value: 0, focus: false },
          { cell: 39, value: 0, focus: false },
        ],
        [
          { cell: 40, value: 0, focus: false },
          { cell: 41, value: 0, focus: false },
          { cell: 42, value: 0, focus: false },
          { cell: 43, value: 0, focus: false },
          { cell: 44, value: 0, focus: false },
          { cell: 45, value: 0, focus: false },
          { cell: 46, value: 0, focus: false },
          { cell: 47, value: 0, focus: false },
        ],
        [
          { cell: 48, value: 0, focus: false },
          { cell: 49, value: 0, focus: false },
          { cell: 50, value: 0, focus: false },
          { cell: 51, value: 0, focus: false },
          { cell: 52, value: 0, focus: false },
          { cell: 53, value: 0, focus: false },
          { cell: 54, value: 0, focus: false },
          { cell: 55, value: 0, focus: false },
        ],
        [
          { cell: 56, value: 0, focus: false },
          { cell: 57, value: 0, focus: false },
          { cell: 58, value: 0, focus: false },
          { cell: 59, value: 0, focus: false },
          { cell: 60, value: 0, focus: false },
          { cell: 61, value: 0, focus: false },
          { cell: 62, value: 0, focus: false },
          { cell: 63, value: 0, focus: false },
        ],
      ]);
    });
  });
});
