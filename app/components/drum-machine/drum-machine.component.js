"use strict";

class DrumMachineController {
  constructor($timeout) {
    this.$timeout = $timeout;

    this.instruments = [
      new Audio("components/drum-machine/audio/Note_Low.wav"),
      new Audio("components/drum-machine/audio/Clap.wav"),
      new Audio("components/drum-machine/audio/Tom_Hi.wav"),
      new Audio("components/drum-machine/audio/Tom_Low.wav"),
      new Audio("components/drum-machine/audio/HiHat_Open.wav"),
      new Audio("components/drum-machine/audio/HiHat_Closed.wav"),
      new Audio("components/drum-machine/audio/Snare.wav"),
      new Audio("components/drum-machine/audio/Bass.wav"),
    ];

    this.bpm = 60;
    this.ms = 60000 / this.bpm;
    this.loop = true;
    this.grid = Array(8)
      .fill()
      .map(
        (rowItem, rowIndex) =>
          (rowItem = Array(8)
            .fill()
            .map(
              (cellItem, cellIndex) =>
                (cellItem = {
                  cell: cellIndex + rowIndex * 8,
                  value: 0,
                  focus: false,
                }),
            )),
      );
  }

  cycle(iterations) {
    let grid = this.grid;
    for (let i = 0; i < grid.length; i++) {
      grid[i].map((item, index) => {
        this.playAudio(item, index, iterations, i);
        item.focus = iterations % 8 === index;
      });
    }
    this.grid = grid;
    console.log(grid);
    if (this.loop) {
      this.$timeout(() => {
        this.cycle(iterations + 1);
      }, this.ms);
    }
  }

  playAudio(item, index, iterations, i) {
    if (item.value % 4 === 1 && index === iterations % 8) {
      this.resetAndPlay(i);
    }
    if (item.value % 4 === 2 && index === iterations % 8) {
      this.resetAndPlay(i);
      this.$timeout(() => {
        this.resetAndPlay(i);
      }, this.ms / 2);
    }
    if (item.value % 4 === 3 && index === iterations % 8) {
      this.$timeout(() => {
        this.resetAndPlay(i);
      }, this.ms / 2);
    }
  }

  resetAndPlay(n) {
    this.instruments[n].pause();
    this.instruments[n].currentTime = 0;
    this.instruments[n].play();
  }
  toggleLoop() {
    this.loop = !this.loop;
  }
  changeMs(bpm) {
    this.ms = 60000 / this.bpm;
  }
}

DrumMachineController.$inject = ["$timeout"];

angular.module("drumMachine").component("drumMachineGrid", {
  templateUrl: "app/components/drum-machine/drum-machine.template.html",
  controller: DrumMachineController,
});
