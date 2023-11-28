import Phaser from "phaser";
import Player from "../components/Player";
import Alien1 from "../components/Alien1";
import events from "./EventCenter";
// import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { /* FETCHED, FETCHING, READY, */ TODO } from "../enums/status";
import { /* getTranslations, */ getPhrase } from "../services/translations";
import key from "../enums/key";
import Alien2 from "../components/Alien2";
import Alien3 from "../components/Alien3";
import Alien4 from "../components/Alien4";

export default class Game extends Phaser.Scene {
  #textSpanish;

  #textGerman;

  #textEnglish;

  #textPortuguese;

  #wasChangedLanguage = TODO;

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

  init(data, language) {
    this.cursors = this.input.keyboard.createCursorKeys();
    this.night = data.night || 1;
    this.dead = false;
    this.leftShieldActive = false;
    this.rightShieldActive = false;
    this.leftLightActive = false;
    this.rightLightActive = false;
    this.energy = 100;
    this.shieldCost = 1;
    this.lightCost = 1;
    this.camerasCost = 1;
    this.atack = false;
    this.winTime = 480
    this.language = language;
    this.deactivate = false;
  }

  create() {
    // agregar un texto en la esquna superior izquierda con el nombre del usuario
    /* const user = this.firebase.getUser();
    this.firebase.saveGameData(user.uid, {
      night: this.night,
      time: new Date(),
    });
    this.add.text(10, 10, user.displayName || user.uid); */

    console.log("si");
    this.camerasV = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.UP
    );
    this.room = this.add.image(320, 220, "room").setVisible(true);
    this.room1 = this.add.image(320, 220, "roomoff").setVisible(false);
    this.button = this.sound.add("button");
    this.alien = this.sound.add("alien");
    this.shield = this.sound.add("shield");
    this.steps = this.sound.add("steps");
    this.background = this.sound.add("background", { loop: true });
    this.background.play();
    this.leftDoorAlien = null;
    this.rightDoorAlien = null;
    this.buttons = this.physics.add.staticGroup();
    this.leftDoorButton = this.buttons.create(-10, 250, "doorButton").setScale(1).setDepth(2).setSize(125, 125);
    this.rightDoorButton = this.buttons.create(610, 250, "doorButton").setScale(1).setDepth(2).setSize(125, 125);
    this.leftLightButton = this.buttons.create(-10, 200, "lightButton").setScale(1).setDepth(2).setSize(125, 125);
    this.rightLightButton = this.buttons.create(610, 200, "lightButton").setScale(1).setDepth(2).setSize(125, 125);
    this.player = new Player(this, 300, 280, "player").setDepth(2);
    this.enemies.push(new Alien1());
    this.minutes = Math.floor(this.winTime / 60);
    this.seconds = Math.floor(this.winTime % 60);
    this.formattedTime = `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);
    this.keyPress = false;

    this.time.addEvent({
      delay: 1000, // 140000
      callback: this.oneSecond,
      callbackScope: this,
      loop: true,
    });
    this.time.addEvent({
      delay: 8000,
      callback: this.moveAlien,
      callbackScope: this,
      loop: true,
    });

    this.time.addEvent({
      delay: 120000,
      callback: this.addAlien2,
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 240000,
      callback: this.addAlien3,
      callbackScope: this,
      loop: false,
    });
    this.time.addEvent({
      delay: 360000,
      callback: this.addAlien4,
      callbackScope: this,
      loop: false,
    });

    this.energyT = this.add
      .text(450, 50, `${this.energy}%`, {
        font: "bold 30px Console",
        color: "#008080",
      })
      .setDepth(1);
    this.Title18 = this.add.text(90, 20, getPhrase(key.Menu.Title18), {
      font: "bold 30px Console",
      color: "#008080",
    }).setDepth(1);
    this.timeText = this.add
      .text(100, 50, `${this.formattedTime}`, {
        font: "bold 30px Console",
        color: "#008080",
      }).setDepth(1);
    // SEÑALES
    // launch de cameras y UI scene
    this.scene.launch("cameras", { energy: this.energy });
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
  }

  update() {
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
      if (this.scene.getIndex("game") > this.scene.getIndex("cameras")) {
        this.energy -= this.camerasCost;
      }
      this.energyT.setText(`${this.energy}%`);
      events.emit("actualizar energía", { energy: this.energy });
    }
    if (
      this.atack &&
      this.rightShieldActive === false &&
      this.leftShieldActive === false
    ) {
      console.log("atack", this.atack);
      console.log("rightShieldActive", this.rightShieldActive);
      console.log("leftShieldActive", this.leftShieldActive);
      this.dead = true;
      console.warn(this.dead);
      this.atack = false;
      if (
        (this.dead && this.leftShieldActive === false) ||
        (this.dead && this.rightShieldActive === false)
      ) {
        console.log("game over");
      }
    }
    if (this.dead) {
      this.rightShieldActive = false;
      this.leftShieldActive = false;
      console.warn(this.dead);
      this.cleanTimeOuts();
      this.enemies = [];
      this.scene.stop("cameras");
      this.scene.stop("ui");
      this.scene.start("gameOver", { enemies: this.enemies });
      this.background.stop();
    }
     if (this.atack) {
      setTimeout(() => {
        this.atack = false
      }, 3000); 

    }
    if (this.player.x <= 90 && this.player.x >= -110 && this.energy > 0) {
      if (this.leftShield.isDown) {
        if (this.leftShieldActive) {
          return;
        }
        this.leftShieldOn.setVisible(true).setDepth(2);
        this.leftShieldActive = true;
        this.shield.play();
        this.energy -= this.shieldCost;
        this.energyT.setText(`${this.energy}%`);
        setTimeout(() => {
          this.leftShieldOn.setVisible(false);
          this.leftShieldActive = false;
        }, 7000);
      }
    }
    if (this.player.x <= 710 && this.player.x >= 510 && this.energy > 0) {
      if (this.rightShield.isDown) {
        if (this.rightShieldActive) {
          return;
        }
        this.rightShieldOn.setVisible(true).setDepth(2);
        this.rightShieldActive = true;
        this.shield.play();
        this.energy -= this.shieldCost;
        this.energyT.setText(`${this.energy}%`);
        setTimeout(() => {
          this.rightShieldOn.setVisible(false);
          this.rightShieldActive = false;
        }, 7000);
      }
    }
    /// /////////////////////////////////////////////
    // luces
    if (this.player.x <= 90 && this.player.x >= -110 && this.energy > 0) {
      if (this.leftLigth.isDown) {
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
      }
    }
    if (this.player.x <= 710 && this.player.x >= 510 && this.energy > 0) {
      if (this.rightLigth.isDown) {
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
      }
    }
    this.enemies.forEach((e) => {
      if (e.room === 4) {
        if (this.leftLigth.isDown) {
          this.leftLightActive = true
          if (this.leftLigth) {
            this.leftDoorAlien.setVisible(true);
            this.alien.play();
            setTimeout(() => {
              this.leftDoorAlien.setVisible(false);
            }, 4000);
          }
        }
      }
      if (e.room === 5) {
        if (this.rightLigth.isDown) {
          this.rightLightActive = true
          if (this.rightLigth) {
            this.rightDoorAlien.setVisible(true);
            this.alien.play();
            setTimeout(() => {
              this.rightDoorAlien.setVisible(false);
            }, 4000);
          }
        }
      }
    });
  }

  // movimient del alien
  moveAlien() {
    this.enemies.forEach((e) => {
      e.move();
    });
    events.emit("aliens-moved", this.enemies);
    this.checkAfterMove();
    setTimeout(() => {
      events.emit("actualizar energía", this.energy);
    }, 0);
  }

  addAlien2() {
    this.enemies.push(new Alien2());
  }

  addAlien3() {
    this.enemies.push(new Alien3());
  }

  addAlien4() {
    this.enemies.push(new Alien4());
  }

  checkAfterMove() {
    // ataque del Alien, asesinato del jugador
    this.enemies.forEach((e) => {
      if (e.room === 4) {
        if (this.leftShieldActive === false) {
          if (!this.leftDoorAlien) {
            this.leftDoorAlien = this.add
              .image(344, 207, "leftDoorAlien")
              .setVisible(false);
          }
          const attack4 = setTimeout(() => {
            this.atack = true;
            console.warn("atack true");
          }, 5000);
          this.timeouts.push(attack4);
        }
        if (this.leftLigth.isDown) {
          this.leftDoorAlien.setVisible(true);
          this.alien.play();
          setTimeout(() => {
            this.leftDoorAlien.setVisible(false);
          }, 4000);
        }
      }

      if (e.room === 5) {
        if (this.rightShieldActive === false) {
          if (!this.rightDoorAlien) {
            this.rightDoorAlien = this.add
              .image(300, 207, "rightDoorAlien")
              .setVisible(false);
          }
          const attack5 = setTimeout(() => {
            this.atack = true;
            console.warn("atack true");
          }, 5000);
          this.timeouts.push(attack5);
        }
        if (this.rightLigth.isDown) {
          this.rightDoorAlien.setVisible(true);
          this.alien.play();
          setTimeout(() => {
            this.rightDoorAlien.setVisible(false);
          }, 4000);
        }
      }
    });
  }

  // función de noche pasada, nivel superado
  oneSecond() {
    this.winTime -= 1
    this.minutes = Math.floor(this.winTime / 60);
    this.seconds = Math.floor(this.winTime % 60);
    this.formattedTime = `${this.minutes}:${this.seconds < 10 ? '0' : ''}${this.seconds}`;
    this.timeText.setText(this.formattedTime)
    if (this.winTime === 0 && !this.dead) {
      this.enemies = [];
      this.scene.remove("cameras");
      this.scene.start("manga", { night: 1 + this.night });
    }
  }

  cleanTimeOuts() {
    while (this.timeouts.length > 0) {
      const t = this.timeouts.pop();
      clearTimeout(t);
    }
  }

  updateEnergy() {
    if (this.scene.getIndex("game") < this.scene.getIndex("cameras")) {
      events.emit("actualizar energía", this.energy -= this.lightCost);
      this.energyT.setText(`${this.energy}%`);
      console.log(`la energia es de: ${this.energy} %`)
    }
  }
}