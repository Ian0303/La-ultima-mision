import Phaser from 'phaser'


export default class Player extends Phaser.GameObjects.Sprite
{
velocity;

body;

cursors

constructor(scene, x, y, texture)
{
super(scene, x, y, texture);

scene.add.existing(this);
scene.physics.add.existing(this);

this.body.setCollideWorldBounds(true);

this.setTexture(texture)
this.velocity = 500;

}


update(){
	if (this.cursors.left.isDown) {
		this.body.velocityx(-this.velocity);
		this.body.anims.play("left", true);
	  }
	  else if (this.cursors.right.isDown) {
		this.body.velocity(this.velocity);
		this.body.anims.play("right", true);
	  }
	  else {
		this.body.velocity(0);
		this.body.anims.play("turn");
	  }   
}

}


