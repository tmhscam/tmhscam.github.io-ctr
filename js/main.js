"use strict";

//Document Ready
jQuery(document).ready(function($) {
    
    //Finished loader
    Pace.on("done", function() {
        jQuery(".cover").addClass('animated fadeOutRight').fadeOut(1000);
    });

    //WOW Animation init 
    new WOW().init();

});

//Window Load
jQuery(window).load(function($) {
    
    /*Init Portfolio*/
    var container = jQuery("#work-grid");
    if (container.length > 0) {
        container.isotope({
            layoutMode: 'masonry',
            transitionDuration: '0.7s',
            columnWidth: 60
        });
    };
    
});