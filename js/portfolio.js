$(document).ready(function(){

    var $header = $(".header__section4");
    var portfolio = $('.js--portfolio');

    portfolio.click(function(){
        portfoltioClick();
    });

    function portfoltioClick(){

        document.title = "Reel Films | Portfolios";

        if($header.hasClass("header__section4--home") || $header.hasClass("header__section4--about") || $header.hasClass("portfolio--films-display") || $header.hasClass("portfolio--gallery-display")){
            
            $header.removeClass("header__section4--home header__section4--about animate__animated animate__pulse animate__slow");
            $(".header__section4--film-present").addClass("disp-none");
            $header.addClass("header__section4--portfolio static-bg");
            $header.removeClass("portfolio--films-collection");
            $header.removeClass("portfolio--films-display");
            
            $('.header__section4--portfolio-nav').removeClass("disp-none");
            $('.header__section4--portfolio-selection').removeClass("disp-none");
            $('.header__section4--portfolio-selection').addClass("disp-flex");
            $('.header__section4--portfolio-nav').addClass("disp-flex");

            $('.js--about').addClass("disp-none");
            $('.js--films').addClass("disp-none");
            $('.header__section4--credentials').addClass("disp-none");

            $('.header__section4--desc').addClass('hidden');
            $('.header__section4--desc').removeClass('visible animate__animated animate__fadeIn');

            $('.js--home').addClass('inactive-side-nav');
            $('.js--home').removeClass('active-side-nav');
            
            $('.js--portfolio').addClass('active-side-nav');

            document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "PORTFOLIOS ";

            document.querySelector('.header__section4--portfolio-nav--back').innerHTML = "back";
            $('.back-icon-spacing').addClass("ion-ios-arrow-round-back");
            $('.back-icon-spacing').removeClass("ion-md-albums");
            $(".header__section4--portfolio-nav--back").removeClass("js--films-collections");
            $(".header__section4--portfolio-nav--back").addClass("js--films-back");
            $(".i-back").removeClass("js--films-collection");
            $(".i-back").addClass("js--films-back");

            $(".header__section4--collection-display").addClass("disp-none");
            $(".selection-photo-lr").addClass("disp-none");

            document.getElementById('background').style.backgroundImage = '';

            document.getElementById("videoPlayer").src = "https://www.youtube-nocookie.com/embed/zkbUvTHETds?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&theme=light&color=white&disablekb=1";

            document.querySelector('.film-title-player').innerHTML = "INTRA &mdash; SANTIAGO";

            $(".header__section4--gallery-display").addClass("disp-none")
            
            $(".header__section4--photo-display").addClass("disp-none");

            $header.addClass("animate__animated animate__fadeIn animate__slow");
            setTimeout(function(){
                removeFadeIn();
            }
            ,1500
            );
        }
    }

    function removeFadeIn(){
        $header.removeClass("animate__animated animate__fadeIn animate__slow");
    }

});