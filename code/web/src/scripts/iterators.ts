
declare interface Array<T>{
    filterMieux(filtre:(i:T)=>boolean): IEnumerable<T>;
    reduce<U>(accumulateur:(i1:T,i2:T)=>U, initialValue:U): U;
}

declare type IEnumerable<T>=  {
    filterMieux(filtre:(i:T)=>boolean): IEnumerable<T>;
    reduce<U>(accumulateur:(i1:T,i2:T)=>U, initialValue:U): U;
};

(Array.prototype as any).getGenerator=*function(){
    for(let e of this){
        yield  e;
    }
}

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