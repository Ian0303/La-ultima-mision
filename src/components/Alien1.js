import Phaser from "phaser";
import movement from "./movement";

export default class Alien1 {
  constructor(x = 200, y = 200) {
    this.x = x;
    this.y = y;
    this.room = 0;
    this.active = false;
    this.texture = "bonnie";
  }

  addToScene(scene) {
    this.sprite = scene.add
      .image(this.x, this.y, this.texture)
      .setScale(0.2)
      .setName(this.texture)
      .setVisible(true);
  }

  move() {
    const posibleRooms = movement[this.room];
    this.room = posibleRooms ? Phaser.Utils.Array.GetRandom(posibleRooms) : 3;
    console.log(this.room);
  }
}
