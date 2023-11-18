import Phaser from "phaser";

export default class Preload extends Phaser.Scene {
  constructor() {
    super("preload");
  }

  preload() {
    this.load.image("bMenu", "assets/background/bmenu.jpg");

    this.load.image("bMenu1", "assets/background/bmenu1.jpg");
    this.load.image("bMenu2", "assets/background/bmenu1_2.jpg");
    this.load.image("bMenu3", "assets/background/bmenu2.jpg");
    this.load.image("bMenu4", "assets/background/bmenu2_2.jpg");

    this.load.image("room", "assets/background/habitacion1.jpg");
    // .load.image("camera1", "assets/background/Camera1.jpg");
    // this.load.image("camera2", "assets/background/camara2.jpg");
    // this.load.image("camera3", "assets/background/camara3.jpg");
    this.load.image("allCameras", "assets/background/cameras1.jpg");
    this.load.image("ui", "assets/background/IU.png");

    this.load.image("doorButton", "assets/background/botonluz.png");
    this.load.image("lightButton", "assets/background/botonpuerta.png");

    this.load.image("leftDoorLight", "assets/background/leftdoor_light.png");
    this.load.image("rightDoorLight", "assets/background/rightdoor_light.png");

    this.load.image("shield_doorleft", "assets/background/leftdoor_shield.png");
    this.load.image(
      "shield_doorright",
      "assets/background/rightdoor_shield.png"
    );

    this.load.image("rightDoorAlien", "assets/background/rightdoor_alien1.png");
    this.load.image("leftDoorAlien", "assets/background/leftdoor_alien1.png");

    // this.load.image("openCameras", "assets/background/openCameras.jpg");
    // this.load.image("closeCameras", "assets/background/closeCameras.jpg");

    this.load.image("gameOverI", "assets/background/derrota.jpg");
    this.load.image("black", "assets/background/black.png");

    this.load.image("Flecha", "assets/background/flecha2.png");
    this.load.image("energy", "assets/background/energy.png");

    this.load.image("iEnergy", "assets/background/iEnergy.png");
    this.load.image("iFolder", "assets/background/iFolder.png");
    this.load.image("IUcam", "assets/background/UICamera.png");
    this.load.image("alien1", "assets/sprites/alien.png");

    this.load.image("alienC1", "assets/sprites/alien1cam1.png");
    this.load.image("alienC4", "assets/sprites/alien1cam4.png");
    this.load.image("alienC2", "assets/sprites/alien1cam1_.png");
    this.load.image("roomoff", "assets/background/lightlessRoom.png");

    this.load.image("Arg", "assets/background/Arg.jpg");
    this.load.image("Bra", "assets/background/Bra.jpg");
    this.load.image("Est", "assets/background/Est.jpg");

    this.load.image("Controles", "assets/background/Controles.jpg");
    this.load.image("Manga", "assets/background/comic.jpg");
    this.load.image("Cabeza", "assets/background/cabeza.jpg");

    this.load.audio("button", "assets/sounds/Button.mp3");
    this.load.audio("alien", "assets/sounds/Alien.mp3");
    this.load.audio("camaras", "assets/sounds/Camaras.mp3");
    this.load.audio("escudo", "assets/sounds/Escudo.mp3");

    this.load.spritesheet("player", "assets/sprites/spritesastronaut.png", {
      frameWidth: 140,
      frameHeight: 300,
    });
  }

  create() {
    this.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers("player", { start: 2, end: 3 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNumbers("player", { start: 0, end: 1 }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNumbers("player", { start: 4, end: 5 }),
      frameRate: 5,
      repeat: -1,
    });

    this.scene.start("menu");
  }
}
