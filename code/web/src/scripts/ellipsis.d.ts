

// Fichier de typage
// npm i @type/jquery -D
// si necessaire globalement => tsconfig.json => "types":["jquery"]
declare interface String{
    ellipsis(maxCar:number): string;
}