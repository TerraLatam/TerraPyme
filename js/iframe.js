$(document).ready(function(){


  // VALIDATE INPUTS registro-crear-cuenta.html
  $('#form_registro_cuenta input.mandatory').blur(function(){
    var empty = $('form').find('.mandatory').filter(function(){
      return this.value === "";
    });
    if (empty.length){
      $('.form_submit_button').addClass('btn_disable');
    }else {
      $('.form_submit_button').removeClass('btn_disable');
    }
  })





})
