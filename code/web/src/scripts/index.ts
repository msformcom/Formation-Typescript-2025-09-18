"use strict";

// Import de la classe Voiture exportée dans voiture.ts (js)
import {Voiture} from "./voiture.js"; // => Voiture
import { Voiture as V } from "./voiture.js"; // alias pour la classe Voiture
import * as classes from "./voiture.js"; // classes. => toutes ce qui est exporté dans voiture.js



(async function(){
    let p=Promise.resolve(4);
    let r= await p;
    let v=new classes.Voiture();
})();

   