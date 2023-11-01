import Phaser from "phaser";


export default class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver")
    }
 
    init(data) {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.night = data.night || 1;
        this.dead = data.dead || false;
      }

create() {
    this.add.image( 640, 480,"gameOver")

}




}