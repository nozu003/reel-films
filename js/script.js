$(document).ready(function(){

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

      function H4AnimationRemover(){
        sleep(1250);
        header4.removeClass('animate__animated animate__pulse');  
      }
      
      var header4 = $('.header__section4');

      if(document.readyState === 'ready' || document.readyState === 'complete'){
           H4AnimationRemover();
      }

      $('.js--about').click(function(){

        document.title = "Reel Films | About";

        if(header4.hasClass('header__section4--home')){

          header4.removeClass('header__section4--home');
          header4.addClass('header__section4--about animate__animated animate__pulse');

          $('.header__section4--desc').addClass('visible');
          $('.header__section4--desc').removeClass('hidden');

          $('.js--about').addClass('active-nav');

          $('.js--home').addClass('inactive-side-nav');
          $('.js--home').removeClass('active-side-nav');
      
        }
      });
      
      $('.js--home').click(function(){

        document.title = "Reel Films | Home";

        if(header4.hasClass('header__section4--about')){
          header4.removeClass('header__section4--about');
          header4.addClass('header__section4--home animate__animated animate__pulse');

          $('.header__section4--desc').addClass('hidden');
          $('.header__section4--desc').removeClass('visible');
          
          $('.js--about').removeClass('active-nav');
          $('.js--about').addClass('inactive-nav');

          $('.js--home').removeClass('inactive-side-nav');
          $('.js--home').addClass('active-side-nav');
        }
      });
});