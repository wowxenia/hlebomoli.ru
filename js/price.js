$( document ).ready(function() {
  $("input[name='radio']").on("click",function(){
    var price =  $(this).parent().find('b').html();
    var delivery = $(this).parent().find('span').html();
  
    $('#self-pickup').fadeOut(50).text(price + ' ₽').fadeIn(50);
    $('#self-pickup-label').fadeOut(50).text(delivery).fadeIn(50);
  });
});