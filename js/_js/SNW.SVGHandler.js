(function($, SNW, window) {

    // if Modernizr can't find SVG support, then swap each SVG source with `data-fallback` source

    'use strict';

    function _swapImgSource() {
        $("img[src$='.svg']").each( function() {
            if ( false === $(this).is('[data-fallback]') ) {
                console.log('Error: fallback image source not specified');
                return;
            } else {
                var fallback = $(this).data("fallback");
                $(this).attr( "src", fallback );
            }
        });
    }

    function fInit() {
        if ( ! window.Modernizr ) {
            console.log("Error: JS module dependency, Modernizr not found");
            return;
        }
        if ( ! Modernizr.svg ) {
            _swapImgSource();
        }
    }

    SNW.SVGHandler = {
        init : fInit
    };

	return SNW;

})(jQuery, SNW || {}, window);

