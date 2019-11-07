
function validation() {
	this.event.preventDefault(); 
	var error = "";
	var nom = document.getElementById("txtNom").value.trim() ;
	var prenom = document.getElementById("txtPrenom").value.trim() ;
	var adress = document.getElementById("txtAdress").value.trim() ;
	if (nom.length < 5 )
		error += "La saisie du nom est obligatoire<br/>";
	if (prenom.length < 5)
		error += "La saisie du nom est obligatoire";
	if (adress.length < 5)
		error += "La saisie du nom est obligatoire";
	

	if(error == ""){
		// OK
		document.getElementById("resultat").innerHTML = "Welcome "+ document.getElementById("txtNom").value ;
	}else{
		document.getElementById("error").innerHTML = error ;
	}
	return false;


}