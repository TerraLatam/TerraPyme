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
  //HABILITAR COMPROBACIÓN DE DOMINIO AL SELECCIONAR DOMINIO
  $('#comprar_dominio').click(function(){
    if (!$("#comprar_dominio").is(':checked')) {
       $('.contratar_dominio').addClass('input_disabled');
       $('.legales_dominio').hide();
    }
    else {
       $('.contratar_dominio').removeClass('input_disabled');
       $('.legales_dominio').css('display','grid');
       $('.dominio_propio').addClass('input_disabled');
    }
  });
  $('#dominio_propio').click(function(){
    if (!$("#comprar_dominio").is(':checked')) {
       $('.contratar_dominio').addClass('input_disabled');
       $('.dominio_propio').removeClass('input_disabled');
       $('.legales_dominio').hide();
    }
    else {
       $('.contratar_dominio').removeClass('input_disabled');
       $('.legales_dominio').css('display','grid');
    }
  });

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
