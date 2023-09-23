import Phaser from "phaser";


export default class Cameras extends Phaser.Scene {
    constructor() {
      super("cameras");
      this.camerasV = [];
      
      

      /* cuando se abra la escena cameras el jugador usará los numeros para la seleccion de
      las distintas camaras
      cameras = array de arrays [[,,,,,], [,,,,,], [,,,,,]]
      el cambio de camras  se podria hacer con una maquina de estados
      usa swich para los diferente casos.
      */
      // this.cursors = scene.input.keyboard.createCursorKeys();
    }

     create() {
      this.add.image(320, 240, "camera1")
      this.add.image(320, 240, "IUcam")
      this.add.image(320, 450, "closeCameras")
      .setScale(0.7)
      .setInteractive().on("pointerdown", () => this.scene.switch("game"));
      console.log("si")

      this.cursors = this.input.keyboard.createCursorKeys();

     

    } 



      update() {
      if (this.input.keyboard.keys[49] ) {
        this.add.image(320, 240, "camera2")
      }
       /* 
      Las camaras deben cambiar al presionar los numeros de la parte superior en el teclado, 1,2,3,4 y 5 
      */
    }  
}