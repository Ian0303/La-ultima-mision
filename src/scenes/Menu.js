import Phaser from "phaser";

export default class Menu extends Phaser.Scene {
  constructor() {
    super("menu");
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
      setTimeout(changeBackground, 250); // Cambia cada 5 segundos (5000 milisegundos)
    };

    // Inicia el cambio de fondo
    changeBackground();


      
      
        this.nameText = this.add.text(70, 100, "La Ultima Misión",{
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
        })
        this.newGameText = this.add.text(70, 300, "Nueva Partida", {
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
          }).setInteractive()  .on("pointerdown", () => this.scene.start("controles"));
          
          this.continueText = this.add.text(70, 350, "Continuar", {
            fontSize: "20px",
            frontFamily: "Console",
      
            fill: "#FFFFFF",
          });

          this.add.image(113, 450, "Arg").setScale(0.5)
          this.add.image(175, 450, "Bra").setScale(0.5)
          this.add.image(50, 450, "Est").setScale(0.5);
          


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
  }
}
