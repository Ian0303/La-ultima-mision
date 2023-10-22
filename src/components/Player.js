import Phaser from "phaser";

export default class Player extends Phaser.GameObjects.Sprite {
  velocity;

  body;

  cursors;

  constructor(scene, x, y, texture) {
    super(scene, x, y, texture);

    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body.setCollideWorldBounds(true);

    this.setTexture(texture);
    this.velocity = 500;

    this.cursors = scene.input.keyboard.createCursorKeys();
  }

  update() {
    if (this.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
      this.anims.play("left", true);
    } else if (this.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
      this.anims.play("right", true);
    } else {
      this.body.setVelocityX(0);
      this.anims.play("turn");
    }
  }
}
