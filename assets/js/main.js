$(document).ready(function(){
    "use strict";

    //sections scroll transition with jQuery Easing plugin
        $('a.page-scroll').click(function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 50)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });


    // Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 51
        });


    //Closes the Responsive Menu on Menu Item Click
        $('.navbar-nav a.page-scroll').click(function(){
            $('.navbar-collapse').removeClass('in');
            $(".navbar-toggle").toggleClass("is-active");
            $('.navbar-default').removeClass('in');
        });

        $(".navbar-toggle").click(function(){
            $(this).toggleClass("is-active");
            $('.navbar-default').toggleClass('in');
        });


    // Offset for Main Navigation
        $('nav').affix({
            offset: {
                top: 100
            }
        })
});
