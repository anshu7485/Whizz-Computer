(function ($) {
    "use strict";
    // Initialize AOS if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
        });
    }
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                // Use Bootstrap's dropdown API if available; fallback to trigger click
                if ($.fn.dropdown) {
                    $('.navbar .dropdown').on('mouseover', function () {
                        var $toggle = $('.dropdown-toggle', this);
                        // show only if not already shown
                        if (!$toggle.parent().hasClass('show')) {
                            $toggle.dropdown('show');
                        }
                    }).on('mouseout', function () {
                        var $toggle = $('.dropdown-toggle', this);
                        if ($toggle.parent().hasClass('show')) {
                            $toggle.dropdown('hide');
                        }
                    });
                } else {
                    $('.navbar .dropdown').on('mouseover', function () {
                        $('.dropdown-toggle', this).trigger('click');
                    }).on('mouseout', function () {
                        $('.dropdown-toggle', this).trigger('click').blur();
                    });
                }
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

