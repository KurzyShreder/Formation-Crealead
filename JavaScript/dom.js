/* Le document object model DOM est une interface de programmation pour les ducument HTML.
Il fournit une représentation structurée du document html sous forme d'un arbre et 
définit la fçon dont la structure peut etre manipulée par javasvript */

//Création d'un élément div du DOM

let div1 = document.createElement("div");

// Création d'un élément texte du DOM

let texte1 = document.createTextNode("Texte1");

// Ajout de texte1 à div1

div1.appendChild(texte1);

// Ajout du div1 au body

document.body.appendChild(div1);


