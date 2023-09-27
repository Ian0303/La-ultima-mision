import Phaser from "phaser";

export default class Alien1 {
  constructor(scene) {
    this.scene = scene;
    this.init();
  }

  init() {
    this.scene.add.image(200, 200, "bonnie").setScale(0.2).setVisible(false);
  }
}
