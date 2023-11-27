import Phaser from "phaser";
// import Alien1 from "../components/Alien1";
import events from "./EventCenter";
// import movement from "../components/movement";
// import Alien1 from "../components/Alien1";

export default class Cameras extends Phaser.Scene {
  constructor() {
    super("cameras");

    this.enemiesTexture = ["alien1"];
    this.lightCost = 1;


    // 3 arrays, maps lee la primera el primero si no lo encuentra lee el segundo, sino el tercero.
    // funcion
    // camara 1 todos los personajes
    // cunado sepa en que array este muestre el sprite
    // animación

    /* cuando se abra la escena cameras el jugador usará los numeros para la seleccion de
    las distintas camaras
    el cambio de camras  se podria hacer un swich para los diferente casos.

    rooms
      1 = puerta de entrada
      2 = un lugar
      3 = otro lugar
      4 = pasillo izquierdo
      5 = pasillo derecho
      6 = laboratorios centrales

    */
  }

  init(data) {
    this.energy = data.energy
  }

  create() {
    console.log("si");
    // this.cameras.main.setBounds(0, 0, 1920, 960);
    this.camera = this.add.image(960, 480, "allCameras");
    this.change = this.sound.add("change");
    this.steps = this.sound.add("steps")
    this.add.image(470, 25, "energy").setDepth(1);
    this.camerass = this.sound.add("camaras");
    
    events.emit("actualizar energía", this.energy);
    // events.on("actualizar energía", this.updateEnergy, this);


    this.add.image(470, 25, "energy").setDepth(1);
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

    this.ui = this.add.image(960, 240, "ui").setDepth(2);
    this.ui = this.add.image(320, 240, "ui").setDepth(2);
    this.ui = this.add.image(-320, 240, "ui").setDepth(2);
    this.ui = this.add.image(2240, 240, "ui").setDepth(2);
    this.ui = this.add.image(-320, 720, "ui").setDepth(2);
    this.ui = this.add.image(2240, 720, "ui").setDepth(2);

    
    this.ui = this.add.image(1600, 240, "ui").setDepth(2);
    this.ui = this.add.image(320, 720, "ui").setDepth(2);
    this.ui = this.add.image(960, 720, "ui").setDepth(2);
    this.ui = this.add.image(1600, 720, "ui").setDepth(2);
    this.time.addEvent({
      delay: 3000,
      callback: this.updateEnergy,
      callbackScope: this,
      loop: true,
    });

    
    // this.cameras.main.setZoom(4);
    // this.cameras.main.centerOn(0, 0);
    console.log(this.energy)
    this.addKeyEvents();
    this.back = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    events.on("aliens-moved", this.moveAlien, this);
    // events.on("actualizar energía", this.updateEnergy, this);

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
        case Phaser.Input.Keyboard.KeyCodes.LEFT:
          this.steps.play();
          break;
        case Phaser.Input.Keyboard.KeyCodes.RIGHT:
          this.steps.play();
          break;
        default:
          this.cameras.main.centerOn(960, 240);
          // console.log("otra key", event.keyCode);
          this.energyT.x = 1108
          this.energyT.y = 37
          break;
      }
      // console.log([
      //   "to move",
      //   "x: " + this.cameras.main.scrollX,
      //   "y: " + this.cameras.main.scrollY,
      // ]);
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
