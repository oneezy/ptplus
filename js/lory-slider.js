/* Media Queries 
**********************************************************************/
const mobile  = "(min-width: 0) and (max-width: 768px)";
const tablet  = "(min-width: 769px) and (max-width: 1024px)";
const desktop = "(min-width: 1025px)";

/* Mobile
*************************************/
enquire.register(mobile, {

  match : function() {
    
    function slider() {
      var slider = document.querySelector('.js-slider');
      lory(slider, {
        infinite: 1,
        initialIndex: 1,
        enableMouseEvents: true,
        classNameFrame: 'js-slider__frame',
        classNameSlideContainer: 'js-slider__slides',
        classNamePrevCtrl: 'js-slider__prev',
        classNameNextCtrl: 'js-slider__next',
      });
    }
    
    function sliderAuto() {
      var btnNext = document.querySelector('.js-slider__next');
      if (btnNext !== 'undefined') {
        setInterval(function () { 
          btnNext.click();
        }, 5000);
      }
    }

    
    document.addEventListener('DOMContentLoaded', function() {
      slider();
      sliderAuto();
    });


  },

  unmatch : function() { 

    document.removeEventListener('DOMContentLoaded', function() {
      slider();
    });
  },

  setup : function() { 
  },

  destroy : function() { 
  },

  deferSetup : true
});