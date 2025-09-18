// rend la classe Voioture visible dans les autres fichiers via import
export class Voiture{

    // je déclare 3 signatures pour le constructeur => ! une seule implémentation
    constructor(marque:string,modele:string,proprietaire:string);
    constructor(marque:string,modele:string);
    constructor(marque:string,modele:string,prix:number);
    // suivi d'une implémentation qui couvre les déclarations
    constructor(marque:string, public modele:string, proprietaireOrPrix? :string | number ){
        this.marque=marque;
        if(proprietaireOrPrix === undefined){
            //  constructor(marque:string,modele:string);
            this.proprietaire="Toto";
            this.prix=10000;
        }
        else if(typeof(proprietaireOrPrix)==="string"){
            // constructor(marque:string,modele:string,proprietaire:string);
            this.proprietaire=proprietaireOrPrix;
            this.prix=10000;
        }
        else if (typeof(proprietaireOrPrix)==="number"){
            // constructor(marque:string,modele:string,prix:number);
            this.proprietaire="Toto";
            this.prix=proprietaireOrPrix;
        }else{
            throw new Error("Typage incorrect");
        }
     
    }


    //  marque:string | undefined; initialisation possible si marque peut être undefined dans le métier
    //prix=0; // initialisation avec valeur par défaut (toujours etre valide)
    public marque : string;
    public prix:number;
    #proprietaire:string="Moi";

    // 
    get proprietaire(){
        return this.#proprietaire;
    }

    set proprietaire(v:string){
        if(!v){ 
            //  v ne vaut pas null, undefined, "",0,false,NaN
            // let v=Math.sqrt(-2) => NaN
            // v=1/0 => 
              throw new Error("Pas possible");        
        }
         this.#proprietaire=v; 

    }
}

