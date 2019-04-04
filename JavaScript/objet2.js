// Création d'une "class" ES5

class personne {
    constructor(nom, prénom, ) {
        this.nom = nom;
        this.prénom = prénom;
    }

    // Méthode

    sePrésenter() {
        console.log("Bonjour, je m'appelle "+
        this.prénom + " " + this.nom);
    }

}

var thibaut = new personne ("PRAZERES", "Thibaut");

thibaut.sePrésenter();

/* Création d'une "class" Enseignant qui hérite de la class personne */

class Enseignant extends personne {
    constructor(nom, prénom, diplome) {
        super(nom, prénom);
        this.diplome = diplome;
    }
    // Méthode
   enseigner() {
       console.log("J'enseigne le JavaScript.");
   }     
}

var yvan = new Enseignant ("Douënel", "Yvan", "BAC");
yvan.sePrésenter();
yvan.enseigner();
console.log(yvan.diplome);

// class aui spécialise la class Enseignant

class EnseignantProgrammation extends Enseignant {

    enseignerJS() {
        console.log("J'enseigne la programmation.");
    }
}

//hérite du construteur master

var yvan = new EnseignantProgrammation ("Douënel", "Yvan");
yvan.enseignerJS();

class Apprendre extends personne {
    apprendre() {
        console.log("J'apprends le JavaScript !");
    }
}

var thibaut = new Apprendre ("PRAZERES", "Thibaut");
/* nécessaire de recréer une personne ne peux pas réutiliser une personne
existante car pas défini pour l'héritage*/

thibaut.sePrésenter();
thibaut.apprendre();
