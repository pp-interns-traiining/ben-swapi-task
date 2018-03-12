"use strict";

class BtnController {
  constructor() {
    console.log(this.value);
  }
  increaseNumber() {
    console.log(this.value);
    this.value++;
  }

  isGreen() {
    return this.value % 4 === 1;
  }
  isBlue() {
    return this.value % 4 === 2;
  }
  isRed() {
    return this.value % 4 === 3;
  }
  isWhite() {
    return this.value % 4 === 0;
  }
  isFocused() {
    return this.focus;
  }
}

angular.module("drumMachine").component("drumMachineButton", {
  templateUrl: "/app/components/drum-machine/drum-machine-button.template.html",
  controller: BtnController,
  bindings: {
    value: "=",
    cellNumber: "<",
    focus: "<",
    onIncrement: "&",
  },
});
