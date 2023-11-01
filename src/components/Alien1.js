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

    switch (this.room) {
      case 1:
        this.x = 320
        this.y = 240
        break;
      case 2:
        this.x = 960
        this.y = 240
        break;
      case 3:
        this.x = 1600
        this.y = 240
        break;
      case 4:
        this.x = 320
        this.y = 720
        break;
      case 5:
        this.x = 1600
        this.y = 720
        break;
      case 6:
        this.x = 960
        this.y = 720
        break;

      default:
        this.x = 320
        this.y = 240
        break;
    }
  }

  move() {
    const posibleRooms = movement[this.room];
    this.room = posibleRooms ? Phaser.Utils.Array.GetRandom(posibleRooms) : 3;
    console.log(this.room);
  }
}


// if(tiempo de moversemoverse)
//* se mueve* */

/**/