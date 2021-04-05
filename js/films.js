$(document).ready(function(){

    var $header = $(".header__section4");
    var portFilms = $(".js--portfolio-films, .js--about-films");
    var portSelect = $(".header__section4--portfolio-selection");
    var filmBack = $(".js--films-back");

        portFilms.click(function(){
            filmCollections();
        });
        
    function filmCollections() {
        $header.addClass("portfolio--films-collection");
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

        portSelect.addClass("disp-none");
        portSelect.removeClass("disp-flex");
        
        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "FILMS / COLLECTIONS";
    }

    filmBack.click(function(){
        returnPortFolio();
    });

    function returnPortFolio(){
        $header.removeClass("portfolio--films-collection");
        $header.addClass("static-bg");

        portSelect.removeClass("disp-none");
        portSelect.addClass("disp-flex");

        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "PORTFOLIOS ";
    }
});
