jQuery(function ($) {
    'use strict';

    /* ---------------------------------------------------------------------------------------------*/
    /* ---     Fixed Header      -------------------------------------------------------------------*/
    /* ---------------------------------------------------------------------------------------------*/
    $(window).on('scroll', function(){
        function fixedHeader() {
            var headerTopBar = $('.top-bar').outerHeight();
            var headerTopSpace = $('.header .logo-area').outerHeight();
            var headerElement = $('.header .site-navigation');

            if ($(window).scrollTop() > headerTopBar + headerTopSpace) {
                $(headerElement).addClass('navbar-fixed');
                $('.header').css('margin-bottom', headerElement.outerHeight());
            } else {
                $(headerElement).removeClass('navbar-fixed');
                $('.header').css('margin-bottom', 0);
            }
        }
        fixedHeader();
    });

    $(document).ready(function () {
        function navbarDropdown() {
            if ($(window).width() < 992) {
                $('.site-navigation .dropdown-toggle').on('click', function () {
                    $(this).siblings('.dropdown-menu').animate({
                        height: 'toggle'
                    }, 300);
                });

                var navbarHeight = $('.site-navigation').outerHeight();
                $('.site-navigation .navbar-collapse').css('max-height', 'calc(100vh - ' + navbarHeight + 'px)'); 
            }
        }
        navbarDropdown();
        function backToTop() {
            $('#back-to-top').on('click', function () {
                $('#back-to-top').tooltip('hide');
                $('body,html').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });
        }
        backToTop();

        function bannerCarouselOne() {
            $('.banner-carousel.banner-carousel-1').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                dots: true,
                speed: 600,
                arrows: false,
                
            });
            $('.banner-carousel.banner-carousel-1').slickAnimation();
        }
        bannerCarouselOne();
    });
});