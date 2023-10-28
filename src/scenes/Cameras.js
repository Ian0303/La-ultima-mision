import Phaser from "phaser";
// import Alien1 from "../components/Alien1";
import events from "./EventCenter";

export default class Cameras extends Phaser.Scene {
  constructor() {
    super("cameras");

    this.enemiesTexture = ["alien1"];

    // 3 arrays, maps lee la primera el primero si no lo encuentra lee el segundo, sino el tercero.
    // funcion
    // camara 1 todos los personajes
    // cunado sepa en que array este muestre el sprite
    // animación

    /* cuando se abra la escena cameras el jugador usará los numeros para la seleccion de
    las distintas camaras
    cameras = array de arrays [[,,,,,], [,,,,,], [,,,,,]]
    el cambio de camras  se podria hacer con una maquina de estados
    usa swich para los diferente casos.

    romm
      1 = pasillo izquierdo
      2 = pasillo derecho
      3 = un lugar
      4 = otro lugar
      5 = otro lugar diferente

    */
  }

  create() {
    // this.cameras.main.setBounds(0, 0, 1920, 960);

    this.camera = this.add.image(960, 480, "allCameras");

    // this.cameras.main.setZoom(4);
    // this.cameras.main.centerOn(0, 0);

    this.addKeyEvents();

    console.log("si");

    
    this.back = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    /*
    Las camaras cambian al presionar los numeros de la parte superior en el teclado, 1,2,3, 4, 5 Y 6
    */

    events.on("aliens-moved", this.moveAlien, this);
  }

  addKeyEvents() {
    this.input.keyboard.on("keydown", (event) => {
      switch (event.keyCode) {
        case Phaser.Input.Keyboard.KeyCodes.ONE:
          console.log("room 1");
          this.cameras.main.centerOn(320, 240);
          break;
        case Phaser.Input.Keyboard.KeyCodes.TWO:
          console.log("room 2");
          this.cameras.main.centerOn(960, 240);
          break;
        case Phaser.Input.Keyboard.KeyCodes.THREE:
          console.log("room 3");
          this.cameras.main.centerOn(1600, 240);
          break;
        case Phaser.Input.Keyboard.KeyCodes.FOUR:
          console.log("room 4");
          this.cameras.main.centerOn(320, 720);
          break;
        case Phaser.Input.Keyboard.KeyCodes.FIVE:
          console.log("room 5");
          this.cameras.main.centerOn(1600, 720);
          break;
        case Phaser.Input.Keyboard.KeyCodes.SIX:
          console.log("room 6");
          this.cameras.main.centerOn(960, 720);
          break;

          case Phaser.Input.Keyboard.KeyCodes.UP:
            this.scene.bringToTop("game")
          break;
          case Phaser.Input.Keyboard.KeyCodes.DOWN:
            this.scene.bringToTop("cameras")
          break;

        default:
          this.cameras.main.centerOn(320, 240);
          // console.log("otra key", event.keyCode);
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
    // borrar sprites enemigos
    const allSprites = this.children.list.filter((x) => {
      if (this.enemiesTexture.includes(x.texture.key)) {
        console.log("es sprite", x.texture.key);
        return true;
      }
      return false;
    });
    console.log("para borrar", allSprites);
    allSprites.forEach((x) => x.destroy(true));

    // mostrar los enemigos
    enemies.forEach((e) => {
      console.log(e);
      e.addToScene(this);
    });
  }

  // nueva variable que le saque el numero a "camera1" y asi cambie de camara
  // no estoy segura de como funcion al presionar teclas, en peor de los casos, la "vieja confiable" ifs anidados.

  update() {
    
    if (this.back.isDown) {
      this.scene.bringToTop("game");
    } 
  }
}
