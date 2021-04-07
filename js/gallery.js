$(document).ready(function(){

    var $header = $(".header__section4");
    var portGallery = $(".js--portfolio-gallery");

    portGallery.click(function(){

        document.title = "Reel Films | Gallery";

        $header.removeClass('header__section4--about animate__animated animate__pulse');
        $(".header__section4--gallery-display").removeClass("disp-none")

        $('.header__section4--portfolio-selection').addClass("disp-none");
        $('.header__section4--portfolio-selection').removeClass("disp-flex");

        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "GALLERY ";

        $header.addClass("portfolio--gallery-display");
        $header.removeClass("static-bg");
    });

});