$(document).ready(function(){

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

      function H4AnimationRemover(){
        sleep(2000);
        header4.removeClass('animate__animated animate__pulse animate__slow');  
      }

      function H4AnimChecker(){
        const animChecker = document.querySelector('.animate__pulse');

          animChecker.addEventListener('animationend', H4AnimationRemover());
      }
      
      var header4 = $('.header__section4');

      if(document.readyState === 'ready' || document.readyState === 'complete'){
          H4AnimChecker();
      }
      
      $('.js--about').click(function(){

        aboutCLick();

      });

      function aboutCLick(){
        document.title = "Reel Films | About";

        if(header4.hasClass('header__section4--home')){

          header4.removeClass('header__section4--home');
          header4.addClass('header__section4--about animate__animated animate__pulse');

          $('.header__section4--desc').addClass('visible animate__animated animate__fadeIn');
          $('.header__section4--desc').removeClass('hidden');

          $('.js--about').removeClass('inactive-nav');
          $('.js--about').addClass('active-nav');

          $('.js--home').addClass('inactive-side-nav');
          $('.js--home').removeClass('active-side-nav');
          
        }
        
      }
      
      $('.js--home').click(function(){

        document.title = "Reel Films | Home";

        if(header4.hasClass('header__section4--about')){
          header4.removeClass('header__section4--about');
          header4.addClass('header__section4--home animate__animated animate__pulse');

          $('.header__section4--desc').addClass('hidden');
          $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');
          
          $('.js--about').removeClass('active-nav');
          $('.js--about').addClass('inactive-nav');

          $('.js--home').removeClass('inactive-side-nav');
          $('.js--home').addClass('active-side-nav');

          header4.removeClass('animate__animated animate__pulse');
        }
      });
});