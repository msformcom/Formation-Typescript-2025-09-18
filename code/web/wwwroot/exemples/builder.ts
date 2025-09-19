declare type RequeteBuilder={
    addHeader: (cle:string,valeur:string)=>RequeteBuildWithHeader
}
declare type RequeteBuildWithHeader=RequeteBuilder & {
    removeHeader:(key:string)=>RequeteBuilder;
}

class Builder implements RequeteBuilder{
    private requete:Request;
    constructor(url:string){
        this.requete=new Request(url);
    }
    addHeader(key:string,value:string) : RequeteBuildWithHeader{
        this.requete.headers.append(key,value);
        return this as any;
    }
    private removeHeader(key:string){
        this.requete.headers.delete(key);
        return this as RequeteBuilder;
    }
}

let b=new Builder("www.gogo")
            .addHeader("type","")
            .removeHeader("type");


declare type Constructeur<T> = {new():T}; // interface constructeur de type T

export function construction<T>(ctor:{new(s:string):T},s:string) : T{
    console.log(`Construbction de ${ctor.name}`);
    return new ctor(s);
}

class Personne{
    constructor(s:string){

    }
}

let t=new Personne("Dom");

let toto=construction(Personne,"Dom ");

