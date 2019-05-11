function isValidEmailAddress(emailAddress) {
  var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
  return pattern.test(emailAddress);
}

function isCyrillic(emailAddress) {
  var pattern = /[а-яА-ЯЁё]/;
  return pattern.test(emailAddress);
}

function isItTag(message) {
  var pattern = /<(.|\n)*?>/g;
  return pattern.test(message);
}

$( document ).ready(function() {

  $("#phone").mask("999 999 99-99");

  $(".submit").on("click",function(){
    var textarea = $('#textarea').val();
    if (isItTag(textarea) == true) {
      e.stopImmediatePropagation();
      e.preventDefault(); // Cancel the submit
      return false; // Exit the .each loop
    }
  });

  $('#textarea').on('keyup', function() {
    var textarea = this.value;
    if (isItTag(textarea) == true) {
      $(this).css({'border' : '2px solid #e64545'});
      $('.error-submit p').text('Это поле не должно содержать HTML-теги.');
      $('.error-submit').css({'display' : 'block'}); 
    }
  });

  $('#email').on('keyup', function() {
    var email = this.value;
    if ((isValidEmailAddress(email) == false) || (isCyrillic(email) == true)) {     
      $(this).css({'border' : '2px solid #e64545'});
      $('.error-email p').text('Это поле должно содержать адрес электронной почты в латинице.');
      $('.error-email').css({'display' : 'block'}); 
  }
      else {
      $(this).css({'border' : '1px solid #c4b7b1'});
      $('.error-email').css({'display' : 'none'});
      }      
});

$('#name').on('keyup', function() {
  var name = this.value;
  if ((name.length < 2 ) || isCyrillic(name) == false) {     
    $(this).css({'border' : '2px solid #e64545'});
    $('.error-name p').text('Это поле должно содержать имя на русском языке.');
    $('.error-name').css({'display' : 'block'}); 
}
    else {
    $(this).css({'border' : '1px solid #c4b7b1'});
    $('.error-name').css({'display' : 'none'});
    }      
});

$('#lname').on('keyup', function() {
  var lname = this.value;
  if ((name.length < 2 ) || isCyrillic(name) == false) {     
    $(this).css({'border' : '2px solid #e64545'});
    $('.error-lname p').text('Это поле должно содержать фамилию на русском языке.');
    $('.error-lname').css({'display' : 'block'}); 
}
    else {
    $(this).css({'border' : '1px solid #c4b7b1'});
    $('.error-lname').css({'display' : 'none'});
    }      
});

});

