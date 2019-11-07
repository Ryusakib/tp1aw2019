
function validation() {
	this.event.preventDefault(); 
	var error = "";
	var nom = document.getElementById("txtNom").value.trim() ;
	if (nom.length == null )
		error += "La saisie du nom est obligatoire<br/>";
	if (document.getElementById("txtPrenom").value.trim().length == null)
		error += "La saisie du nom est obligatoire";
	if (document.getElementById("txtAdress").value.trim().length == null)
		error += "La saisie du nom est obligatoire";
	

	if(error == ""){
		// OK
		document.getElementById("resultat").innerHTML = "Welcome "+ document.getElementById("txtNom").value ;
	}else{
		document.getElementById("error").innerHTML = error ;
	}
	return false;


}