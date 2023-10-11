import Phaser from "phaser";
import movement from "./movement";

export default class Alien1 {
  constructor(scene, x = 200, y = 200) {
    this.scene = scene;
    this.init(x, y);
    this.room = 0;
    this.active = false;
  }

  init(x, y) {
    this.sprite1 = this.scene.add
      .image(x, y, "bonnie")
      .setScale(0.2)
      .setVisible(false);
  }

  move() {
    this.room = Phaser.Utils.Array.GetRandom(movement[this.room]);
    console.log(this.room);
  }

  visible() {
    this.sprite1.setVisible(true);
  }
}
