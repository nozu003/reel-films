$(document).ready(function(){

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

      var header4 = $('.header__section4');

      if(document.readyState === 'ready' || document.readyState === 'complete'){
        sleep(1050);
        header4.removeClass('animate__animated animate__pulse');
      }

      $('.js--about').click(function(){
        if(header4.hasClass('header__section4--home')){
          header4.removeClass('header__section4--home');
          header4.addClass('header__section4--about animate__animated animate__pulse');
          $('.header__section4--desc').addClass('visible');
          $('.header__section4--desc').removeClass('hidden');

          $('.js--about').addClass('active-nav');
        }
      });
});