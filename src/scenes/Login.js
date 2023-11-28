import Phaser from "phaser";

export default class Login extends Phaser.Scene {
    constructor() {
      super("login");
    }
  
    create() {
      // agregar un texto "Login" en la parte superior de la pantalla
      this.add
        .text(325, 100, "Login", {
          fontSize: 48,
        })
        .setOrigin(0.5);
  
      // Agregar un texto "Ingresas de forma Anonima" que al hacer clic me levante un popup js para ingresar los datos
      this.add
        .text(325, 200, "Ingresas de forma Anonima", {
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
      this.add
        .text(325, 300, "Ingresar con Google", {
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
  
      // agregar un texto "Ingresar con GitHub" que al hacer clic me levante un popup js para ingresar los datos
      this.add
        .text(325, 400, "Ingresar con GitHub", {
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
        });
    }
  }