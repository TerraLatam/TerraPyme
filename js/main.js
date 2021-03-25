$(document).ready(function(){
  //CREDIT CARD FORMAT pymes_datos de pago.html
  $('#pp-card_number').formatCardNumber();
  $('#pp-card_expires').formatCardExpiry();
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
    }
  });
  $('#dominio_propio').click(function(){
    if (!$("#comprar_dominio").is(':checked')) {
       $('.contratar_dominio').addClass('input_disabled');
       $('.legales_dominio').hide();
    }
    else {
       $('.contratar_dominio').removeClass('input_disabled');
       $('.legales_dominio').css('display','grid');
    }
  });
})
