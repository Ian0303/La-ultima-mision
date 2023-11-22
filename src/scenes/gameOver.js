import Phaser from "phaser";
// import Alien1 from "../components/Alien1";


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

        // this.enemies
        this.scare = this.add.video(400, 250, "scare")
        this.alien = this.sound.add("alien");

        console.log("escena gameover")
        this.scare.play();
        this.alien.play();
        setTimeout(() => {
            this.add.image(400, 250, "gameOverI").setDepth(1)
        }, 3000);
        setTimeout(() => {
            this.scene.start("menu")
        }, 5000);
       /*  this.add.text(300, 300, "Derrota", {
            fontSize: "40px",
            frontFamily: "Console",
            color: "#00BFFF",
        }); */

    }
}