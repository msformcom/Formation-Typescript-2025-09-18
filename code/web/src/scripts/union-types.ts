let a: number | string;

interface Point{
    x:number;
    y:number;
}

interface Profondeur{
    z:number;
}

let p :  Point | Profondeur={z:1};
let z=(p as Profondeur).z;
if("z" in p){
   let z=p.z;
}

let po:Point={x:0,y:0};

let pr:Profondeur={z:1};

let p2: Point & Profondeur;

p2={...po,...pr};




