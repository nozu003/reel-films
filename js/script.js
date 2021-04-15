$(document).ready(function(){

    var mPanel = $(".main-panel");
    var mPanelCont = $(".main-panel-container");
    var films = $(".js--films");
    var gallery = $(".js--gallery");
    const btnLeft = $(".btn-left");
    const btnRight = $(".btn-right");

    if(mPanel.hasClass("init-scale")){
        setTimeout(function(){
            mPanel.removeClass("init-scale");
            mPanel.addClass("def-scale");
        }
        , 1000
        );
        if(document.title == "Reel Films | Home"){
            setTimeout(function(){
                $(".main-panel-navigation").addClass("animate__animated animate__fadeIn animate__slow");
                $(".credentials").addClass("animate__animated animate__fadeIn animate__slow");
                $(".main-panel-navigation").addClass("opac-1");
                $(".credentials").addClass("opac-1");
                $(".main-panel-navigation").removeClass("opac-0");
                $(".credentials").removeClass("opac-0");
            }
            , 500
            );
        }
        
    }

    if(document.title == "Reel Films | About"){
        setTimeout(function(){
            $(".backgroundIMG").addClass("def-scale");
        }
        , 1000
        );
        $(".about-description").removeClass("opac-0");
    }

    if(document.title == "Reel Films | Portfolio"){
        
        films.click(function(){
            location.href = "/films.html";
        });
    }

    if(document.title == "Reel Films | Films"){

        var filmList = ["webp/films/vlcsnap-2021-03-26-18h30m05s128-min.webp", "webp/films/vlcsnap-2021-03-26-18h30m05s128sss-min.webp", "webp/films//vlcsnap-2021-03-26-18h30m05s129-min.webp","webp/films/vlcsnap-2021-03-26-18h30m05s130-min.webp"];

        var index = 0;

        const img1 = document.getElementById("img-display-1");
        const img2 = document.getElementById("img-display-2");
        const img3 = document.getElementById("img-display-3");

        btnLeft.click(function(){
            
            index = 3;

            img1.src = filmList[index--];
            img2.src = filmList[index--];
            img3.src = filmList[index--];
            
            console.log(index);

        });

        btnRight.click(function(){
            
            img1.src = filmList[index++];
            img2.src = filmList[index++];
            img3.src = filmList[index++];

        });

    }
    
});