import Phaser from "phaser";

export default class Alien1 extends Phaser.GameObjects.Sprite {
  room;

  active;

  constructor(scene, x, y, texture, active) {
    super(scene, x, y, texture, active);
    this.newRoom = undefined;
    this.init();
    this.scene = scene;
  }
  init() {
    console.log("AAAAA");
    this.bonnie = this.setTexture("bonnie").setPosition(320, 450);
    //this.bonnie.visible = false;
  }
  //imagenes
  //funcion de añadir arrays
  //funcion de eliminar sprite del arrays
  //funcion para corroborar ubicacion
  //visivle e invisibles

  /* moverAlien(room) {
    if (this.active === true) {
        this.newRooom = Phaser.Math.Between(1, 5)
        this.room = this.newRoom 
        if (this.room === 1) {
            
        }

    }
} */
}
