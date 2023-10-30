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
    this.atack = 0;
   
  }

  init(data) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = data.dead || false;
  }

  create() {

     // agregar un texto en la esquna superior izquierda con el nombre del usuario
     const user = this.firebase.getUser();
     this.add.text(10, 10, user.displayName || user.uid);
 
     // agregar un texto en la esquna superior derecha con el puntaje del usuario
     this.score = 0;
     this.textScore = this.add.text(600, 10, `Score: ${this.score}`);

    // const scene = this;
    this.camerasV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
     

    this.add.image(320, 240, "room");
    console.log("si");

    this.player = new Player(this, 300, 280, "player");

    this.enemies.push(new Alien1());

    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);

    this.time.addEvent({
      delay:480000,
      callback: this.endTimer,
      callbackScope: this,
      loop: false,
    })

    this.time.addEvent({
      delay: 2000,
      callback: this.moveAlien,
      callbackScope: this,
      loop: true,
    });

    // launch UI scene
    this.scene.launch("ui");
    this.scene.launch("cameras");


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
   
      this.enemies.forEach(e => {
      if (e.room === 4) {
        this.add.image( 200, 200, "rightDoorLight")
        e.addToScene(this)
        e.setVisible(false)
        if (this.atack === 8) {
          this.dead = true
        }
        // añidir contador, si el contador el llega a 8 gameOver = true 
      }
    }) ;
    
   /*  const user = this.firebase.getUser();
    this.firebase.saveGameData(user.uid, {
      score: this.score,
      time: this.timeInSeconds,
    });

    // si el puntaje es mayor al puntaje mas alto, agregarlo a la lista de high scores
    this.firebase.getHighScores().then((highScores) => {
      const highScore = highScores[0] || { score: 0 };
      if (this.score > highScore.score) {
        this.firebase
          .addHighScore(user.displayName || user.uid, this.score)
          .then(() => {
            this.scene.start("scores");
          });
      } else {
        this.scene.start("scores");
      }
    });*/
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

  endTimer() {
    if (this.dead) {
      this.scene.start("pasedNight");
    } else {
      this.scene.start("gameOver");
    }
  }
}
