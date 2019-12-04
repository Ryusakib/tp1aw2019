$( document ).ready(function() {

    

    $("#form1").keyup(function(){
        $(".char").text( $("#txtNom").val().length +" "+ "car.");
        $(".char1").text( $("#txtPrenom").val().length +" "+ "car.");


    });

    $(".btn").click(function(){
        getLocation()
    }) ;
    


   
    $("#form1").on("submit",function(event){
      //  event.preventDefault();


        var y = "https://maps.googleapis.com/maps/api/staticmap?markers="+$("#txtAddress").val()+"&zoom=12&size=200x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"
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
        if ($("#txtAddress").val()=="" ) {
            $(".hello").text("Veuillez saisir votre Address");
            $('#myModal').modal('show');
            x=x+1 ; }
        
        if (x==0) {
           // $(".modal-title").text("Welcome" +" "+ $("#txtNom").val()) ;
            
            //$(".modal-body").html("Vous etes nés le"+" "+$(" #txtbirthday").val()+" "+"et vous habitez"+'<img src="'+y+'"  />');
            
            //$(".modal-body").css('border','5px black solid') ;

            // $('#myModal').modal('show')

            event.preventDefault();


            var n = $("#txtNom").val() ;
            var p = $("#txtPrenom").val() ;
            var d = $("#txtbirthday").val() ;
            var a = $("#txtAddress").val() ;
            var e = $("exampleInputEmail1").val() ;

            contactStore.add(n, p, d,a,e) ;
            contactStore.getList(); 
            document.querySelector("table tbody").innerHTML = document.querySelector("table tbody").innerHTML +
                                           '<tr><td>'+n+'</td><td>'+p+'</td><td>'+d+'</td><td>'+a+'</td><td>'+e+'</td><td>';
                                           ;}

      });

     console.log( "DOM ready!" );
     
     
 });