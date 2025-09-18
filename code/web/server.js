// 1) npm init
// 2) npm install express


// Je référence la bibliothèque syntaxe spécifique à node.js
const express=require("express");

// Création d'un serveur
const app=express();

// Middleware de journalisation dans la console
app.use(async (req,res,next)=>{
    console.log("Entrée de : "+req.path);
    await next();
   console.log("Sortie de : "+req.path);
});

// service des fichiers statiques dans wwwroot
app.use(express.static("wwwroot"));

// Exécution du serveur
app.listen(4200,()=>{
    // callback une fois le serveur lancé
    console.log("Serveur lancé");
});

