import Phaser from 'phaser'

export default class Player extends Phaser.GameObjects.Sprite
{
room;


constructor(scene, x, y, texture, activo){
super(scene, x, y, texture, activo);
    this.newRoom = undefined;
    this.active = true
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