// J'interdis l'utilisation de cette classe pour instancier
// juste une classe de base
export abstract class  Animal{
    estVivant=true;
    espece!:string;
    abstract crier():string;
}

class Produit{
    prix:number=1000000;
}

// Pour créer cette classe concrète je suis obligé d'implémenter Sanglier
export class Sanglier extends Animal{
        constructor(){
        // appel du constructeur de la base
        super();
        this.espece="sanglier";
    }
        crier(){
        return "Grouf";
    }
}


export class Chat extends Animal{
    constructor(){
        // appel du constructeur de la base
        super();
        this.espece="chat";
    }
        crier(){
        return "Miaou";
    }

}