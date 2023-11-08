/* import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import key from "../enums/key"; 

export default class Controles extends Phaser.Scene {
  #textSpanish;

  #textGerman;

  #textEnglish;

  #textPortuguese;

  #wasChangedLanguage = TODO;

  constructor() {
    super("controles");
  }

  init({ language }) {
    this.language = language;
  }

  create() {
    this.button = this.sound.add("button")
    this.add.image(320, 240, "Controles")
    this.add.image(600, 440, "Flecha").setScale(0.5).setInteractive().on("pointerdown", () => {
      this.scene.start("game");
        this.scene.bringToTop("game");
        this.button.play();
    });

    this.Title3 = this.add.text(190, 380, getPhrase(key.Menu.Title3), {
      fontSize: "30px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title4 = this.add.text(390, 220, getPhrase(key.Menu.Title4), {
      fontSize: "30px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title5 = this.add.text(415, 80, getPhrase(key.Menu.Title5), {
      fontSize: "30px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title7 = this.add.text(100, 220, getPhrase(key.Menu.Title7), {
      fontSize: "30px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title6 = this.add.text(120, 80, getPhrase(key.Menu.Title6), {
      fontSize: "30px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title8 = this.add.text(220, 30, getPhrase(key.Menu.Title8), {
      fontSize: "35px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title9 = this.add.text(60, 180, getPhrase(key.Menu.Title9), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title10 = this.add.text(200, 180, getPhrase(key.Menu.Title10), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title9 = this.add.text(60, 320, getPhrase(key.Menu.Title9), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title10 = this.add.text(200, 320, getPhrase(key.Menu.Title10), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title11 = this.add.text(370, 180, getPhrase(key.Menu.Title11), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title12 = this.add.text(490, 180, getPhrase(key.Menu.Title12), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title9 = this.add.text(390, 320, getPhrase(key.Menu.Title9), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });
    this.Title10 = this.add.text(510, 320, getPhrase(key.Menu.Title10), {
      fontSize: "25px",
      frontFamily: "Console",
      color: "#00FFFF",
    });

  }

} */ 