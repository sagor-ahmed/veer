/***************************************************

==================== JS INDEX ======================

****************************************************

01. Sticky Js

02.  Scroll To Top Js

03. Temoigna SLider Active Js

04. Post Slider Active Js

05. Temoigna Slider Active Js

06. Data-Background Js

****************************************************/


(function ($) {
    "use strict";



    ////////////////////////////////////////////////////

    // 01. Scroll To Top Js

    function smoothSctollTop() {

        $('.smooth-scroll a').on('click', function (event) {

            var target = $(this.getAttribute('href'));

            if (target.length) {

                event.preventDefault();

                $('html, body').stop().animate({

                    scrollTop: target.offset().top - 0

                }, 1500);

            }

        });

    }

    smoothSctollTop();



    // Show or hide the sticky footer button

    $(window).on('scroll', function (event) {

        if ($(this).scrollTop() > 600) {

            $('#scroll').fadeIn(200)

        } else {

            $('#scroll').fadeOut(200)

        }

    });



    //Animate the scroll to yop

    $('#scroll').on('click', function (event) {

        event.preventDefault();



        $('html, body').animate({

            scrollTop: 0,

        }, 1500);

    });



    ////////////////////////////////////////////////////

    // 02. Sticky Js

    $(window).on('scroll', function () {

        var scroll = $(window).scrollTop();

        if (scroll < 245) {

            $("#header-sticky").removeClass("sticky");

        } else {

            $("#header-sticky").addClass("sticky");

        }
    });

    // Toggel Menu
    $('#menu-toggle').click(function (e) {
        e.preventDefault();

        $('.nav-menu').slideToggle();

    });

    ////////////////////////////////////////////////////

    // 03. Post Slider Js

    $('.post-slider-active').slick({
        arrows: true,
        centerPadding: '0px',
        prevArrow: '<button type="button" ><i class="fas fa-chevron-left"> </i></button>',
        nextArrow: '<button type="button" ><i class="fas fa-chevron-right"> </i></button>',
        dots: false,
        infinite: true,
        asNavFor: '.slider-active',
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        /*       autoplay: true,
               autoplaySpeed: 2500,*/
        responsive: [
/*
            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},*/

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			},

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                }

			}

		]

    });


    ////////////////////////////////////////////////////

    // 03. Temoigna Slider Js

    $('.temoigna-slider-active').slick({

        centerMode: true,

        centerPadding: '0px',

        dots: false,

        arrows: true,

        infinite: true,

        speed: 700,

        prevArrow: '<button type="button" ><i class="fas fa-chevron-down"></i></button>',

        nextArrow: '<button type="button" ><i class=""> </i></button>',

        slidesToShow: 1,

        slidesToScroll: 1,

        autoplay: false,
        
        autoplaySpeed: 1000,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			},

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			}

		]

    });


    ////////////////////////////////////////////////////

    // 04. Flux Slider Js

    $('.flux-slider-active').slick({

        centerMode: true,

        centerPadding: '0px',

        dots: false,

        arrows: true,

        infinite: true,

        speed: 700,

        slidesToShow: 4,

        slidesToScroll: 1,
        prevArrow: '<button type="button"><i class="fas fa-chevron-circle-left"></i></button>',

        nextArrow: '<button type="button" ><i class="fas fa-chevron-circle-right"></i></button>',

        autoplay: false,

        responsive: [

            {

                breakpoint: 1024,

                settings: {

                    slidesToShow: 3,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 991,

                settings: {

                    slidesToShow: 2,

                    slidesToScroll: 1,

                    infinite: true

                }

			},

            {

                breakpoint: 767,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			},

            {

                breakpoint: 576,

                settings: {

                    slidesToShow: 1,

                    slidesToScroll: 1

                }

			}

		]

    });


    ////////////////////////////////////////////////////
    //data background
    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + " ) ")
    });


    // mainSlider
    function mainSlider() {
        var BasicSlider = $('.slider-active');
        BasicSlider.on('init', function (e, slick) {
            var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
            doAnimations($firstAnimatingElements);
        });
        BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
            var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
            doAnimations($animatingElements);
        });
        BasicSlider.slick({
            autoplay: false,
            autoplaySpeed: 10000,
            dots: false,
            fade: true,
            arrows: false,
            cssEase: 'linear',
            asNavFor: '.post-slider-active',
            prevArrow: '<button type="button" class="slick-prev"> <i class="fas fa-arrow-left"></i> </button> ',
            nextArrow: '<button type="button" class="slick-next"> <i class="fas fa-arrow-right"></i> </button> ',
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        dots: false,
                        arrows: true
                    }
                }
		]
        });

        function doAnimations(elements) {
            var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            elements.each(function () {
                var $this = $(this);
                var $animationDelay = $this.data('delay');
                var $animationType = 'animated ' + $this.data('animation');
                $this.css({
                    'animation-delay': $animationDelay,
                    '-webkit-animation-delay': $animationDelay
                });
                $this.addClass($animationType).one(animationEndEvents, function () {
                    $this.removeClass($animationType);
                });
            });
        }
    }
    mainSlider();


})(jQuery);
