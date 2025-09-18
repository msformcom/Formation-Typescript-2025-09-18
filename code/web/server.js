// 1) npm init
// 2) npm install express


// Je référence la bibliothèque
const express=require("express");

// Création d'un serveur
const app=express();

// Exécution du serveur
app.listen(4200,()=>{
    // callback une fois le serveur lancé
    console.log("Serveur lancé");
});

