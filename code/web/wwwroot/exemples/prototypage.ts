let s="Dominique";

// ellipsis
// s.ellipsis(8) => ellip...



declare interface String{
    ellipsis(maxCar:number):string;
}

// function ellipsis(s:string,maxCar:number){
//     if(s.length<=maxCar){
//         return s;
//     }
//     return s.substring(0,maxCar-3)+"...";
//     return `${s.substring(0,maxCar-3)}...`;
// }
// String.prototype.ellipsis=function(maxCar:number){
//     return ellipsis(this as any,maxCar);
// }

let r=s.ellipsis(10);
