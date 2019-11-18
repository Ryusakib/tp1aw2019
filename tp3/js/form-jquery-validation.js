$( document ).ready(function() {

    $("#form1").on("submit",function(event){
        event.preventDefault();




        if ($("#txtNom").val()=="" ) {
            $(".hello").text("Veuillez saisin votre Name");
            $('#myModal').modal('show');
        }
        if ($("#txtPrenom").val()=="" ) {
            $(".hello").text("Veuillez saisir votre Firstname");
            $('#myModal').modal('show');
        }



        


      });
    
        






   



    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });