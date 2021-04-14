$(document).ready(function(){

    var mPanel = $(".main-panel");
    var mPanelCont = $(".main-panel-container");
    var films = $(".js--films");
    var gallery = $(".js--gallery");

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
            location.href = "https://nozu003.github.io/reel-films/films";
        });
    }
    
});