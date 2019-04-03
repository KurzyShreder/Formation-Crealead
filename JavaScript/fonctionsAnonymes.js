/* fonction anonyme imédiate
Immediately invoked function expression ou IIFEs */

//Permet d'isoler le code (fonction local)

(function(){
    //code ici
    console.log("Hello dans la fonction IIFES");
})();

/* fonction anonyme qui est affectée à une variable */

var hello = function() {
    console.log("Hello dans la fonction hello");
}
hello();

