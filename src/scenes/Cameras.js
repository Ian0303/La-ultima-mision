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
    this.camera = this.add.image(320, 240, "allCameras");
    this.miCamara = this.cameras.add(960, 720, 640, 480);
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
    this.camera4 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.FOUR
    );
    this.camera5 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.FIVE
    );
    this.camera6 = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.SIX
    );
    this.back = this.input.keyboard.addKey(
      Phaser.Input.Keyboard.KeyCodes.DOWN);

    // this.aCameras = [this.camera1, this.camera2, this.camera3, this.camera4, this.camera5, this.camera6]
    /* 
    Las camaras cambian al presionar los numeros de la parte superior en el teclado, 1,2,3, 4 y 5 
    */

    events.on("aliens-moved", this.moveAlien, this);
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

/*   update() {

    switch (true) {
      case this.camera1.isDown:
        this.miCamara.setScroll(960, 720);
        console.log("camara1");
        break;
      case this.camera2.isDown:
        this.miCamara.setScroll(320, 720);
        console.log("camara2");
        break;
      case this.camera3.isDown:
        this.miCamara.setScroll(1600, 720);
        console.log("camara3");
        break;
      case this.camera4.isDown:
        this.miCamara.setScroll(320, 240);
        console.log("camara4");
        break;
      case this.camera5.isDown:
        this.miCamara.setScroll(960, 240);
        console.log("camara5");
        break;
      case this.camera6.isDown:
        this.miCamara.setScroll(1600, 240);
        console.log("camara6");
        break;


       default:
         this.miCamara.setScroll(960, 720);
        console.log("camara1"); 
        break; 
    } 

    /* if (this.camera1.isDown) {
      this.camera = this.add.image(320, 240, "camera1");
    } else if (this.camera2.isDown) {
      this.camera = this.add.image(320, 240, "camera2");
    } else if (this.camera3.isDown) {
      this.camera = this.add.image(320, 240, "camera3");
    } else if (this.back.isDown) {
      this.scene.bringToTop("game");
    } 
  } */
}
