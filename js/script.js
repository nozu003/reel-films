$(document).ready(function(){

    var mPanel = $(".main-panel");

    if(mPanel.hasClass("init-scale")){
        setTimeout(function(){
            mPanel.removeClass("init-scale");
            mPanel.addClass("def-scale");
        }
        , 1000
        );
    }
});