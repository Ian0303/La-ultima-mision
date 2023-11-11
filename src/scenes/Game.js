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
    this.atack = false;
    this.shields = false;
    this.timeouts = [];
  }

  init(data) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = false;
    this.leftShieldActive = false;
    this.rightShieldActive = false;
    this.leftLightActive = false;
    this.rightLightActive = false;
    this.energy = 100;
    this.shieldCost = 3;
    this.lightCost = 2;
    this.atack = false;
  }

  create() {
    console.log("si");
    this.camerasV = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );
    this.room = this.add.image(320, 220, "room").setVisible(true);
    this.room1 = this.add.image(320, 220, "roomoff").setVisible(false);
    this.button = this.sound.add("button");
    this.alien = this.sound.add("alien");
    this.escudo = this.sound.add("escudo");

    this.leftDoorAlien = null;
    this.rightDoorAlien = null;

    this.add.image(-10, 250, "doorButton").setScale(1).setDepth(2);
    this.add.image(610, 250, "doorButton").setScale(1).setDepth(2);
    this.add.image(-10, 200, "lightButton").setScale(1).setDepth(2);
    this.add.image(610, 200, "lightButton").setScale(1).setDepth(2);
    this.player = new Player(this, 300, 280, "player");
    this.enemies.push(new Alien1());
    console.table(this.enemies);
    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);
    // this.distance = 10
    this.keyPress = false;
    this.time.addEvent({
      delay: 140000,
      callback: this.endTimer,
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 8000,
      callback: this.moveAlien,
      callbackScope: this,
      loop: true,
    });
    this.energyT = this.add
      .text(450, 50, `${this.energy}%`, {
        font: "bold 30px Console",
        color: "#008080",
      })
      .setDepth(1);
    /* this.time.addEvent({
      delay: 300000,
      callback: this.pasedNight,
      callbackScope: this,
      loop: true, SEÑALES
    }); */
    // launch de cameras y UI scene
    this.scene.launch("cameras");
    this.scene.launch("ui");
    // escucha de las teclas de escudos y luces
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
    // imagenes de las luces y escudos
    this.leftLightOn = this.add
      .image(322, 222, "leftDoorLight")
      .setVisible(false);
    this.leftShieldOn = this.add
      .image(322, 222, "shield_doorleft")
      .setVisible(false);
    this.rightLightOn = this.add
      .image(322, 222, "rightDoorLight")
      .setVisible(false);
    this.rightShieldOn = this.add
      .image(322, 222, "shield_doorright")
      .setVisible(false);
    // imagenes de energia y los botones de las puertas
    this.add.image(470, 25, "energy").setDepth(1);

    this.leftShield.on("up", () => {
      if (this.leftShieldActive) {
        return;
      }
      this.leftShieldOn.setVisible(true);
      this.leftShieldActive = true;
      this.escudo.play();
      this.energy -= this.shieldCost;
      this.energyT.setText(`${this.energy}%`);
      setTimeout(() => {
        this.leftShieldOn.setVisible(false);
        this.leftShieldActive = false;
      }, 7000);
    });

    this.rightShield.on("up", () => {
      if (this.rightShieldActive) {
        return;
      }
      this.rightShieldOn.setVisible(true);
      this.rightShieldActive = true;
      this.escudo.play();
      this.energy -= this.shieldCost;
      this.energyT.setText(`${this.energy}%`);
      setTimeout(() => {
        this.rightShieldOn.setVisible(false);
        this.rightShieldActive = false;
      }, 7000);
    });
    /// /////////////////////////////////////////////

    this.leftLigth.on("up", () => {
      if (this.leftLightActive) {
        return;
      }
      this.leftLightOn.setVisible(true);
      this.energy -= this.lightCost;
      this.energyT.setText(`${this.energy}%`);
      this.leftLightActive = true;
      this.button.play();
      setTimeout(() => {
        this.leftLightActive = false;
        this.leftLightOn.setVisible(false);
      }, 5000);
    });

    this.rightLigth.on("up", () => {
      if (this.rightLightActive) {
        return;
      }
      this.rightLightOn.setVisible(true);
      this.energy -= this.lightCost;
      this.energyT.setText(`${this.energy}%`);
      this.rightLightActive = true;
      this.button.play();
      setTimeout(() => {
        this.rightLightActive = false;
        this.rightLightOn.setVisible(false);
      }, 5000);
    });
  }

  update() {
    this.atack = false;
    // update(time, deltaTime) (tienpo transcurrido entre la activación de un evento)
    if (this.energy <= 0) {
      this.energy = 0 + 2;
      this.room = this.add.image(320, 220, "room").setVisible(false);
      this.room1 = this.add.image(320, 220, "roomoff").setVisible(true);
      this.player.setDepth(1);
    }

    this.player.update();

    // apertura de la escena de las cámaras
    if (this.camerasV.isDown) {
      this.scene.bringToTop("cameras");
    }
    // activación de escudos para evitar morir por el Alien
    /* if (this.leftShield.isDown) {
      this.leftShieldOn.setVisible(true)
      this.leftShieldActive = true
      this.escudo.play();
      setTimeout(() => {
        this.leftShieldOn.setVisible(false)
        this.leftShieldActive = false
      }, 7000);
    } else if (this.rightShield.isDown) {
      this.rightShieldOn.setVisible(true)
      this.rightShieldActive = true
      this.escudo.play();
      setTimeout(() => {
        this.rightShieldOn.setVisible(false)
        this.rightShieldActive = false
      }, 4000);
    } */

    

    // luces de las puertas, hacen visible al alien si se encuentra en la habitación conectada a la puerta

    // this.enemies.forEach(e => {
    //   if (e.room === 5 && this.rightLigth.isDown) {
    //     this.rightDoorAlien.setVisible(true)
    //     this.alien.play();
    //     setTimeout(() => {
    //       this.rightDoorAlien.setVisible(false)
    //     }, 4000);
    //   } else if (e.room !== 5 && this.rightLigth.isDown) {
    //     this.rightLightOn.setVisible(true)
    //     setTimeout(() => {
    //       this.rightLightOn.setVisible(false)
    //     }, 4000);
    //   }
    // });

    /*  this.leftShield.on('down', function () {
      this.leftShieldActive = true;
    }, this);
    this.leftShield.on('up', function () {
      if (this.leftShieldActive) {
        this.leftShieldOn.setVisible(true)
        this.leftShieldActive = true
        setTimeout(() => {
          this.leftShieldOn.setVisible(false)
          this.leftShieldActive = false
        }, 7000);
      }
    }, this);  */

    // consumo de energia de las luces y escudos

    //    this.leftShield.on('down', function () {
    //    this.leftShieldActive = true;
    //  }, this);
    //  this.leftShield.on('up', function () {
    //    if (this.leftShieldActive) {
    //      console.log('Tecla Q presionada y luego soltada');
    //      this.energy -= this.shieldqCost
    //      this.energyT.setText(`${this.energy}%`);
    //    }
    //    this.leftShieldActive = false;
    //  }, this);

    // this.rightShield.on('down', function () {
    //   this.rightShieldActive = true;
    // }, this);
    // this.rightShield.on('up', function () {
    //   if (this.rightShieldActive) {
    //     console.log('Tecla Q presionada y luego soltada');
    //     this.energy -= this.shieldCost
    //     this.energyT.setText(`${this.energy}%`);
    //   }
    //   this.rightShieldActive = false;
    // }, this);

    // consumo de energia de los escudos
    // game over
    // this.scene.bringToTop("gameOver");
    if (
      this.atack && this.rightShieldActive === false && this.leftShieldActive === false
    ) {
      console.log("atack", this.atack);
      console.log("rightShieldActive", this.rightShieldActive);
      console.log("leftShieldActive", this.leftShieldActive);
      this.dead = true;
      console.warn(this.dead);
      this.atack = false;

      this.enemies.forEach((e) => {
        if (e.room === 4) {
          if (this.leftShieldActive === false) {
            if (!this.leftDoorAlien) {
              this.leftDoorAlien = this.add
                .image(322, 222, "leftDoorAlien")
                .setVisible(false);
              const attack4 = setTimeout(() => {
                this.atack = true;
                console.warn("atack true");
              }, 5000);
              this.timeouts.push(attack4);
            }
          }
          if (this.leftLigth.isDown) {
            this.leftDoorAlien.setVisible(true);
            this.alien.play();
            setTimeout(() => {
              this.leftDoorAlien.setVisible(false);
            }, 4000);
          } else {
            this.leftLightOn.setVisible(true);
            setTimeout(() => {
              this.leftLightOn.setVisible(false);
            }, 4000);
          }  
        }
         
  
        if (e.room === 5) {
          if (this.rightShieldActive === false) {
            if (!this.rightDoorAlien) {
              this.rightDoorAlien = this.add
                .image(322, 222, "rightDoorAlien")
                .setVisible(false);
              const attack5 = setTimeout(() => {
                this.atack = true;
                console.warn("atack true");
              }, 5000);
              this.timeouts.push(attack5);
            }
          }
            if (this.rightLigth) {
            this.rightDoorAlien.setVisible(true);
            this.alien.play();
            setTimeout(() => {
              this.rightDoorAlien.setVisible(false);
            }, 4000);
          } else {
            this.rightLightOn.setVisible(true);
            setTimeout(() => {
              this.rightLightOn.setVisible(false);
            }, 4000);
          }  
        }
      });
      if (
        (this.dead && this.leftShieldActive === false) ||
        (this.dead && this.rightShieldActive === false)
      ) {
        console.log("game over");
      }
      
    }
    if (this.dead) {
      console.warn(this.dead);
      this.cleanTimeOuts();
      this.enemies = [];
      this.scene.stop("cameras");
      this.scene.stop("ui");
      this.scene.start("gameOver");
    }
  }

  // movimient del alien
  moveAlien() {
    //this.atack = false;

    this.enemies.forEach((e) => e.move());
    events.emit("aliens-moved", this.enemies);
  }
  // función de noche pasada, nivel superado
  endTimer() {
    if (!this.dead) {
      this.scene.remove("cameras");
      this.scene.start("passedNight", {night: 1 + this.night});
      this.scene.launch("cameras");
    }
  }

  cleanTimeOuts() {
    while (this.timeouts.length > 0) {
      const t = this.timeouts.pop();
      clearTimeout(t);
    }
  }
}
