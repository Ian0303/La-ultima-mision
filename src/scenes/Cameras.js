import Phaser from "phaser";
import Alien1 from "../components/Alien1";

export default class Cameras extends Phaser.Scene {
  constructor() {
    super("cameras");
    this.camerasV = [];
    this.cameraV1 = [""];
    this.cameraV2 = [""];
    this.cameraV3 = [""];

    //3 arrays, maps lee la primera el primero si no lo encuentra lee el segundo, sino el tercero.
    //funcion
    //camara 1 todos los personajes
    //cunado sepa en que array este muestre el sprite
    //animación
    //

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
    // this.cursors = scene.input.keyboard.createCursorKeys();
  }

  create() {
    this.camera = this.add.image(320, 240, "camera1");
    this.add
      .image(320, 450, "closeCameras")
      .setScale(0.7)
      .setInteractive()
      .on("pointerdown", () => this.scene.switch("game"));
    console.log("si");

    this.camera1 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.ONE
    );
    this.camera2 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.TWO
    );
    this.camera3 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.THREE
    );
    this.back = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

    /* 
         Las camaras cambian al presionar los numeros de la parte superior en el teclado, 1,2,3, 4 y 5 
         */

    this.Alien1 = new Alien1(this);
  }

  update() {
    if (this.camera1.isDown) {
      this.camera = this.add.image(320, 240, "camera1");
    } else if (this.camera2.isDown) {
      this.camera = this.add.image(320, 240, "camera2");
    } else if (this.camera3.isDown) {
      this.camera = this.add.image(320, 240, "camera3");
    } else if (this.back.isDown) {
      this.scene.launch("game");
    }
  }
}
