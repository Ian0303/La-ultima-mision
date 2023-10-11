import Phaser from "phaser";

export default class Alien1 extends Phaser.GameObjects.Sprite {
  room;

  active;

  constructor(scene, x, y, texture, active) {
    super(scene, x, y, texture, active);
    this.init();
    this.scene = scene;
    
    // this.newRoom = 6;
    
  }

  init() {
    console.log("AAAAA");
    this.bonnie = this.setTexture("bonnie").setPosition(320, 450);
    // this.bonnie.visible = false;
  }

  // create() {
    // const rooms = ["room1","room2","room3","room4","room5","room6"];
    
    // this.Alien1 = new Alien1(this);
    
  // }

  // imagenes
  // funcion de añadir arrays
  // funcion de eliminar sprite del arrays
  // funcion para corroborar ubicacion
  // visivle e invisibles

 /*   moverAlien(newRoom, rooms) {
    if (this.active === true) {
        const randomIndex = Math.floor(Math.random() * rooms.length);
        const newRoom = rooms[randomIndex];
        this.room = this.newRoom;         
        }

    } */
} 

