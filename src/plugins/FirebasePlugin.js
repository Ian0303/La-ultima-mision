import Phaser from "phaser";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBerNewtIzxQPdU-StcKyWOR4qS06MH_EA",
    authDomain: "la-ultima-mision.firebaseapp.com",
    projectId: "la-ultima-mision",
    storageBucket: "la-ultima-mision.appspot.com",
    messagingSenderId: "237666159551",
    appId: "1:237666159551:web:a0e0b5950850731f616f0a"
  };

export default class FirebasePlugin extends Phaser.Plugins.BasePlugin {
 constructor(pluginManager) {
   super(pluginManager);
   this.app = initializeApp(firebaseConfig);
 }
}

