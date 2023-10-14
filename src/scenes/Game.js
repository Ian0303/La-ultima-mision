import Phaser from "phaser";
import Player from "../components/Player";
import Alien1 from "../components/Alien1";
import events from "./EventCenter";

export default class Game extends Phaser.Scene {
  enemies = [];

  constructor() {
    super("game");
    this.player = null;
    this.night = 1;
    this.dead = false;
  }

  init(data) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = data.dead || false;
  }

  create() {
    const scene = this;
    this.add
      .image(320, 450, "openCameras")
      .setDepth(1)
      .setScale(0.7)
      .setInteractive()
      .on("pointerdown", () => this.scene.launch("cameras"));
    this.add.image(320, 240, "room");
    console.log("si");

    this.player = new Player(this, 300, 280, "player");

    this.enemies.push(new Alien1());

    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);

    this.timer = 20;

    this.time.addEvent({
      delay: 2000,
      callback: this.moveAlien,
      callbackScope: this,
      loop: true,
    });

    // launch UI scene
    this.scene.launch("ui");
  }

  update() {
    this.player.update();
  }

  moveAlien() {
    this.enemies.forEach((e) => e.move());
    events.emit("aliens-moved", this.enemies);
  }
}
