let s="Dominique";

// ellipsis
// s.ellipsis(8) => ellip...

function ellipsis(s:string,maxCar:number){
    if(s.length<=maxCar){
        return s;
    }
    return s.substring(0,maxCar-3)+"...";
    return `${s.substring(0,maxCar-3)}...`;
}

declare interface String{
    ellipsis(maxCar:number):string;
}

String.prototype.ellipsis=(maxCar:number)=>{
    return ellipsis(this as any,maxCar);
}

let r=s.ellipsis(10);
