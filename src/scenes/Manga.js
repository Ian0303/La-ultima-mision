export default class Manga extends Phaser.Scene {
    
    constructor() {
      super("manga");
    }
    create() {
        this.add.image(320, 220, "Manga")
        this.add.image(320, 220, "Cabeza")

        this.scene.start("game");
    }
}