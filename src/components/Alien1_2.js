import Phaser from 'phaser'

export default class Alien1 extends Phaser.GameObjects.Sprite
{
room;

active;


constructor(scene, x, y, texture, active){
super(scene, x, y, texture, active);
    this.newRoom = undefined;
    
}


/* moverAlien(room) {
    if (this.active === true) {
        this.newRooom = Phaser.Math.Between(1, 5)
        this.room = this.newRoom 
        if (this.room === 1) {
            
        }

    }
} */
    
}