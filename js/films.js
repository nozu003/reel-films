$(document).ready(function(){

    var $header = $(".header__section4");
    var portFilms = $(".js--portfolio-films, .js--about-films");
    var portSelect = $(".header__section4--portfolio-selection");
    var filmBack = $(".js--films-back");

        /* films */
        portFilms.click(function(){
            filmPresent();
        });
        
        function filmPresent(){
            document.title = "Reel Films | Films";

            $header.removeClass('header__section4--about animate__animated animate__pulse');
            $header.removeClass('portfolio--films-collection');

            $('.header__section4--portfolio-selection').addClass("disp-none");
            $('.header__section4--portfolio-selection').removeClass("disp-flex");

            $(".js--portfolio").addClass("active-side-nav");
            $header.addClass("portfolio--films-display");
            $header.removeClass("static-bg");
            $header.removeClass("header__section4--home");
            $header.removeClass("header__section4--about");

            $('.js--about').addClass("disp-none");
            $('.js--films').addClass("disp-none");
            $('.header__section4--credentials').addClass("disp-none");

            $('.header__section4--desc').addClass('hidden');
            $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');

            $('.js--home').addClass('inactive-side-nav');
            
            $('.header__section4--portfolio-nav').removeClass("disp-none");
            $('.header__section4--portfolio-nav').addClass("disp-flex");

            document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "FILMS ";

            $('.header__section4--film-present').removeClass("disp-none");
            document.querySelector('.header__section4--portfolio-nav--back').innerHTML = "collections";
            $('.back-icon-spacing').removeClass("ion-ios-arrow-round-back");
            $('.back-icon-spacing').addClass("ion-md-albums");
            $(".header__section4--portfolio-nav--back").addClass("js--films-collections");
            $(".header__section4--portfolio-nav--back").removeClass("js--films-back");
            $(".i-back").addClass("js--films-collection");
            $(".i-back").removeClass("js--films-back");

            $(".header__section4--collection-display").addClass("disp-none");
            $(".selection-photo-lr").removeClass("disp-none");
        }
        
        /* films-collections */

    function filmCollections() {
        document.title = "Reel Films | Collections";
        $(".js--portfolio").addClass("active-side-nav");
        $header.addClass("portfolio--films-collection");
        $header.removeClass("static-bg");
        $header.removeClass("header__section4--home");
        $header.removeClass("header__section4--about");
        $header.removeClass("portfolio--films-display");

        $('.js--about').addClass("disp-none");
        $('.js--films').addClass("disp-none");
        $('.header__section4--credentials').addClass("disp-none");

        $('.header__section4--desc').addClass('hidden');
        $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');

        $('.js--home').addClass('inactive-side-nav');
        
        $('.header__section4--portfolio-nav').removeClass("disp-none");
        $('.header__section4--portfolio-nav').addClass("disp-flex");

        portSelect.addClass("disp-none");
        portSelect.removeClass("disp-flex");
        $('.header__section4--film-present').addClass("disp-none");

        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "FILMS / COLLECTIONS";

        document.querySelector('.header__section4--portfolio-nav--back').innerHTML = "back";
        $('.back-icon-spacing').addClass("ion-ios-arrow-round-back");
        $('.back-icon-spacing').removeClass("ion-md-albums");
        $(".header__section4--portfolio-nav--back").removeClass("js--films-collections");
        $(".header__section4--portfolio-nav--back").addClass("js--films-back");
        $(".i-back").removeClass("js--films-collection");
        $(".i-back").addClass("js--films-back");

        $(".header__section4--collection-display").removeClass("disp-none");
        $(".selection-photo-lr").addClass("disp-none");

        document.getElementById('background').style.backgroundImage = '';
    }

    filmBack.click(function(){
        if($header.hasClass("portfolio--films-collection") || $header.hasClass("portfolio--films-display")){
            
            if($(".header__section4--portfolio-nav--back").hasClass("js--films-collections")){
                filmCollections();
            }
            else if($(".header__section4--film-present").hasClass("disp-none")){
                filmPresent();
            }
            else{
                returnPortFolio();
            }
        }   
        else if($header.hasClass("header__section4--portfolio static-bg")){
            homeClick();
        }
    });

    function returnPortFolio(){
        $header.removeClass("portfolio--films-display");
        $header.removeClass("portfolio--films-collection");
        $header.addClass("header__section4--portfolio");
        $header.addClass("static-bg");

        portSelect.removeClass("disp-none");
        portSelect.addClass("disp-flex");

        $('.header__section4--film-present').addClass("disp-none");
        $(".header__section4--collection-display").addClass("disp-none");
        $(".selection-photo-lr").addClass("disp-none");

        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "PORTFOLIOS ";
        document.getElementById('background').style.backgroundImage = '';
    }

    function homeClick(){
        document.title = "Reel Films | Home";

        if($header.hasClass('header__section4--about') || $header.hasClass('header__section4--portfolio') || $header.hasClass('portfolio--films-collection')){
          $header.removeClass('header__section4--about');
          $header.addClass('header__section4--home animate__animated animate__pulse');
          $header.removeClass('header__section4--portfolio');
          $header.removeClass("portfolio--films-collection");
          $header.removeClass("portfolio--films-display");
          $header.removeClass("static-bg");

          $('.js--about').removeClass("disp-none");
          $('.js--films').removeClass("disp-none");
          $('.header__section4--credentials').removeClass("disp-none");
          $('.header__section4--portfolio-nav').addClass("disp-none");
          $('.header__section4--portfolio-nav').removeClass("disp-flex");
          $('.header__section4--portfolio-selection').addClass("disp-none");
          $('.header__section4--portfolio-selection').removeClass("disp-flex");


          $('.header__section4--desc').addClass('hidden');
          $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');
          
          $('.js--about').removeClass('active-nav');
          $('.js--about').addClass('inactive-nav');

          $('.js--home').removeClass('inactive-side-nav');
          $('.js--home').addClass('active-side-nav');
          $('.js--portfolio').removeClass('active-side-nav');

          $header.removeClass('animate__animated animate__pulse');
          $(".header__section4--collection-display").addClass("disp-none");
          $(".selection-photo-lr").addClass("disp-none");

          document.getElementById('background').style.backgroundImage = '';

        }
      }

      var film1 = $(".film--1");
      var film2 = $(".film--2");
      var film3 = $(".film--3");
      var film4 = $(".film--4");

      var imageBackground = ['./webp/films/vlcsnap-2021-03-26-18h30m05s129-min.webp', './webp/films/vlcsnap-2021-03-26-18h30m05s128-min.webp', './webp/films/vlcsnap-2021-03-26-18h30m05s128sss-min.webp', './webp/films/vlcsnap-2021-03-26-18h30m05s130-min.webp']

      film1.click(function(){
        document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/DRrg1gC0fhM?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

        document.getElementById('background').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)),url('+imageBackground[0]+')';

        document.querySelector('.film-title-player').innerHTML = "LARUAN";

        filmPresent();
      });

      film2.click(function(){
        document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/CoBoAi_tAdA?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

        document.getElementById('background').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)),url('+imageBackground[1]+')';

        document.querySelector('.film-title-player').innerHTML = "PROJECT: DAY OFF";

        filmPresent();
      });

      film3.click(function(){
        document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/mbJbR_AV0Fc?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";
        
        document.getElementById('background').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)),url('+imageBackground[2]+')';

        document.querySelector('.film-title-player').innerHTML = "LARAWAN";

        filmPresent();
      });

      film4.click(function(){
        document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/zkbUvTHETds?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

        document.getElementById('background').style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.750), rgba(0, 0, 0, 0.750)),url('+imageBackground[3]+')';

        document.querySelector('.film-title-player').innerHTML = "INTRA &mdash; SANTIAGO";

        filmPresent();
      });
    
});