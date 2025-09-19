declare type Employe={
    readonly nom:string;
    prenom:string;
    age:number;
}

let e:Employe;


declare type names="a"|"b"|"c";

declare type WithPromises<T>={readonly [k in keyof T]:{ load:Promise<T[k]>, dateLastload:Date, lastValue:T[k]}};

let r1:WithPromises<Employe>;
