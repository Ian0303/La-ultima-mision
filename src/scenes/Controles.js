import Phaser from "phaser";

export default class Controles extends Phaser.Scene {
    constructor() {
      super("controles");
    }

    create(){
        this.add.image(320, 240, "Controles" )
        this.add.image(600, 50, "Flecha").setScale(0.5).setInteractive() .on("pointerdown", () => this.scene.start("game"), this.scene.bringToTop("game"), this.scene.launch("cameras"));
    }

}