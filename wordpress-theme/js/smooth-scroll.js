jQuery(document).ready(function($) {
    'use strict';

    // Smooth scroll for anchor links
    $('a[href*="#"]:not([href="#"])').on('click', function(e) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            
            if (target.length) {
                e.preventDefault();
                var offset = 100; // Offset for fixed header
                
                $('html, body').animate({
                    scrollTop: target.offset().top - offset
                }, 800, 'swing');
                
                // Close mobile menu if open
                $('#primary-menu').removeClass('active');
                $('.menu-toggle').removeClass('active');
                $('body').removeClass('menu-open');
                
                return false;
            }
        }
    });

    // Scroll to top button
    var scrollToTopBtn = $('<button class="scroll-to-top"><i class="fas fa-arrow-up"></i></button>');
    $('body').append(scrollToTopBtn);

    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 300) {
            scrollToTopBtn.addClass('show');
        } else {
            scrollToTopBtn.removeClass('show');
        }
    });

    scrollToTopBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });
});
