import Phaser from "phaser";
// import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import key from "../enums/key";

export default class PassedNight extends Phaser.Scene {
  #textSpanish;

  #textGerman;

  #textEnglish;

  #textPortuguese;

  #wasChangedLanguage = TODO;

  constructor() {
    super("passedNight");
  }

  init({ language, night }) {
    this.language = language;
    this.night = night || 1;
  }

  create() {
    // texto "Datos descargados"
    this.add.text(200, 220, `Noche ${  this.night}`, {
      fontSize: "40px",
      frontFamily: "Console",
      color: "#00BFFF",
    });
    setTimeout(() => {
      // this.scene.wake("cameras");
      this.scene.start("game");
      
    }, 5000);

   
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.Title.setText(getPhrase(key.Menu.Title));
    }
  }

  updateWasChangedLanguage = () => {
    this.#wasChangedLanguage = FETCHED;
  };

  async getTranslations(language) {
    this.language = language;
    this.#wasChangedLanguage = FETCHING;

    await getTranslations(language, this.updateWasChangedLanguage);
  }



} 
