jQuery(document).ready(function($) {
    'use strict';

    // Mobile menu toggle
    $('.menu-toggle').on('click', function() {
        $(this).toggleClass('active');
        $('#primary-menu').toggleClass('active');
        $('body').toggleClass('menu-open');
    });

    // Close menu when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('.main-navigation, .menu-toggle').length) {
            $('#primary-menu').removeClass('active');
            $('.menu-toggle').removeClass('active');
            $('body').removeClass('menu-open');
        }
    });

    // Close menu when clicking a link
    $('#primary-menu a').on('click', function() {
        $('#primary-menu').removeClass('active');
        $('.menu-toggle').removeClass('active');
        $('body').removeClass('menu-open');
    });

    // Add submenu toggle for mobile
    $('#primary-menu .menu-item-has-children > a').after('<button class="submenu-toggle"><i class="fas fa-chevron-down"></i></button>');

    $('.submenu-toggle').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).next('.sub-menu').slideToggle();
    });
});
