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
    this.Title17 = this.add.text(200, 220, getPhrase(key.Menu.Title17), {
      fontSize: "40px",
      frontFamily: "Console",
      color: "#00BFFF",
  });
    this.add.text(310, 220, ` ${  this.night}`, {
      fontSize: "40px",
      frontFamily: "Console",
      color: "#00BFFF",
    });
    setTimeout(() => {
      this.scene.start("game");
    }, 5000);
}

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.Title17.setText(getPhrase(key.Menu.Title17));
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
