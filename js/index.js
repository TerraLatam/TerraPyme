$(document).ready(function(){
  //HOME LIGHTBOOX PARA SCREENSHOTS
  $('.demo_sites').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',
      gallery:{
        enabled:true,
        navigateByImgClick: false,
        preload: [0,2],
    }
  });
})
