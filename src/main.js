import Phaser from "phaser";

import UI from "./scenes/UI";
import Preload from "./scenes/Preload";
import Camaras from "./scenes/Cameras";
import Menu from "./scenes/Menu";
import Game from "./scenes/Game";
import Controles from "./scenes/Controles";
import GameOver from "./scenes/gameOver";
import PassedNight from "./scenes/passedNight";
import Manga from "./scenes/Manga";
import Credits from "./scenes/Credits";
import Login from "./scenes/Login";

import FirebasePlugin from "./Plugins/FirebasePlugin";
import Scores from "./scenes/Scores";



const config = {
  type: Phaser.AUTO,
  width: 620,
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
      debug: true,
    },
  },
  scene: [Preload, UI, Menu, Camaras, Game, Login, Controles, Credits, Manga, GameOver, PassedNight, Scores],
  plugins: {
    global: [
      {
        key: "FirebasePlugin",
        plugin: FirebasePlugin,
        start: true,
        mapping: "firebase",
      },
    ],
  },
};

export default new Phaser.Game(config);
