function validation() {
	this.event.preventDefault(); 
	var error = "";

	if (document.getElementById("txtNom").value.length == null)
		error += "La saisie du nom est obligatoire<br/>";
	if (document.getElementById("txtPrenom").value.length == null)
		error += "La saisie du nom est obligatoire";
	if (document.getElementById("txtAdress").value.length == null)
		error += "La saisie du nom est obligatoire";
	if (document.getElementById("txtEmail").value.length == null)
		error += "La saisie du nom est obligatoire";

	if(error == ""){
		// OK
		document.getElementById("resultat").innerHTML = "Welcome "+ document.getElementById("txtNom").value ;
	}else{
		document.getElementById("error").innerHTML = error ;
	}
	return false;
}