
console.log("Moda Global init")

function  afegirNom(nom) {
	if(nom === ""){
		console.log("No pots afegir un contacte buit");
	} else {
		console.log ("Contacte afegit: " + nom);
	}
}

afegirNom("");
afegirNom("Marta");
