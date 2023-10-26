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
    this.passed = false;
  }

  init(data) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = data.dead || false;
  }

  create() {
    // const scene = this;
    this.camerasV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
     

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
    this.scene.launch("cameras");

    // this.camerasS = this.input.keyboard.addKey(
    //   Phaser.Input.Keyboard.KeyCodes.UP
    // );

    /* this.timer = 10
          this.time.addEvent({
            delay: 5,
            callback: this.oneSecond,
            callbackScope: this,
            loop: true,
          });  */
  }

  update() {
    // update(time, deltaTime)
    this.player.update();

    if (this.camerasV.isDown) {
      this.scene.bringToTop("cameras");
    } 
   /*  if (this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)) {
      this.scene.bringToTop("cameras");
    } */
    /* this.enemies.forEach(e => {
      if (e.room === 5 || e.room === 4) {
        e.x = 200
        e.y = 200
        e.addToScene(this)
        e.setVisible(false)
        if (contador === 8) {
          gameOver = true
        }

        // añidir contador, si el contador el llega a 5 gameOver = true 

      }
    }) ; */
    // if (this.camerasS.isDown) {
    //   this.camera = this.scene.bringToTop("cameras");
    // }
  }

  moveAlien() {
    this.enemies.forEach((e) => e.move());
    events.emit("aliens-moved", this.enemies);
  }

  pasedNight() {
    if (this.passed === true) {
      this.scene.bringToTop("passedNight");
    }
  }

  gameOver() {
    if (this.dead === true) {
      this.scene.bringToTop("gameOver");
    }
  }

  // contadorWin
}
