import Phaser from "phaser";



export default class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver")
    }

    init(data) {
        this.night = data.night || 1;
        this.dead = data.dead || false;
        this.enemies = data.enemies;
    }

    create() {
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
    }
}