import Phaser from "phaser";
import Player from "../components/Player";

export default class Game extends Phaser.Scene {
  constructor() {
    super("game");
    this.player = null;
  }

  init() {
    this.cursors = this.input.keyboard.createCursorKeys();
  }

  create() {
    this.add
      .image(320, 450, "openCameras")
      .setDepth(1)
      .setScale(0.7)
      .setInteractive()
      .on("pointerdown", () => this.scene.launch("cameras"));
    this.add.image(320, 240, "room");
    console.log("si");
    console.log(Phaser.Input.Keyboard.KeyCodes);

    this.player = new Player(this, 300, 280, "player");

    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);
  }

  update() {
    this.player.update();
  }
}
