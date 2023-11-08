import Phaser from "phaser";


export default class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver")
    }

    init(data) {
        // this.cursors = this.input.keyboard.createCursorKeys();
        this.night = data.night || 1;
        this.dead = data.dead || false;
    }

    create() {

        console.log("escena gameover")
        this.add.image(400, 250, "gameOverI")
        setTimeout(() => {
            this.scene.start("menu")
        }, 10000);
        this.add.text(300, 300, "Derrota", {
            fontSize: "40px",
            frontFamily: "Console",
            color: "#00BFFF",
        });

    }
}