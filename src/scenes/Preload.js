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

    this.load.image("room", "assets/background/bhabitacion.jpg");
    // .load.image("camera1", "assets/background/Camera1.jpg");
    // this.load.image("camera2", "assets/background/camara2.jpg");
    // this.load.image("camera3", "assets/background/camara3.jpg");
    this.load.image("allCameras", "assets/background/allCameras.png");
 
    this.load.image("doorButton", "assets/background/doorButton.png");
    this.load.image("lightButton", "assets/background/lightButton.png");
    this.load.image("leftDoorLight", "assets/background/leftDoorLight.png");
    this.load.image("rightDoorLight", "assets/background/rightDoorLight.png");
    this.load.image("shield_doorleft", "assets/background/shield_doorleft.png");
    this.load.image("shield_doorright", "assets/background/shield_doorright.png");

    this.load.image("rightDoorAlien", "assets/background/rightDoorAlien.jpg");
    this.load.image("leftDoorAlien", "assets/background/leftDoorAlien.jpg");
    this.load.image("shieldDoorLeft", "assets/background/shieldDoorLeft.png");
    this.load.image("shieldDoorRight", "assets/background/shieldDoorRight.png");

    // this.load.image("openCameras", "assets/background/openCameras.jpg");
    // this.load.image("closeCameras", "assets/background/closeCameras.jpg");

    this.load.image("gameOverI", "assets/background/gameover.png");
    this.load.image("black", "assets/background/black.png");


    this.load.image("Flecha", "assets/background/flecha.png");
    
    this.load.image("iEnergy", "assets/background/iEnergy.png");
    this.load.image("iFolder", "assets/background/iFolder.png");
    this.load.image("IUcam", "assets/background/UICamera.png");
    this.load.image("alien1", "assets/sprites/alien1.png");
    this.load.image("alien2", "assets/background/alien1_2.png");
    this.load.image("alien3", "assets/background/alien1_3.png");

    this.load.image("Arg", "assets/background/Arg.jpg");
    this.load.image("Bra", "assets/background/Bra.jpg");
    this.load.image("Est", "assets/background/Est.jpg");

    this.load.image("Controles", "assets/background/Controles.jpg");

  
    
    this.load.spritesheet("player", "assets/sprites/spritesastronaut.png", {
      frameWidth: 140,
      frameHeight: 300,
    });


  }

  create() {
    this.anims.create({
      key: "turn",
      frames: this.anims.generateFrameNumbers("player", { start: 3, end: 2 }),
      frameRate: 1,
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
