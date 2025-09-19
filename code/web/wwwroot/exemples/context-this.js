class Personne{
    poids=1;
    manger1(){
        return manger1();
    }
    manger2(){
        return manger2();
     }

}

let p=new Personne();

let manger1=function(){
       this.poids++;
}
let manger2=()=>{
     this.poids++;
}

p.manger2();
p.manger1();