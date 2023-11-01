import Phaser from "phaser";

import UI from "./scenes/UI";
import Preload from "./scenes/Preload";
import Camaras from "./scenes/Cameras";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";
import Controles from "./scenes/Controles";
import GameOver from "./scenes/gameOver";
import PassedNight from "./scenes/passedNight";

const config = {
  type: Phaser.AUTO,
  width: 740,
  height: 480,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: -200,
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
  scene: [Preload,UI, Menu, Camaras, Game, Controles,GameOver, PassedNight],
};

export default new Phaser.Game(config);
