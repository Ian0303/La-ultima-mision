import Phaser from "phaser";

import HelloWorldScene from "./scenes/HelloWorldScene";
import UI from "./scenes/UI";
import Preload from "./scenes/Preload";
import Camaras from "./scenes/Cameras";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";
import Controles from "./scenes/Controles";

const config = {
  type: Phaser.AUTO,
  width: 640,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 640,
      height: 480,
    },
    max: {
      width: 2000,
      height: 1200,
    },
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false,
    },
  },
  scene: [Preload, HelloWorldScene, UI, Menu, Game, Camaras,Controles],
};

export default new Phaser.Game(config);
