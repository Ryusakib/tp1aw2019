
function validation() {
	this.event.preventDefault();
	 
	var error = "";
	
	var date = document.getElementById("txtDate").value ;

	var nom =document.getElementById("txtNom").value
	var prenom = document.getElementById("txtPrenom").value 
	var adress = document.getElementById("txtAdress").value 

	 nom = document.getElementById("txtNom").value.trim() ;
	 prenom= document.getElementById("txtPrenom").value.trim() ;
	 adress= document.getElementById("txtAdress").value.trim() ;

	if(date=="")
		error += "Veuillez saisir une date" ;
	if (nom.length < 5 )
		error += "Votre Nom doit contenir au moins 5 caractères<br/>";
	if (prenom.length < 5)
		error += "Votre Prenom doit contenir au moins 5 caractères<br/>";
	if (adress.length < 5)
		error += "Votre adress doit contenir au moins 5 caractères";
	

	if(error == ""){
		
		// OK
		document.getElementById("resultat").innerHTML = "Welcome "+ document.getElementById("txtNom").value ;
		document.getElementById("error").innerHTML = "" ;
	}else{
		
		document.getElementById("error").innerHTML = error ;
	}
	return false;


}


