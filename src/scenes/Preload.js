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
    this.load.image("allCameras", "assets/background/cameras.png");
    this.load.image("ui", "assets/background/UI.png");

    this.load.image("doorButton", "assets/background/botonluz.png");
    this.load.image("lightButton", "assets/background/botonpuerta.png");

    this.load.image("leftDoorLight", "assets/background/leftdoor_light.png");
    this.load.image("rightDoorLight", "assets/background/rightdoor_light.png");

    this.load.image("shield_doorleft", "assets/background/leftdoor_shield.png");
    this.load.image(
      "shield_doorright",
      "assets/background/rightdoor_shield.png"
    );

    this.load.image("rightDoorAlien", "assets/background/rightdoor_alien.png");
    this.load.image("leftDoorAlien", "assets/background/leftdoor_alien.png");

    this.load.image("gameOverI", "assets/background/derrota.jpg");
    this.load.image("black", "assets/background/blackcameras.jpg");

    this.load.image("Flecha", "assets/background/flecha2.png");
    this.load.image("energy", "assets/background/energy.png");

    this.load.image("iEnergy", "assets/background/iEnergy.png");
    this.load.image("IUcam", "assets/background/UICamera.png");
    this.load.image("alien1", "assets/sprites/alien.png");

    this.load.image("alien2", "assets/sprites/alien1-1.png");

    this.load.image("alienC1", "assets/sprites/alien1cam1.png");
    this.load.image("alienC2", "assets/sprites/alien1cam2.png");
    this.load.image("alienC4", "assets/sprites/alien1cam4.png");
    this.load.image("alienC7", "assets/sprites/alien1Cam7.png");
    this.load.image("alienC9", "assets/sprites/alien1Cam9.png");

    this.load.image("roomoff", "assets/background/lightlessRoom.png");

    this.load.image("Arg", "assets/background/Arg.jpg");
    this.load.image("Bra", "assets/background/Bra.jpg");
    this.load.image("Est", "assets/background/Est.jpg");

    this.load.image("Controls", "assets/background/controls.jpg");
    this.load.image("Manga", "assets/background/manga1.png");
    this.load.image("Manga1", "assets/background/manga2.png");
    this.load.image("Cabeza", "assets/background/cabeza.png");

    this.load.audio("button", "assets/sounds/Button.mp3");
    this.load.audio("alien", "assets/sounds/Alien.mp3");
    this.load.audio("shield", "assets/sounds/Shield.mp3");
    this.load.audio("change", "assets/sounds/Change.mp3");
    this.load.audio("steps", "assets/sounds/Steps.mp3");
    this.load.audio("background", "assets/sounds/background.mp3");
    this.load.audio("BackgroundSound", "assets/sounds/BackgroundSound.mp3");
    this.load.audio("Win", "assets/sounds/Win.mp3");

    this.load.video("scare", "assets/background/jumpscareAlien1.mp4");
    this.load.video("Manga2", "assets/background/mangafinal.mp4");
    this.load.image("unraf", "assets/background/UNRAF.png");
    this.load.video("Unraf", "assets/background/UNraf.mp4");

    this.load.image("alien2C1", "assets/sprites/alien2Cam1.png");
    this.load.image("alien2C3", "assets/sprites/alien2Cam3.png");
    this.load.image("alien2C5", "assets/sprites/alien2Cam5.png");
    this.load.image("alien2C8", "assets/sprites/alien2Cam8.png");
    this.load.image("alien2C10", "assets/sprites/alien2Cam10.png");

    this.load.image("alien3C1", "assets/sprites/alien3cam1.png");
    this.load.image("alien3C4", "assets/sprites/alien3cam4.png");
    this.load.image("alien3C5", "assets/sprites/alien3cam5.png");
    this.load.image("alien3C6", "assets/sprites/alien3cam6.png");
    this.load.image("alien3C9", "assets/sprites/alien3Cam9.png");
    this.load.image("alien3C10", "assets/sprites/alien3Cam10.png");

    this.load.image("alien4C1", "assets/sprites/alien4Cam1.png");
    this.load.image("alien4C2", "assets/sprites/alien4Cam2.png");
    this.load.image("alien4C4", "assets/sprites/alien4Cam4.png");

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
    
    this.logo = this.add.image(310, 240, "unraf").setScale(1)
    setTimeout(() => {
      this.scene.start("menu");
    }, 3000);
    

  }
}

