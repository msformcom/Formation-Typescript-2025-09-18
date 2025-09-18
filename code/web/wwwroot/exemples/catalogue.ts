import { Chat } from "./abstract";
import { Chien, Fourchette, IProduit } from "./interfaces";

let tableau=new Array<IProduit>();
// Types typescript
// unknown = inconnu
// any = n'importe quel type


tableau.push(new Chien());
tableau.push(new Fourchette());

for(let p of tableau){
    console.log(p.prix);
}

let a:any="yo";

for(let p of a){

}
for(let p in a){
    
}

let premier=tableau[0];