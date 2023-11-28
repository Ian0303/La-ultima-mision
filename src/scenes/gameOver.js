import Phaser from "phaser";
// import Alien1 from "../components/Alien1";

import enemies from "./Game.js";
import Alien1 from "../components/Alien1.js";
import Alien2 from "../components/Alien2.js";
import Alien3 from "../components/Alien3.js";
import Alien4 from "../components/Alien4.js";


export default class GameOver extends Phaser.Scene {
    constructor() {
        super("gameOver")
    }

    init(data) {
        // this.cursors = this.input.keyboard.createCursorKeys();
        this.night = data.night || 1;
        this.dead = data.dead || false;
        this.enemies = data.enemies;
    }

    create() {
       /*  console.log(this.enemies);
        this.enemies.forEach((e) => {

            switch (e) {
                case Alien1.room === 4 || Alien1.room === 5:
                    this.scare = this.add.video(400, 250, "scare").setDepth(2);
                    this.scare.play();
                    this.alien = this.sound.add("alien");
                    console.log("me mato alien 1")
                    break;
                case Alien2:
                    this.scare2 = this.add.video(400, 250, "scare2").setDepth(2);
                    this.scare2.play();
                    this.alien = this.sound.add("alien");
                    console.log("me mato alien 2")

                    break;
                case Alien3:
                    this.scare3 = this.add.video(400, 250, "scare").setDepth(2);
                    this.scare3.play();
                    this.alien = this.sound.add("alien");
                    console.log("me mato alien 3")

                    break;
                case Alien4:
                    this.scare4 = this.add.video(400, 250, "scare4").setDepth(2);
                    this.scare4.play();
                    this.alien = this.sound.add("alien");
                    console.log("me mato alien 4")

                    break;

                default:
                    break;
            }
        }); */
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