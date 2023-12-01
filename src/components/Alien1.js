import Phaser from "phaser";

const movementAlien1 = [
  null, // sala inicial 0
  [6],
  [],
  [],
  [9],
  [10],
  [9, 10], // sala personaje 6
  [],
  [],
  [4, 6],
  [5, 6],
];

export default class Alien1 {
  constructor(x = 960, y = 240) {
    this.x = x;
    this.y = y;
    this.room = 0;
    this.active = false;
    this.texture = "alien1";

  }

  // añade al Alien en la escena
  addToScene(scene) {
    switch (this.room) {
      case 1:
        this.x = 960;
        this.y = 240;
        this.texture = "alien3C1";
        break;
      case 2:
        this.x = -320;
        this.y = 240;
        this.texture = "alienC2";
        break;
      case 3:
        this.x = 2240;
        this.y = 240;
        this.texture = "alien1";
        break;
      case 4:
        this.x = -320;
        this.y = 720;
        this.texture = "alien3C4";
        break;
      case 5:
        this.x = 2240;
        this.y = 720;
        this.texture = "alien3C5";
        break;
      case 6:
        this.x = 960;
        this.y = 720;
        this.texture = "alien3C6";
        break;
      case 7:
        this.x = 320;
        this.y = 240;
        this.texture = "alien1";
        break;
      case 8:
        this.x = 1600;
        this.y = 240;
        this.texture = "alien1";
        break;
      case 9:
        this.x = 320;
        this.y = 720;
        this.texture = "alien3C9";
        break;
      case 10:
        this.x = 1600;
        this.y = 720;
        this.texture = "alien3C10";
        break;
      default:
        // this.x = -100
        // this.y = -100
        break;
    }

    this.sprite = scene.add
      .image(this.x, this.y, this.texture)
      .setName(this.texture)
      .setVisible(true)
      .setDepth(2);

  }

  // mueve al alien según un numero aleatorio dentro de las posibilidades de movimiento (momentaneamente desaprobechado)
  move() {
    const from = this.room;
    const posibleRooms = movementAlien1[this.room];
    this.room = posibleRooms ? Phaser.Utils.Array.GetRandom(posibleRooms) : 1;
    console.log("move to ", this.room, " from ", from);
  }
}
// if(tiempo de moverse moverse)
//* se mueve* */
