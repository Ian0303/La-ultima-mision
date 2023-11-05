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
  }

  create() {
    console.log("si");
    this.camerasV = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    this.add.image(320, 220, "room");
    this.add
      .image(-10, 250, "doorButton")
      .setScale(1)
    this.add
      .image(610, 250, "doorButton")
      .setScale(1)
    this.add
      .image(-10, 200, "lightButton")
      .setScale(1)
    this.add
      .image(610, 200, "lightButton")
      .setScale(1)
    this.player = new Player(this, 300, 280, "player");
    this.enemies.push(new Alien1());
    this.cameras.main.startFollow(this.player).setFollowOffset(0, 100);
    // this.distance = 10
    this.keyPress = false
    this.time.addEvent({
      delay: 120000,
      callback: this.endTimer,
      callbackScope: this,
      loop: false,
    })
    this.time.addEvent({
      delay: 8000,
      callback: this.moveAlien,
      callbackScope: this,
      loop: true,
    })
    this.energyT = this.add.text(450, 50, `${this.energy}%`, {
      font: 'bold 30px Console',
      color: "#008080",
    });
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
    this.leftLightOn = this.add.image(322, 222, "leftDoorLight").setVisible(false)
    this.leftShieldOn = this.add.image(322, 222, "shield_doorleft").setVisible(false)
    this.rightLightOn = this.add.image(322, 222, "rightDoorLight").setVisible(false)
    this.rightShieldOn = this.add.image(322, 222, "shield_doorright").setVisible(false)
    // imagenes de energia y los botones de las puertas
    this.add.image(470, 25, "energy");
  }

  update() {
    // update(time, deltaTime) (tienpo transcurrido entre la activación de un evento)

    this.player.update();
    // apertura de la escena de las cámaras
    if (this.camerasV.isDown) {
      this.scene.bringToTop("cameras")
    }
    // activación de escudos para evitar morir por el Alien
    if (this.leftShield.isDown) {
      this.leftShieldOn.setVisible(true)
      this.leftShieldActive = true
      setTimeout(() => {
        this.leftShieldOn.setVisible(false)
        this.leftShieldActive = false
      }, 7000);
    } else if (this.rightShield.isDown) {
      this.rightShieldOn.setVisible(true)
      this.rightShieldActive = true
      setTimeout(() => {
        this.rightShieldOn.setVisible(false)
        this.rightShieldActive = false
      }, 4000);
    }
    // ataque del Alien, asesinato del jugador
    this.enemies.forEach(e => {
      if (e.room === 4 && this.rightShieldActive === false) {
        this.rightDoorAlien = this.add.image(322, 222, "rightDoorAlien")
          .setVisible(false)
        setTimeout(() => {
          this.atack = true;
        }, 7000);
        if (this.rightShieldActive === false && this.atack === true) {
          this.dead = true;
          this.atack = false;
        }
        else {
          this.dead = false;
        }
      }
    });
    this.enemies.forEach(e => {
      if (e.room === 5 && this.rightShieldActive === false) {
        this.rightDoorAlien = this.add.image(322, 222, "rightDoorAlien")
          .setVisible(false)
        setTimeout(() => {
          this.atack = true;
        }, 7000);
        if (this.rightShieldActive === false && this.atack === true) {
          this.dead = true;
          this.atack = false;
        }
        else {
          this.dead = false;
        }
      }
    });
    // luces de las puertas, hacen visible al alien si se encuentra en la habitación conectada a la puerta
    this.enemies.forEach(e => {
      if (e.room === 4 && this.leftLigth.isDown) {
        this.leftDoorAlien.setVisible(true)
        setTimeout(() => {
          this.leftDoorAlien.setVisible(false)
        }, 4000);
      } else if (e.room !== 4 && this.leftLigth.isDown) {
        this.leftLightOn.setVisible(true)
        setTimeout(() => {
          this.leftLightOn.setVisible(false)
        }, 4000);
      }
    });
    this.enemies.forEach(e => {
      if (e.room === 5 && this.rightLigth.isDown) {
        this.rightDoorAlien.setVisible(true)
        setTimeout(() => {
          this.rightDoorAlien.setVisible(false)
        }, 4000);
      } else if (e.room !== 5 && this.rightLigth.isDown) {
        this.rightLightOn.setVisible(true)
        setTimeout(() => {
          this.rightLightOn.setVisible(false)
        }, 4000);
      }
    });

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

    /*   this.leftShield.on('down', function () {
       this.leftShieldActive = true;
     }, this);
     this.leftShield.on('up', function () {
       if (this.leftShieldActive) {
         console.log('Tecla Q presionada y luego soltada');
         this.energy -= this.lightCost
         this.energyT.setText(`${this.energy}%`);
       }
       this.leftShieldActive = false;
     }, this); */

    this.rightShield.on('down', function () {
      this.rightShieldActive = true;
    }, this);
    this.rightShield.on('up', function () {
      if (this.rightShieldActive) {
        console.log('Tecla Q presionada y luego soltada');
        this.energy -= this.lightCost
        this.energyT.setText(`${this.energy}%`);
      }
      this.rightShieldActive = false;
    }, this);

    this.leftLigth.on('down', function () {
      this.leftLightActive = true;
    }, this);
    this.leftLigth.on('up', function () {
      if (this.leftLightActive) {
        console.log('Tecla Q presionada y luego soltada');
        this.energy -= this.lightCost
        this.energyT.setText(`${this.energy}%`);
      }
      this.leftLightActive = false;
    }, this);

    this.rightLigth.on('down', function () {
      this.rightLightActive = true;
    }, this);
    this.rightLigth.on('up', function () {
      if (this.rightLightActive) {
        console.log('Tecla Q presionada y luego soltada');
        this.energy -= this.lightCost
        this.energyT.setText(`${this.energy}%`);
      }
      this.rightLightActive = false;
    }, this);

    // consumo de energia de los escudos
    // game over
    // this.scene.bringToTop("gameOver");
    if (this.dead === true && this.leftShieldActive === false || this.dead === true && this.rightShieldActive === false) {
      console.log("game over")
    }
    if (this.dead) {
      this.scene.remove("cameras")
      this.scene.start("gameOver");
    }
  }

  // movimient del alien
  moveAlien() {
    this.enemies.forEach((e) => e.move());
    events.emit("aliens-moved", this.enemies);
  }

  // función de noche pasada, nivel superado
  endTimer() {
    if (!this.dead) {
      this.scene.remove("cameras")
      this.scene.start("passedNight");
    }
  }
}
