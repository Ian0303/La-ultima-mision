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

    /* switch (this.room) {
      case 1:
        this.sprite.image(320, 240, this.texture)
        break;
      case 2:
        this.sprite.image(960, 240, this.texture)
        break;
      case 3:
        this.sprite.image(1600, 240, this.texture)
        break;
      case 4:
        this.sprite.image(320, 720, this.texture)
        break;
      case 5:
        this.sprite.image(1600, 720, this.texture)
        break;
      case 6:
        this.sprite.image(960, 720, this.texture)
        break;

      default:
        break;
    } */
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