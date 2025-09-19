// generateur * pour indication
function *entiers(){
  let i=0;
  while(true){
    yield i;
    i++;
  }

}
let suite=entiers();

for(let e of suite ){
    console.log(e);
    if(false){
        break;
    }
}

let tEntiers=[1,2,3,4,5,6];
let entiersPairs=tEntiers.filter(e=>e%2==0);
 let somme=entiersPairs.reduce((a,b)=>a+b,0);

declare interface Array<T>{
    filterMieux(filtre:(i:T)=>boolean): IEnumerable<T>;
    reduce<U>(accumulateur:(i1:T,i2:T)=>U, initialValue:U): U;
}

declare type IEnumerable<T>=  {
    filterMieux(filtre:(i:T)=>boolean): IEnumerable<T>;
    reduce<U>(accumulateur:(i1:T,i2:T)=>U, initialValue:U): U;
};


 (Array.prototype as any).filterMieux=function*(f:(i:any)=>boolean){
    for(let e of this ) {
        if(f(e)){
            yield e;            
        }
    }
 }
(Array.prototype as any).reduce=function(f:(i1:any,i2:any)=>any, initial:any){
    let somme=initial;
    for(let e of this){
        somme=f(somme,e);
    }
 }
let entiersFiltres= tEntiers.filterMieux(e=>e%2==0).reduce((a,b)=>a+b,0);
