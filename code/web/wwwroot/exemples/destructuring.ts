let tab1=[1,2];
let tab2=[1,2];

let tab3=[...tab1,...tab2];
let [a,b]=tab1;

[a,b]=[b,a];

function addition(...args:number[]){
    return args.reduce((a,b)=>a+b,0);
}


let r=addition(1,2,3);
addition(...tab3)

