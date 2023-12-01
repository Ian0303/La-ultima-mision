import Phaser from "phaser";
import events from "./EventCenter";

export default class Cameras extends Phaser.Scene {
  constructor() {
    super("cameras");

    this.enemiesTexture = ["alien1"];
    this.lightCost = 1;

  }

  init(data) {
    this.energy = data.energy
  }

  create() {
    console.log("si");
    this.camera = this.add.image(960, 480, "allCameras");
    this.black = this.add.image(960, 480, "black").setDepth(3).setVisible(false);
    this.change = this.sound.add("change");
    this.steps = this.sound.add("steps")
  
    events.emit("actualizar energía", this.energy);
    this.energyT = this.add
      .text(450, 50, `${this.energy}%`, {
        font: "bold 30px Console",
        color: "#FFFFFF",
      })
    this.time.addEvent({
      delay: 3000,
      callback: this.updateEnergy,
      callbackScope: this,
      loop: true,
    });

    this.ui = this.add.image(960, 240, "ui").setDepth(3);
    this.ui = this.add.image(320, 240, "ui").setDepth(3);
    this.ui = this.add.image(-320, 240, "ui").setDepth(3);
    this.ui = this.add.image(2240, 240, "ui").setDepth(3);
    this.ui = this.add.image(-320, 720, "ui").setDepth(3);
    this.ui = this.add.image(2240, 720, "ui").setDepth(3);
    this.ui = this.add.image(1600, 240, "ui").setDepth(3);
    this.ui = this.add.image(320, 720, "ui").setDepth(3);
    this.ui = this.add.image(960, 720, "ui").setDepth(3);
    this.ui = this.add.image(1600, 720, "ui").setDepth(3);
    this.time.addEvent({
      delay: 4500,
      callback: this.updateEnergy,
      callbackScope: this,
      loop: true,
    });

    console.log(this.energy)
    this.addKeyEvents();
    this.back = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    events.on("aliens-moved", this.moveAlien, this);

  }

  update(){
    if (this.energy <= 0) {
      this.black.setVisible(true);
      this.energy = 0;
    }
  }

  updateEnergy() {
    if (this.scene.getIndex("game") < this.scene.getIndex("cameras")) {
      this.energy -= this.lightCost;
      this.energyT.setText(`${this.energy}%`);
      console.log(`la energia es: ${this.energy}`);
      
    }
  }
        
  // Las camaras cambian al presionar los numeros de la parte superior en el teclado, 1, 2, 3, 4, 5 Y 6
  addKeyEvents() {

    this.input.keyboard.on("keydown", (event) => {

      switch (event.keyCode) {
        case Phaser.Input.Keyboard.KeyCodes.ONE:
          this.cameras.main.centerOn(960, 240);
          this.change.play();
          this.energyT.x = 1108
          this.energyT.y = 37
          break;
        case Phaser.Input.Keyboard.KeyCodes.TWO:
          this.cameras.main.centerOn(-320, 240);
          this.change.play();
          this.energyT.x = -172
          this.energyT.y = 37
          break;
        case Phaser.Input.Keyboard.KeyCodes.THREE:
          this.cameras.main.centerOn(2240, 240);
          this.change.play();
          this.energyT.x = 2388
          this.energyT.y = 37
          break;
        case Phaser.Input.Keyboard.KeyCodes.FOUR:
          this.cameras.main.centerOn(-320, 720);
          this.change.play();
          this.energyT.x = -172
          this.energyT.y = 517
          break;
        case Phaser.Input.Keyboard.KeyCodes.FIVE:
          this.cameras.main.centerOn(2240, 720);
          this.change.play();
          this.energyT.x = 2388
          this.energyT.y = 517
          break;
        case Phaser.Input.Keyboard.KeyCodes.SIX:
          this.cameras.main.centerOn(960, 720);
          this.change.play();
          this.energyT.x = 1108
          this.energyT.y = 517
          break;
        case Phaser.Input.Keyboard.KeyCodes.SEVEN:
          this.cameras.main.centerOn(320, 240);
          this.change.play();
          this.energyT.x = 468
          this.energyT.y = 37
          break;
        case Phaser.Input.Keyboard.KeyCodes.EIGHT:
          this.cameras.main.centerOn(1600, 240);
          this.change.play();
          this.energyT.x = 1748
          this.energyT.y = 37
          break;
        case Phaser.Input.Keyboard.KeyCodes.NINE:
          this.cameras.main.centerOn(320, 720);
          this.change.play();
          this.energyT.x = 468
          this.energyT.y = 517
          break;
        case Phaser.Input.Keyboard.KeyCodes.ZERO:
          this.cameras.main.centerOn(1600, 720);
          this.change.play();
          this.energyT.x = 1748
          this.energyT.y = 517
          break;
        case Phaser.Input.Keyboard.KeyCodes.DOWN:
          this.scene.bringToTop("game");
          break;
        case Phaser.Input.Keyboard.KeyCodes.LEFT || Phaser.Input.Keyboard.KeyCodes.RIGHT:
            this.steps.play();
          break;
        default:
          this.cameras.main.centerOn(960, 240);
          // console.log("otra key", event.keyCode);
          this.energyT.x = 1108
          this.energyT.y = 37
          break;
      }
    });
  }

  moveAlien(enemies) {
    enemies.forEach((e) => {
      e.sprite?.removeFromDisplayList();
      e.sprite?.destroy(true);
      e.addToScene(this);
    });
  }
}
