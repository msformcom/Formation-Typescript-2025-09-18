

function addition(a:number,b:number){
    return a+b;
}

function additionAsync(a:number,b:number){
    return Promise.resolve(a+b);
}

// code synchrone
let r1=addition(1,2);
let r2=addition(3,4);
let r3=addition(r1,r2);
console.log(r3);

let rp1=additionAsync(1,2);
rp1.then(r1=>{
    let rp2=additionAsync(3,4);
    rp2.then(r2=>{
        additionAsync(r1,r2).then(r3=>{
            console.log(r3);
        })
    })
});

// Fonction anonyme exécutée immédiatement => closure
// 
(async function(){
    // Sert a créer un scope pour les variables
    // async / await => ecrit du code asynchrone façon synchone 
    var a=1; // pas globale
    let r1=await additionAsync(1,2);
    let r2=await additionAsync(3,2);
    let r3=await additionAsync(r1,r2);
    console.log(r3);
})();






