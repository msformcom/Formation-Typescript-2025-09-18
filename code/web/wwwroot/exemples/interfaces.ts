// interface =>  entierement abstraite
// sert à définir des contrats d'implémentation
// n'est pas traduit dans le code js

import { Animal } from "./abstract";



export interface IProduit{
    prix:number;
    vendre():number;
}

function a(p:any){

}



export class Chien extends Animal implements IProduit{
    constructor(){
        // appel du constructeur de la base
        super();
        this.espece="chien";
    }
    crier(){
        return "OUAF";
    }
    prix=1000;
    vendre(){
        return this.prix*0.2;
    }
}

export class Fourchette implements IProduit{
    prix=10;
    vendre(){
        return this.prix*0.2;
    }
}


interface IPoint{
    x:number;
    y:number;
}

class Point implements IPoint{
    x:number=0;
    y:number=0;
}

function distance(p:IPoint){
    return Math.sqrt(Math.pow(p.x,2)+Math.pow(p.y,2));
}

let p=new Point();
let d=distance(p);

// Le paramètre respecte le contrat de type => IPoint
d=distance({x:1,y:2});

// l'objet donnée ne respecte pas le contrat de type
//let p3:IPoint={x:1};


a(IProduit);
a(Chien);