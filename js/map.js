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
});