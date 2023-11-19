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
        super("credits");
    }

    init({ language }) {
        this.language = language;
    }

    create() {
        this.button = this.sound.add("button")
        this.add.image(600, 440, "Flecha").setScale(0.5).setInteractive().on("pointerdown", () => {
            this.scene.start("menu");
            this.button.play();
        });

        this.Title13 = this.add.text(0, 320, getPhrase(key.Menu.Title13), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.game3Text = this.add.text(300, 320, "Zacarías Bongiovanni", {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title14 = this.add.text(0, 120, getPhrase(key.Menu.Title14), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.game1Text = this.add.text(300, 120, "Ian González", {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title15 = this.add.text(0, 220, getPhrase(key.Menu.Title15), {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.game2Text = this.add.text(300, 220, "Mia Gaitán", {
            fontSize: "25px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
        this.Title16 = this.add.text(250, 30, getPhrase(key.Menu.Title16), {
            fontSize: "30px",
            frontFamily: "Console",
            color: "#00FFFF",
        });
    }
}