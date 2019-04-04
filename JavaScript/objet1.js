/* On peut définir un objet comme une structure cpmplexe de contenus*/

// Définir une fonction construteur

function personne(nom, prénom) {

    //prpriété

    this.nom = nom;
    this.prénom = prénom;

    //méthode
    
    this.sePrésenter = function() {
        console.log("Bonjour, je m'appelle " + 
        this.prénom + " " + this.nom);
    }
}

//instantiation de l'objet

var bob = new personne("Dylan", "Bob");

console.log(bob.nom);
console.log(bob.prénom);

bob.sePrésenter();