import Phaser from "phaser";
// import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { /* FETCHED, FETCHING, READY, */ TODO } from "../enums/status";
import { /* getTranslations, */ getPhrase } from "../services/translations";
import key from "../enums/key";

export default class Login extends Phaser.Scene {
  #textSpanish;

  #textGerman;

  #textEnglish;

  #textPortuguese;

  #wasChangedLanguage = TODO;
  constructor() {
    super("login");
  }
  init({ language }) {
    this.language = language;
  }

  create() {
    // agregar un texto "Login" en la parte superior de la pantalla
    this.title19 = this.add
      .text(325, 100, getPhrase(key.Menu.Title19), {
        fontSize: 48,
      })
      .setOrigin(0.5);

    // Agregar un texto "Ingresas de forma Anonima" que al hacer clic me levante un popup js para ingresar los datos
    this.tile20 = this.add
      .text(325, 250, getPhrase(key.Menu.Title20), {
        fontSize: 24,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInAnonymously()
          .then(() => {
            this.scene.start("manga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

    // agregar un texto centrado "Ingresar con Google" que al hacer clic me levante un popup js para ingresar los datos
    this.tilte21 = this.add
      .text(325, 380, getPhrase(key.Menu.Title21), {
        fontSize: 24,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInWithGoogle()
          .then(() => {
            this.scene.start("manga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });

   /*  // agregar un texto "Ingresar con GitHub" que al hacer clic me levante un popup js para ingresar los datos
    this.tilte22 = this.add
      .text(325, 400, getPhrase(key.Menu.Title22), {
        fontSize: 24,
      })
      .setOrigin(0.5)
      .setInteractive()
      .on("pointerdown", () => {
        this.firebase
          .signInWithGithub()
          .then(() => {
            this.scene.start("manga");
          })
          .catch((error) => {
            console.log("🚀 ~ file: Login.js:74 ~ .catch ~ error", error);
          });
      });*/
  } 
}