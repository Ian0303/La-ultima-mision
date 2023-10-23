/* import Phaser from "phaser";

export default class LightButton extends Phaser.GameObjects.Sprite {
    leftLight;

    rightLight;

    constructor(scene, x, y, texture, key, spriteLight, spriteAlien) {
        super(scene, x, y, texture, key);

        scene.add.existing(this);
        scene.physics.add.existing(this);

        this.setTexture(texture);

        this.leftLigth = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.Q
        );
        this.rightLigth = this.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.E
        );
    }

    update(spriteAlien, spriteLight) {

        if (this.leftLigth.isDown || (alien en la room 5)  ) {
            setTimeout(() => {
                this.(sprite de alien de izquierda).setVisible(true)
            }, 1500);
        } else {
            setTimeout(() => {
                this.(sprite de puerta con luz izquierda).setVisible(true)
            }, 1500);
        }

        if (this.rightLigth.isDown || (alien en la room 4)  ) {
            setTimeout(() => {
                this.(sprite de alien de derecha).setVisible(true)
            }, 1500);
        } else {
            setTimeout(() => {
                this.(sprite de puerta con luz derecha).setVisible(true)
            }, 1500);
        }

    }
} */
