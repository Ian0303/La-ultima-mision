 import Phaser from "phaser";

const movementAlien2 = [
  null, // sala inicial 0
  [2],
  [1,7],
  [],
  [9],
  [],
  [],
  [2,9],
  [],
  [4,9],
  [], // sala personaje 10



  /* null, // sala inicial 0
  [2, 3],
  [1, 3, 4],
  [1, 3, 5],
  [1, 2, 4, 5],
  [1, 3, 6],
  [2, 3, 6], // sala personaje 6 

  */
];

export default class Alien2 {
  constructor(x = 960, y = 240) {
    this.x = x;
    this.y = y;
    this.room = 0;
    this.active = false;
    this.texture = "alien2";
    this.scale = 2;
  }

  // añade al Alien en la escena
  addToScene(scene) {
    switch (this.room) {
      case 1:
        this.x = 960;
        this.y = 240;
        this.texture = "alienC1";
        break;
      case 2:
        this.x = -320;
        this.y = 240;
        this.texture = "alienC2";
        break;
      case 3:
        this.x = 2240;
        this.y = 240;
        this.texture = "alien2C3";
        break;
      case 4:
        this.x = -320;
        this.y = 720;
        this.texture = "alienC4";
        break;
      case 5:
        this.x = 2240;
        this.y = 720;
        this.texture = "alien2C5";
        break;
      case 6:
        this.x = 960;
        this.y = 720;
        this.texture = "alien1";
        break;
      case 7:
        this.x = 320;
        this.y = 240;
        this.texture = "alien1";
        break;
      case 8:
        this.x = 1600;
        this.y = 240;
        this.texture = "alien1";
        break;
      case 9:
        this.x = 320;
        this.y = 720;
        this.texture = "alien1";
        break;
      case 10:
        this.x = 1600;
        this.y = 720;
        this.texture = "alien1";
        break;
      default:
        // this.x = -100
        // this.y = -100
        break;
    }

    this.sprite = scene.add
      .image(this.x, this.y, this.texture)
      .setName(this.texture)
      .setVisible(true);
  }

  // mueve al alien según un numero aleatorio dentro de las posibilidades de movimiento (momentaneamente desaprobechado)
  move() {
    const from = this.room;
    const posibleRooms = movementAlien2[this.room];
    this.room = posibleRooms ? Phaser.Utils.Array.GetRandom(posibleRooms) : 1;
    console.log("move to ", this.room, " from ", from);
  }
} 
// if(tiempo de moverse moverse)
//* se mueve* */



/*  import Phaser from "phaser";

export default class Alien1 extends Phaser.GameObjects.Sprite {
  room;

  active;

  constructor(scene, x, y, texture, active) {
    super(scene, x, y, texture, active);
    this.init();
    this.scene = scene;
    
     this.newRoom = 6;
    
  }

  init() {
    console.log("AAAAA");
    this.bonnie = this.setTexture("bonnie").setPosition(320, 450);
    // this.bonnie.visible = false;
  }

   create() {
     const rooms = ["room1","room2","room3","room4","room5","room6"];
    
     this.Alien1 = new Alien1(this);
    
   }

  // imagenes
  // funcion de añadir arrays
  // funcion de eliminar sprite del arrays
  // funcion para corroborar ubicacion
  // visivle e invisibles

    moverAlien(newRoom, rooms) {
    if (this.active === true) {
        const randomIndex = Math.floor(Math.random() * rooms.length);
        const newRoom = rooms[randomIndex];
        this.room = this.newRoom;         
        }

    } 
} 
 */