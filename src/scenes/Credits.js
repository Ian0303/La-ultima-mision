import Phaser from "phaser";
import { EN_US, ES_AR, PT_BR } from "../enums/languages";
import { FETCHED, FETCHING, READY, TODO } from "../enums/status";
import { getTranslations, getPhrase } from "../services/translations";
import key from "../enums/key";

export default class Credits extends Phaser.Scene {
    #textSpanish;

    #textGerman;

    #textEnglish;

    #textPortuguese;

    #wasChangedLanguage = TODO;

    constructor() {
        super("Credits");
    }

    init({ language }) {
        this.language = language;
    }

    create() {
        this.button = this.sound.add("button")
        this.Title13 = this.add.text(0, 120, getPhrase(key.Menu.Title13 + ": Zacarías Bongiovanni"), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title14 = this.add.text(0, 220, getPhrase(key.Menu.Title14 + ": Ian González"), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title15 = this.add.text(0, 320, getPhrase(key.Menu.Title15 + ": Mia Gaitán"), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title16 = this.add.text(250, 30, getPhrase(key.Menu.Title16), {
            fontSize: "35px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.add.image(570, 440, "Flecha").setScale(0.5).setInteractive().on("pointerdown", () => {
            this.scene.start("menu");
            this.button.play();
        });
    }
}