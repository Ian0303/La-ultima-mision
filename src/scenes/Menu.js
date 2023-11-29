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
      };
        // Llama a la función de nuevo después de un período de tiempo (por ejemplo, 5 segundos)
        this.setChangeBackground = setInterval(changeBackground, 250); // Cambia cada 5 segundos (5000 milisegundos)

        //this.user = this.firebase.getUser();

    // Inicia el cambio de fondo
   

    this.button = this.sound.add("button");
    this.Title = this.add.text(50, 100, getPhrase(key.Menu.Title), {
      fontSize: "20px",
      frontFamily: "Console",
      color: "#FFFFFF",
    });
    this.Play = this.add
      .text(50, 270, getPhrase(key.Menu.Play), {
        fontSize: "20px",
        frontFamily: "Console",
        color: "#FFFFFF",
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.button.play();
        clearInterval(this.setChangeBackground);
        this.scene.start("login");
      });
    this.Title16 = this.add
      .text(50, 370, getPhrase(key.Menu.Title16), {
        fontSize: "20px",
        frontFamily: "Console",
        color: "#FFFFFF",
      })
      .setInteractive()
      .on("pointerdown", () => {
        this.button.play();
        clearInterval(this.setChangeBackground);
        this.scene.start("credits");
      });
    this.Continue = this.add.text(50, 320, getPhrase(key.Menu.Continue), {

      fontSize: "20px",
      frontFamily: "Console",
      color: "#FFFFFF",
    })
      .setInteractive()
      .on("pointerdown", () => {
        //this.firebase.loadGameData(this.user.uid).then((data) => {
        this.scene.start("game", {
          //   night: data.night,
          ///  timeStamp: new Date(),
          // });
        })
        this.button.play();
        clearInterval(this.setChangeBackground);
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

    /* crear una variable con imagen de fondo y usando la funcion setTimeout   le asigne otra imagen, debe estar en el update */
    // Configura el fondo inicial
    this.scene.bringToTop(this); 
  }

  update() {
    if (this.#wasChangedLanguage === FETCHED) {
      this.#wasChangedLanguage = READY;
      this.Title.setText(getPhrase(key.Menu.Title));
      this.Play.setText(getPhrase(key.Menu.Play));
      this.Title16.setText(getPhrase(key.Menu.Title13));
      this.Title16.setText(getPhrase(key.Menu.Title14));
      this.Title16.setText(getPhrase(key.Menu.Title15));
      this.Title16.setText(getPhrase(key.Menu.Title16));
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
