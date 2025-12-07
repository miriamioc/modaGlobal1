
console.log("Moda Global init")


function  hola(){
console.log("Benvinguts a moda global");
}

hola();

function  afegirNom(nom) {
	if(nom === ""){
		console.log("No pots afegir un contacte buit");
	} else {
		console.log ("Contacte afegit: " + nom);
	}
}

afegirNom("");
afegirNom("Marta");

