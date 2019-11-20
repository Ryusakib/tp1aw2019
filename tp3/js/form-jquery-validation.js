$( document ).ready(function() {
   
    $("#form1").on("submit",function(event){
        event.preventDefault();



        var x = 0 ;

        if ($("#txtNom").val()=="" ) {
            $(".hello").text("Veuillez saisir votre Name");
            $('#myModal').modal('show');
            x = x + 1 ; 
           
        }
        if ($("#txtPrenom").val()=="" ) {
            $(".hello").text("Veuillez saisir votre Firstname");
            $('#myModal').modal('show');
            x=x+1 ;
        }
        if($("#txtbirthday").val()=="" ) {
            $(".hello").text("Veuillez saisir votre birthday");
            $('#myModal').modal('show');
            x=x+1 ;

        }

        if($("#passw").val()=="0000") {

            if (x==0) {
            $(".hello").text("welcome" +" "+ $("#txtNom").val());
           
            $('#myModal').modal('show');}
            

        }
        else {

            $(".hello").text("Veuillez saisir le bon mot de passe par défault 0000");
            $('#myModal').modal('show');
            x=x+1 ;
        
    }




        


      });
    
        






   



    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 });