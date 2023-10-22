import Phaser from "phaser";
// import Player from "./Player";
import events from "../scenes/EventCenter";

export default class DoorsAndLights extends Phaser.Scene {
    constructor() {
      super("doorsAndLights");
    }

create(){
  this.leftLigth = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.Q
  );
  this.rightLigth = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.E
  );
  this.leftShield = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.A
  );
  this.rightShield = this.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.D
  );

  this.leftLightOn = this.add.image(-260, 200, "leftDoorLight")
  this.rightLightOn = this.add.image(900, 200, "rightDoorLight")
  events.on("shields-ligths", this.update, this);
}

update() {

  
  if (this.leftLigth.isDown ) {
    this.leftLightOn.setVisible(true)
    setTimeout(() => {
    this.leftLightOn.setVisible(false) 
    }, 3000);
  }else if (this.rightLigth.isDown) {
    this.rightLightOn.setVisible(true)
    setTimeout(() => {
    this.rightLightOn.setVisible(false) 
    }, 3000);

  }

  if (this.leftShield.isDown ) {
    this.add.image(-260, 200, "leftShield")
  }else if (this.rightShield.isDown) {
    this.add.image(900, 200, "rightShield")

  }
}
}