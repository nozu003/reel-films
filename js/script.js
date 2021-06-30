$(document).ready(function(){

    var mPanel = $(".main-panel");
    var mPanelCont = $(".main-panel-container");
    var films = $(".js--films");
    var gallery = $(".js--gallery");
    const btnLeft = $(".btn-left");
    const btnRight = $(".btn-right");

    const filmList = ["../webp/films/vlcsnap-2021-03-26-18h30m05s128-min.webp", "../webp/films/vlcsnap-2021-03-26-18h30m05s128sss-min.webp", "../webp/films//vlcsnap-2021-03-26-18h30m05s129-min.webp","../webp/films/vlcsnap-2021-03-26-18h30m05s130-min.webp"];

    const filmBGBlur = ["../webp/blurred/blurred-bg1-min.webp", "../webp/blurred/blurred-bg2-min.webp", "../webp/blurred/blurred-bg3-min.webp", "../webp/blurred/blurred-bg4-min.webp"];

    const filmTitle = document.querySelector(".film-title");
    const filmBG = document.getElementById("background");

    const img1 = $(".selection--1");
    const img2 = $(".selection--2");
    const img3 = $(".selection--3");

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
            location.href = "/films/intramuros.html";
        });
        gallery.click(function(){
            location.href = "/gallery.html";
        });
    }

    if(document.title == "Reel Films | Films"){

        var index = 0;

        btnLeft.click(function(){
            alert("This is a button.");
        });

        btnRight.click(function(){
            alert("This is a button.");
        });

        if(filmTitle.innerHTML == "LARUAN"){
            filmBG.style.backgroundImage = 'url('+filmBGBlur[1]+')';

            img1.click(function(){
                //day-off
                location.href = "/films/day-off.html";
            });

            img2.click(function(){
                //larawan
                location.href = "/films/larawan.html";
            });
            
            img3.click(function(){
                //intra
                location.href = "/films/intramuros.html"; 
            });
        }
        if(filmTitle.innerHTML == "PROJECT: DAY OFF"){
            filmBG.style.backgroundImage = 'url('+filmBGBlur[3]+')';

            img1.click(function(){
                //intra
                location.href = "/films/intramuros.html";
            });

            img2.click(function(){
                //larawan
                location.href = "/films/larawan.html";
            });
            
            img3.click(function(){
                //laruan
                location.href = "/films/laruan.html"; 
            });
        }
        if(filmTitle.innerHTML == "LARAWAN"){
            filmBG.style.backgroundImage = 'url('+filmBGBlur[2]+')';

            img1.click(function(){
                //day-off
                location.href = "/films/day-off.html";
            });

            img2.click(function(){
                //intra
                location.href = "/films/intramuros.html";
            });
            
            img3.click(function(){
                //laruan
                location.href = "/films/laruan.html";
            });
        }
        if(filmTitle.innerHTML == "INTRA — SANTIAGO"){
            filmBG.style.backgroundImage = 'url('+filmBGBlur[0]+')';
    
            img1.click(function(){
                //day-off
                location.href = "/films/day-off.html";
            });
    
            img2.click(function(){
                //larawan
                location.href = "/films/larawan.html";
            });
            
            img3.click(function(){
                //laruan
                location.href = "/films/laruan.html";
            });
        }
        

    }

    if(document.title == "Reel Films | Collections"){
        const film1 = $(".film--1"); //laruan
        const film2 = $(".film--2"); //day-off
        const film3 = $(".film--3"); //larawan
        const film4 = $(".film--4"); //intra

        film1.click(function(){
            location.href = "/films/laruan.html";
        });
        film2.click(function(){
            location.href = "/films/day-off.html";
        });
        film3.click(function(){
            location.href = "/films/larawan.html";
        });
        film4.click(function(){
            location.href = "/films/intramuros.html";
        });
    }
    

});