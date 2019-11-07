
function validation() {
	this.event.preventDefault();
	 
	var error = "";
	var nom = document.getElementById("txtNom").value.trim() ;
	var prenom = document.getElementById("txtPrenom").value.trim() ;
	var adress = document.getElementById("txtAdress").value.trim() ;
	var date = document.getElementById("txtDate").value ;
	if(date==null)
		error += "veuillez saisir la date" ;
	if (nom.length < 5 )
		error += "La saisie du nom est obligatoire<br/>";
	if (prenom.length < 5)
		error += "La saisie du Prenom est obligatoire";
	if (adress.length < 5)
		error += "La saisie de l'adress est obligatoire";
	

	if(error == ""){
		
		// OK
		document.getElementById("resultat").innerHTML = "Welcome "+ document.getElementById("txtNom").value ;
		document.getElementById("error").innerHTML = "" ;
	}else{
		
		document.getElementById("error").innerHTML = error ;
	}
	return false;


}

function nowhite() {
	document.getElementById("txtNom").value = document.getElementById("txtNom").value.trim() ;
	document.getElementById("txtPrenom").value = document.getElementById("txtPrenom").value.trim() ;
	document.getElementById("txtAdress").value = document.getElementById("txtAdress").value.trim() ;

}

function bensid() {
	var x ;
	x= document.getElementById("error").innerHTML = "lache ma bite bensid" ;

}