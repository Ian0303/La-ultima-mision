import Phaser from "phaser";
import movement from "./movement";

export default class Alien1 {
  constructor(x = 300, y = 300) {
    this.x = x;
    this.y = y;
    this.room = 0;
    this.active = false;
    this.texture = "alien1";
    console.log("efectivamente")
  }

  addToScene(scene) {
    this.sprite = scene.add
      .image(this.x, this.y, this.texture) 
      .setScale(0.7)
      .setName(this.texture)
      .setVisible(true);
  }

  move() {
    const posibleRooms = movement[this.room];
    this.room = posibleRooms ? Phaser.Utils.Array.GetRandom(posibleRooms) : 3;
    console.log(this.room);
  }
} //cambiar las cordenadas, calcular

// if(tiempo de moversemoverse)
//* se mueve* */

/**/