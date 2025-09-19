let p4: {a:number,b:number} ={a:9,b:6};
declare type Record1=[a:number,b:string];

let p6:Record1=[1,"g"];

let p5:[a:number,b:string]=[1,"T"];
p5=p6; // => copie de référence => problèmes potentiels
p5=[...p6]; // => copie de valeurs

export const a=1;