$(document).ready(function(){

    function sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
      }

      function scaleLoad(){
        $('.header__section4').addClass('scale-def');
      }
      
      if(document.readyState === 'ready' || document.readyState === 'complete'){
          scaleLoad();
      }
});