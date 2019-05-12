$( document ).ready(function() {
  if ($('#input-courier-delivery').on("click",function() {
    $('.checkbox-choice-courier').css({'background-color' : '#fdfcfa'});
    $('.checkbox-choice-car').css({'background-color' : '#fff'});
    $('.checkbox-choice-pickup').css({'background-color' : '#fff'});
  }));



  if ($('#input-car-delivery').on("click",function() {
    $('.checkbox-choice-car').css({'background-color' : '#fdfcfa'});
    $('.checkbox-choice-courier').css({'background-color' : '#fff'});
    $('.checkbox-choice-pickup').css({'background-color' : '#fff'});
  }));
  if ($('#input-pickup-delivery').on("click",function() {
    $('.checkbox-choice-pickup').css({'background-color' : '#fdfcfa'});
    $('.checkbox-choice-courier').css({'background-color' : '#fff'});
    $('.checkbox-choice-car').css({'background-color' : '#fff'});
  }));
});