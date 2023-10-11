import Phaser from "phaser";
import Player from "../components/Player";

export default class Game extends Phaser.Scene {
  enemies = [];

  constructor() {
    super("game");
    this.player = null;
    this.night = 1;
    this.dead = false
  }

  init(data) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = data.dead || false;
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

    this.player = new Player(this, 300, 280, "player");

    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);

    this.timer = 60;
    
    this.time.addEvent({
      delay: 1000,
      callback: this.onSecond,
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 5000,
      callback: this.moverAlien,
      callbackScope: this,
      loop: true,
    });

     // launch UI scene
     this.scene.launch("ui");
  }

  update() {
    this.player.update();
    
  }

  onSecond() {
    this.timer -= 1;
    if (this.timer === 0 && this.dead === false) {
      this.scene.switch("menu");
    }
  }
}
