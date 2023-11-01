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
    /*  this.add
       .image(320, 450, "openCameras")
       
       .setScale(0.7) */

    this.add.image(320, 240, "room");


    this.add
      .image(-60, 250, "doorButton")
      .setScale(1)

    this.add
      .image(700, 250, "doorButton")
      .setScale(1)

    this.add
      .image(-60, 200, "lightButton")
      .setScale(1)

    this.add
      .image(700, 200, "lightButton")
      .setScale(1)



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

    /* this.time.addEvent({
      delay: 300000,
      callback: this.pasedNight,
      callbackScope: this,
      loop: true,
    }); */


    // launch UI scene
    this.scene.launch("ui");

    this.camerasS = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );

    /* this.timer = 10
              this.time.addEvent({
                delay: 5,
                callback: this.oneSecond,
                callbackScope: this,
                loop: true,
              });  */
    this.leftLigth = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.Q
    );
    this.rightLigth = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.E
    );
    this.leftShield = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.A
    );
    this.rightShield = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.D
    );
    this.leftLightOn = this.add.image(-120, 230, "leftDoorLight").setVisible(false)
    this.leftShieldOn = this.add.image(-120, 230, "shield_doorleft").setVisible(false)
    this.rightLightOn = this.add.image(750, 230, "rightDoorLight").setVisible(false)
    this.rightShieldOn = this.add.image(750, 230, "shield_doorright").setVisible(false)

  }

  update() { // update(time, deltaTime)
    this.player.update();
    
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
    
    this.distance = 10
   

    if (this.camerasS.isDown) {
      this.camera = this.scene.bringToTop("cameras");
    }

    if (this.leftLigth.isDown)  {
      this.leftLightOn.setVisible(true)
      setTimeout(() => {
      this.leftLightOn.setVisible(false) 
      }, 1500);
    }else if (this.rightLigth.isDown) {
      this.rightLightOn.setVisible(true)
      setTimeout(() => {
      this.rightLightOn.setVisible(false) 
      }, 1500);
  
    }
    if (this.leftShield.isDown) {
      this.leftShieldOn.setVisible(true)
      this.leftShieldActive = true
      setTimeout(() => {
      this.leftShieldOn.setVisible(false)
      this.leftShieldActive = false
      }, 1500);
    }else if (this.rightShield.isDown) {
      this.rightShieldOn.setVisible(true)
      this.rightShieldActive = true
      setTimeout(() => {
      this.rightShieldOn.setVisible(false)
      this.rightShieldActive = false
      }, 1500);
  
    } 


  }

  moveAlien() {
    this.enemies.forEach((e) => e.move());
    events.emit("aliens-moved", this.enemies);
  }

  pasedNight() {
    if (this.passed === true) {
      this.scene.bringToTop("passedNight")
    }
  }

  gameOver() {
    if (this.dead === true) {
      this.scene.bringToTop("gameOver")
    }
  }


  // contadorWin

}
