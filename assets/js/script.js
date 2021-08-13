/* (function($) {
    'use strict' */


/*
========================================
    Preloader
========================================
*/
/* $(window).on('load', function() {
    $('#preloader').delay(200).fadeOut('slow');
    $('body').delay(200).css({
        'overflow': 'visible'
    });
}); */

/* ===============================================
        AddClass menu js
   ===============================================
*/

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $(".menu-area").addClass("shrinkheader");
    } else {
        $(".menu-area").removeClass("shrinkheader");
    }
});



/* 
=====================================================
    Start active menu
======================================================
*/

var sections = jQuery('section'),
    nav = jQuery('nav'),
    nav_height = nav.outerHeight();

jQuery(window).on('scroll', function() {
    var cur_pos = jQuery(this).scrollTop();

    sections.each(function() {
        var top = jQuery(this).offset().top - nav_height,
            bottom = top + jQuery(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            jQuery(this).addClass('active');
            nav.find('a[href="#' + jQuery(this).attr('id') + '"]').addClass('active');
        }
    });
});


/*
========================================
Search Nav
========================================
*/

if ($('.search-toggler').length) {
    $('.search-toggler').on('click', function() {
        $('.search-contents').toggleClass('show');
        return false;
    });
    $('.close-search').on('click', function() {
        $('.search-contents').removeClass('show');
        return false;
    });

}


/* 
========================================
    slick slide
========================================
*/

/* Banner Slider */
function mainSlider() {
    var BasicSlider = $('.banner-slider');
    BasicSlider.on('init', function(e, slick) {
        var $firstAnimatingElements = $('.single-slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);
    });
    BasicSlider.on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('.single-slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);
    });
    BasicSlider.slick({
        autoplay: false,
        autoplaySpeed: 10000,
        dots: false,
        fade: true,
        arrows: true,
        prevArrow: '<i class="las la-angle-left"></i>',
        nextArrow: '<i class="las la-angle-right"></i>',
        responsive: [
            { breakpoint: 767, settings: { dots: false, arrows: false } }
        ]
    });

    function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
}
mainSlider();

/* Testimonial */

$('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: true,
    centerMode: false,
    nextArrow: '<i class="las la-angle-double-right"></i>',
    prevArrow: '<i class="las la-angle-double-left"></i>',
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});

/* Blogs */

$('.blog-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    dots: true,
    arrows: false,
    nextArrow: '<i class="las la-angle-double-right"></i>',
    prevArrow: '<i class="las la-angle-double-left"></i>',
    focusOnSelect: false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                arrows: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
});


/*
========================================
    Select
========================================
*/

$(document).ready(function() {
    $('select').niceSelect();
});
/*
========================================
    Counter-Up
========================================
*/

if ($('.counts').length) {
    $('.counts').countUp({
        'time': 2000,
        'delay': 30
    });
};


/*
========================================
    Parallax
========================================
*/

jarallax(document.querySelectorAll('.parallax'), {
    speed: 0.5,
});


/* 
========================================
    Magnific popup
========================================
*/

/* $('.open-videos').magnificPopup({
    type: 'iframe'
}); */

/* gallery */
$('.images-gallery').magnificPopup({
    type: 'image',
    gallery: {
        enabled: true
    }
});


/* 
========================================
    portfolio filter
========================================
*/

if ($('.images-loads').length) {
    $('.images-loads').imagesLoaded(function() {
        var $grid = $('.work-grid').isotope({
            itemSelector: '.grid-item',
        });
        // filter items on button click
        $('.work-button button').on('click', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        //for filter button active class
        $('.work-button button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });
    });
};



/*
========================================
Scroll to top
========================================
*/

/* function scrollToTop() {
    var $scrollUp = $('#scroll-top'),
        $lastScrollTop = 0,
        $window = $(window);

    $window.on('scroll', function() {
        var st = $(this).scrollTop();
        if (st > $lastScrollTop) {
            $scrollUp.removeClass('show');
        } else {
            if ($window.scrollTop() > 200) {
                $scrollUp.addClass('show');
            } else {
                $scrollUp.removeClass('show');
            }
        }
        $lastScrollTop = st;
    });

    $scrollUp.on('click', function(evt) {
        $('html, body').animate({ scrollTop: 0 }, 600);
        evt.preventDefault();
    });
}
scrollToTop(); */

/*
========================================
    Hover Effects
========================================
*/

$(function() {
    $('.hover-div').each(function() { $(this).hoverdir(); });
});


/* 
========================================
    Wow Animation
========================================
*/

new WOW().init();



/* 
========================================
    console error Avoid
========================================
*/
// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


/* })(jQuery); */