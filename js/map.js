$( document ).ready(function() {
  $("#input-pickup-delivery").on("click",function(){
   $("#input-pickup-delivery-visible").fadeIn( 400 );

   $("#input-car-delivery").on("click",function(){
    $("#input-pickup-delivery-visible").fadeOut( 400 );
   });

   $("#input-courier-delivery").on("click",function(){
    $("#input-pickup-delivery-visible").fadeOut( 400 );
   });
});

  $('#station').change(function(){
   var x = $(this).find('option:selected').text();
   console.log(x);
   if (x == "Пражская") {
    $(".map1").css({'display' : 'none'});
    $(".map2").css({'display' : 'block'});     
   }
   if (x == "Кузнецкий мост") {
    $(".map1").css({'display' : 'block'});
    $(".map2").css({'display' : 'none'});     
   }
});
});