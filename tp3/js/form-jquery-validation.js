$( document ).ready(function() {
   
    $("#form1").on("submit",function(event){
        event.preventDefault();


        var y = "https://maps.googleapis.com/maps/api/staticmap?markers="+$("#txtNom").val()+"&zoom=10&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"
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
            $(".hello").text(y +" "+ $("#txtNom").val());
            $(".modal-body").html('<img src="'+y+'" />' ) ;
            $('#myModal').modal('show');}
        }
        else {

            $(".hello").text("Veuillez saisir le bon mot de passe par défault 0000");
            $('#myModal').modal('show');
            x=x+1 ;
        }

      });

     console.log( "DOM ready!" );
     
     
 });