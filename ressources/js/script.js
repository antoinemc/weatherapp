$("document").ready(function() {
  
console.log('load ok');
  $( function(){
  $("ul").sortable({
      update: function (event, ui){
          console.log($("ul").sortable("toArray"));
      }
    });
  $("ul").disableSelection();
  });



 $("#add-city").click(function(event) {
   var cityName = $("#city").val();
   if(cityName.length < 3) {
     event.preventDefault();

     $(".errletter").html("Vous devez saisir au moins 3 caractères !");
     $(".errletter").fadeIn();
   }
 });


 $(".delete").click(function(event) {
   
  event.preventDefault(); 
  console.log(event.target);
  
  var link = $(this);
  link.parent().fadeOut( function() {
     $.get(link.attr("href"), function( data ) {
            console.log(data);
    });
  });
 });

/*
  $("ul").sortable({
      update: function (event, ui){
        var newSort = JSON.stringify($("ul").sortable("toArray"));
        $getJSON("./updatesort?sort="+newSort, function(data){
          console.log($(".list-group-item"))
          $(".list-group-item").each(function(i){
            $(this).attr("id", i);
          });
        });
         console.log($("ul").sortable("toArray"));
      }
    });
  $("ul").disableSelection();
  });
*/
});