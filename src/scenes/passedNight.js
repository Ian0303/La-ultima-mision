/* import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
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
    
      init({ language }) {
        this.language = language;
      }

 create() {

    //texto "Datos descargados"
     this.Title = this.add.text(50, 100, getPhrase(key.Menu.Title), {
        fontSize: "40px",
        frontFamily: "Console",
        color: "#00BFFF",
      });
 */

      /* setTimeout(() => {
           this.scene.start("Game")
           }, 1000);
          
           this.add
           .image(113, 450, "Arg")
           .setScale(0.5)
           .setInteractive()
           .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
             this.getTranslations(ES_AR);
           });
     
         this.add
           .image(175, 450, "Bra")
           .setScale(0.5)
           .setInteractive()
           .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
             this.getTranslations(PT_BR);
           });
     
         this.add
           .image(50, 450, "Est")
           .setScale(0.5)
           .setInteractive()
           .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
             this.getTranslations(EN_US);
           });
}
update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.Title.setText(getPhrase(key.Menu.Title));
      this.Play.setText(getPhrase(key.Menu.Play));
      this.Continue.setText(getPhrase(key.Menu.Continue));
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
 


} */
