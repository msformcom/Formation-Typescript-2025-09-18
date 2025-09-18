// classe Voiture classique je
function Voiture(marque){
    this.marque=marque ? marque :"Peugeot";
}

let v=new Voiture("Ciroen");

// prototypage
Voiture.prototype.nbRoues=4;

// Classe camion
function Camion(){
    
}

// prototype (classe mere) du camion = une voiture
Camion.prototype=new Voiture("Volvo");
let c=new Camion();

console.log(v);
console.log(c);

console.log(c.nbRoues);

