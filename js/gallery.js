$(document).ready(function(){

    var $header = $(".header__section4");
    var portGallery = $(".js--portfolio-gallery");

    var photoSelect = ['.js--photo-0', '.js--photo-1', '.js--photo-2', '.js--photo-3', '.js--photo-4', '.js--photo-5', '.js--photo-6'];

    var selectedPhoto = ["webp/gallery/IMG_1397-min.webp", "webp/gallery/IMG_1445-min.webp", "webp/gallery/IMG_7300-min.webp", "webp/gallery/IMG_9277-min.webp", "webp/gallery/IMG_0938-min.webp", "webp/gallery/IMG_7270-min.webp", "webp/gallery/IMG_8432-min.webp"];

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
        document.getElementById("displayPhoto").src = selectedPhoto[0];
        photoPortrait();
    });

    $(photoSelect[1]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[1];
        photoPortrait();
    });

    $(photoSelect[2]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[2];
        photoPortrait();
    });

    $(photoSelect[3]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[3];
        photoPortrait();
    });

    $(photoSelect[4]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[4];
        photoLandscape();
    });

    $(photoSelect[5]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[5];
        photoLandscape2();
    });

    $(photoSelect[6]).click(function(){
        $(".header__section4--photo-display").removeClass("disp-none");
        document.getElementById("displayPhoto").src = selectedPhoto[6];
        photoLandscape2();
    });

    $(".photo-display").click(function(){
        galleryCollection();
    });

    function photoPortrait() {
    document.getElementById("displayPhoto").style.position = "absolute";
    document.getElementById("displayPhoto").style.transform = "translateY(4%)";
    document.getElementById("displayPhoto").style.left = "26.8%";
    document.getElementById("displayPhoto").style.width = "40%";
    }

    function photoLandscape() {
    document.getElementById("displayPhoto").style.position = "absolute";
    document.getElementById("displayPhoto").style.transform = "translateY(14%)";
    document.getElementById("displayPhoto").style.left = "19%";
    document.getElementById("displayPhoto").style.width = "55%";
    }

    function photoLandscape2() {
        document.getElementById("displayPhoto").style.position = "absolute";
        document.getElementById("displayPhoto").style.transform = "translateY(21.5%)";
        document.getElementById("displayPhoto").style.left = "19%";
        document.getElementById("displayPhoto").style.width = "55%";
        }
});