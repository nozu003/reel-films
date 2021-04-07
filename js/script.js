$(document).ready(function(){

  var header4 = $('.header__section4');
  var portfolio = $('.js--portfolio');
  
    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

      H4AnimationRemover();

      function H4AnimationRemover(){
        sleep(2000);
        header4.removeClass('animate__animated animate__pulse animate__slow');  
      }
      
      $('.js--about').click(function(){

        aboutCLick();

      });

      function aboutCLick(){
        document.title = "Reel Films | About";

        if(header4.hasClass('header__section4--home') || header4.hasClass('header__section4--portfolio')){

          header4.removeClass('header__section4--home');
          header4.addClass('header__section4--about animate__animated animate__pulse');
          header4.removeClass('header__section4--portfolio');
          header4.removeClass("portfolio--films-collection");
          header4.removeClass("portfolio--films-display");
          header4.removeClass("static-bg");

          $('.js--about').removeClass("disp-none");
          $('.js--films').removeClass("disp-none");
          $('.header__section4--credentials').removeClass("disp-none");
          $('.header__section4--portfolio-nav').addClass("disp-none");
          $('.header__section4--portfolio-nav').removeClass("disp-flex");
          $('.header__section4--portfolio-selection').addClass("disp-none");
          $('.header__section4--portfolio-selection').removeClass("disp-flex");

          $('.header__section4--desc').addClass('visible animate__animated animate__fadeIn');
          $('.header__section4--desc').removeClass('hidden');

          $('.js--about').removeClass('inactive-nav');
          $('.js--about').addClass('active-nav');

          $('.js--home').addClass('inactive-side-nav');
          $('.js--home').removeClass('active-side-nav');
          
          $(".header__section4--collection-display").addClass("disp-none");
          $(".selection-photo-lr").addClass("disp-none");

          document.getElementById('background').style.backgroundImage = '';

          document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/zkbUvTHETds?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

          document.querySelector('.film-title-player').innerHTML = "INTRA &mdash; SANTIAGO";
        }
      }
      
      $('.js--home').click(function(){
        homeClick();
      });

      function homeClick(){
        document.title = "Reel Films | Home";

        if(header4.hasClass('header__section4--about') || header4.hasClass('header__section4--portfolio') || header4.hasClass('portfolio--films-collection') || header4.hasClass("portfolio--films-display")){
          header4.removeClass('header__section4--about');
          header4.addClass('header__section4--home animate__animated animate__pulse');
          header4.removeClass('header__section4--portfolio');
          header4.removeClass("portfolio--films-collection");
          header4.removeClass("portfolio--films-display");
          header4.removeClass("static-bg");

          $('.js--about').removeClass("disp-none");
          $('.js--films').removeClass("disp-none");
          $('.header__section4--credentials').removeClass("disp-none");
          $('.header__section4--portfolio-nav').addClass("disp-none");
          $('.header__section4--portfolio-nav').removeClass("disp-flex");
          $('.header__section4--portfolio-selection').addClass("disp-none");
          $('.header__section4--portfolio-selection').removeClass("disp-flex");
          $('.header__section4--film-present').addClass("disp-none");

          $('.header__section4--desc').addClass('hidden');
          $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');
          
          $('.js--about').removeClass('active-nav');
          $('.js--about').addClass('inactive-nav');

          $('.js--home').removeClass('inactive-side-nav');
          $('.js--home').addClass('active-side-nav');
          $('.js--portfolio').removeClass('active-side-nav');

          header4.removeClass('animate__animated animate__pulse');

          $(".header__section4--collection-display").addClass("disp-none");
          $(".selection-photo-lr").addClass("disp-none");

          document.getElementById('background').style.backgroundImage = '';

          document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/zkbUvTHETds?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

          document.querySelector('.film-title-player').innerHTML = "INTRA &mdash; SANTIAGO";
        }
      }
});
