/* //import Phaser from "phaser";
// import Player from "./Player";
//import events from "../scenes/EventCenter";

export default class Button extends Phaser.GameObjects.Sprite{
  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);
    this.x = x
    this.y = y
    this.texture = texture

    scene.add.existing(this);
    scene.physics.add.existing(this);
    this.setTexture(texture);
    this.setScale(1);
    this.setDepth(2);
    

  }
  //this.leftDoorButton = this.physics.add.staticGroup()
  


}   */