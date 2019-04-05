//Création d'un élément div du DOM

let div1 = document.createElement("div");

// Création d'un élément texte du DOM

let texte1 = document.createTextNode("Texte1");

// Ajout de texte1 à div1

div1.appendChild(texte1);

// Ajout du div1 au body

document.body.appendChild(div1);

// Gestion de l'events click

div1.onclick = function(){
    console.log("clique sur le div1");
}

// Réccupération de l'élément du DOM

let h1 = document.getElementById("h1");

// Gestion de l'event click sur h1

h1.onclick = function(){
    console.log("clique sur le h1");
}


