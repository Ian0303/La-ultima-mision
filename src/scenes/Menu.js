import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import key from "../enums/key";

export default class Menu extends Phaser.Scene {
  #textSpanish;

  #textGerman;

  #textEnglish;

  #textPortuguese;

  #wasChangedLanguage = TODO;

  constructor() {
    super("menu");
  }

  init({ language }) {
    this.language = language;
  }

  create() {
    const backgrounds = ["bMenu1", "bMenu2", "bMenu3", "bMenu4"];
    let currentIndex = 0;

    const background1 = this.add.image(300, 240, backgrounds[currentIndex]);

    // Define una función para cambiar el fondo en orden
    const changeBackground = () => {
      currentIndex = (currentIndex + 1) % backgrounds.length;

      background1.setTexture(backgrounds[currentIndex]);

      // Llama a la función de nuevo después de un período de tiempo (por ejemplo, 5 segundos)
    };

    // Inicia el cambio de fondo
    this.setChangeBackground = setInterval(changeBackground, 250); // Cambia cada 5 segundos (5000 milisegundos)

    this.button = this.sound.add("button");
    this.Title = this.add.text(50, 100, getPhrase(key.Menu.Title), {
      font: "bold 20px Console",
      color: "#FFFFFF",
    });
    this.Play = this.add
      .text(50, 300, getPhrase(key.Menu.Play), {
        font: "bold 20px Console",
        color: "#FFFFFF",
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.button.play();
        clearInterval(this.setChangeBackground);
        this.scene.start("controles");
      });
    this.Continue = this.add.text(50, 350, getPhrase(key.Menu.Continue), {
      font: "bold 20px Console",
      color: "#FFFFFF",
    });
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

    /* this.timer = 10
          this.time.addEvent({
            delay: 5,
            callback: this.oneSecond,
            callbackScope: this,
            loop: true,
          });  */

    /* setTimeout(() => {//coltdown
           this.load = true;
           }, 100);
          */

    /* crear una variable con imagen de fondo y usando la funcion setTimeout 
           le asigne otra imagen, debe estar en el update
           */

    // Configura el fondo inicial
    this.scene.bringToTop(this);
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
}
