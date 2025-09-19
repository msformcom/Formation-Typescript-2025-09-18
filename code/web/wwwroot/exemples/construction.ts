function construction<T,TParams extends any[]>(ctor:{new(...args:TParams):T},...args:TParams) : T{
    let o=new ctor(...args);
    console.log(`Construbction de ${ctor.name} : ${JSON.stringify(o)}`);
    return o
}

class Contact{
    constructor(public nom:string,public age:number){

    }

}

let t1=new Contact("Dom",3);

let toto1=construction(Contact,"Dom ",1);