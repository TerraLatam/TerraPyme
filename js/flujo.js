$(document).ready(function(){
  //PLAN SELECTED pymes_datos de pago.html
  $('.plan_btn').click(function(event){
    event.preventDefault();
    $(this).addClass('plan_selected');
    $(this).siblings().removeClass('plan_selected');
  })
  //CERRAR POPUP
  $('.close_popup').click(function(){
    $('body').removeClass('popupOpen')
  })
  $('#show_payment_modal').click(function(event){
    event.preventDefault();
    $('body').addClass('popupOpen')
  })
  //HABILITAR COMPROBACIÓN DE DOMINIO AL SELECCIONAR DOMINIO terra-pyme-payments-domains.html
  $('#comprar_dominio').click(function(){
    if (!$("#comprar_dominio").is(':checked')) {
       $('.contratar_dominio').addClass('input_disabled');
       $('.legales_dominio').hide();
    }
    else {
       $('.contratar_dominio').removeClass('input_disabled');
       $('.legales_dominio').css('display','grid');
       $('.dominio_propio').addClass('input_disabled');
       $('.cambio_de_texto').text('Pagar dominio y comenzar período de prueba');
    }
  });
  $('#dominio_propio').click(function(){
    if (!$("#comprar_dominio").is(':checked')) {
       $('.contratar_dominio').addClass('input_disabled');
       $('.dominio_propio').removeClass('input_disabled');
       $('.legales_dominio').hide();
       $('.cambio_de_texto').text('Comienza período de prueba');
    }
    else {
       $('.contratar_dominio').removeClass('input_disabled');
       $('.legales_dominio').css('display','grid');
    }
  });

//HABILITAR BOTON AL TECLEAR DOMINIO  terra-pyme-payments-domains.html
  $('#own_domain_input, #comprar_dominio_input').keyup(function(){
    $('.disable_btn').removeClass('disable_btn');
  })

  //GENERAR CONTRASEÑA: show-hide password
  //terra-pyme-products-crear-buzon.html
  $('.pssw1').click(function(){
    $(this).toggleClass('showPss');

    var x = $('#new_password');
    if (x.attr('type')=== 'password') {
      x.attr('type','text');
    }else {
      x.attr('type','password');
    }
  });
  $('.pssw2').click(function(){
    $(this).toggleClass('showPss');

    var x = $('#confirm_new_password');
    if (x.attr('type')=== 'password') {
      x.attr('type','text');
    }else {
      x.attr('type','password');
    }
  });

})
