import { IProduit } from "./interfaces";

interface Point{
    x:number;
    y:number;
    tag?:string;
}



interface Profondeur{
    z:number;

}

declare type P2= Point & Profondeur;

let p:P2={x:0,y:1,z:2};

let p2:NonNullable<Point>={x:0,y:1} // tag enleve
let p3:Required<Point>={x:0,y:1,tag:""} // tag obligatoire

declare type catname= "riri" | "fifi" | "loulou"; // purement ts

declare type Employe={
    nom:string;
    prenom:string;
}

declare type WithPrefix<T>={readonly [k in keyof T]:Promise<T[k]>};

let r:WithPrefix<Employe>;

let v:Exclude<catname,"loulou">="";

declare type NomDuChat=Record<catname,number>;


let t:Record<catname,number>={fifi:1,loulou:7, riri:1};


 interface Dico{ [g : string ]:number};

 let dico1:Dico={};


declare type PromesseCatName=Promise<catname>;
declare type ReCatName=Awaited<PromesseCatName>;

class Catalogue<T extends IProduit>{
    items:T[]=[];
    addItem(item:T){
        this.items.push(item);
        return this.items.length;
    }
}
let c=new Catalogue<IProduit>();

declare type operation=(a:number,b:number)=>string;

let f:operation=(a,b)=>(a+b).toFixed(2);

declare type retourF=ReturnType<operation>;
declare type paramsType=Parameters<operation>;
