import Phaser from "phaser";
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

    create(){
        this.add.image(320, 240, "Controles" )
        this.add.image(600, 50, "Flecha").setScale(0.5).setInteractive() .on("pointerdown", () => this.scene.start("game"), this.scene.bringToTop("game"), this.scene.launch("cameras"));
        
        this.Title3 = this.add.text(190, 360, getPhrase(key.Menu.Title3), {
          fontSize: "25px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
        this.Title4 = this.add.text(335, 210, getPhrase(key.Menu.Title4), {
          fontSize: "20px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
        this.Title5 = this.add.text(320, 85, getPhrase(key.Menu.Title5), {
          fontSize: "20px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
        this.Title6 = this.add.text(50, 210, getPhrase(key.Menu.Title6), {
          fontSize: "25px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
        this.Title7 = this.add.text(50, 80, getPhrase(key.Menu.Title7), {
          fontSize: "25px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
        this.Title8 = this.add.text(50, 10, getPhrase(key.Menu.Title8), {
          fontSize: "30px",
          frontFamily: "Console",
          color: "#00FFFF",
        });
    }

}