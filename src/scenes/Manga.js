export default class Manga extends Phaser.Scene {
  constructor() {
    super("manga");
  }
  create() {
    this.button = this.sound.add("button")
    this.arrow = this.add.image(550, 620, "Flecha").setScale(1).setInteractive().on("pointerdown", () => {
      this.scene.start("game");
      this.button.play();
    });
    this.manga = this.add.image(320, 220, "Manga").setScale(0.5).setVisible(true);
    this.manga1 = this.add.image(320, 220, "Manga1").setScale(0.5).setVisible(false);
    this.head = this.physics.add.sprite(320, 0, "Cabeza").setGravity(0,2300);
    this.cameras.main.startFollow(this.head);
    this.head.setCollideWorldBounds(true);
    this.cursors = this.input.keyboard.createCursorKeys();

    setTimeout(() => {
      this.manga.setVisible(false);
      this.manga1.setVisible(true);
      this.arrow.setDepth(1);
      this.head.setPosition(320, -10);
    }, 10000);
  }
  update() {
    if (this.cursors.up.isDown) {
      this.head.setVelocityY(-250);
    } else {
      if (this.cursors.down.isDown) {
        this.head.setVelocityY(250);
      } else {
        this.head.setVelocityY(0);
      }
    }
  }
}
