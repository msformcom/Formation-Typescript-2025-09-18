"use strict";

// Import de la classe Voiture exportée dans voiture.ts (js)
import {Voiture} from "./voiture.js"; // => Voiture
import { Voiture as V } from "./voiture.js"; // alias pour la classe Voiture
import * as classes from "./voiture.js"; // classes. => toutes ce qui est exporté dans voiture.js


(async function(){
    let v=new Voiture("Peugeot","208","Toto");
    let m:string=v.marque;
    v.proprietaire="toto";  // set prorietaire execute dans la classe avec un parametre "toto"
    let p=v.proprietaire;// get prorietaire execute dans la classe 

    let v2=new Voiture("Peugeot","208");
    let v3=new Voiture("Peugeot","208",5000);
 
})();

   