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
})
