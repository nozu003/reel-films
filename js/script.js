$(document).ready(function(){

    var mPanel = $(".main-panel");
    var mPanelCont = $(".main-panel-container")

    if(mPanel.hasClass("init-scale")){
        setTimeout(function(){
            mPanel.removeClass("init-scale");
            mPanel.addClass("def-scale");
        }
        , 1000
        );
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
});