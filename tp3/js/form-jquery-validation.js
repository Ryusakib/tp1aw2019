$( document ).ready(function() {

    $("#form1").on("submit",function(event){

        $('#myModale').modal('show');

        event.preventDefault();
        


      });
    
        






   



    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });