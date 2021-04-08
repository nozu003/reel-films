$(document).ready(function(){

    var $header = $(".header__section4");
    var portGallery = $(".js--portfolio-gallery");

    var photoSelect = ['.js--photo-0', '.js--photo-1', '.js--photo-2', '.js--photo-3', '.js--photo-4', '.js--photo-5', '.js--photo-6'];

    portGallery.click(function(){
        galleryCollection();
    });

    function galleryCollection(){
        document.title = "Reel Films | Gallery";

        $header.removeClass('header__section4--about animate__animated animate__pulse');
        $(".header__section4--gallery-display").removeClass("disp-none")

        $('.header__section4--portfolio-selection').addClass("disp-none");
        $('.header__section4--portfolio-selection').removeClass("disp-flex");

        document.querySelector('.header__section4--portfolio-nav--portfol').innerHTML = "GALLERY ";

        $header.addClass("portfolio--gallery-display");
        $header.removeClass("static-bg");

        $(".header__section4--photo-display").addClass("disp-none");
    }
    $(photoSelect[0]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
    });

    $(".photo-display").click(function(){
        galleryCollection();
    });

});