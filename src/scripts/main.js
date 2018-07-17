// подключение самописных модулей
// import animateScroll from './modules/animateScroll';
// animateScroll(1000,2000);
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

// подключение овл-карусели
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

$('#more').click(function() { 
    $('html, body').animate({
        scrollTop: $('.section_adv').offset().top,
    }, 1000);
});

$('#order').click(function() { 
    $('html, body').animate({
        scrollTop: $('.section_form').offset().top,
    }, 1000);
});


$(document).ready(function(){

    $('.owl-history').owlCarousel({
 
        dots: false,
        // nav: true,
        items: 1,
        loop: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navContainer: '#owl-nav-history',
        // navClass: ['.owl-prev', '.owl-next'],
    });

    $('.owl-next').click(function() {
        $('.owl-history').trigger('next.owl.carousel', [750]);
    });
    $('.owl-prev').click(function() {
        $('.owl-history').trigger('prev.owl.carousel', [750]);
    });


    $('.owl-menu').owlCarousel({
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: true,
        dotsContainer:'#owl-dots',
        items: 1,
        loop: false,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    });
    $('.owl-dot').click(function (e) {
        e.preventDefault();
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 300]);
    });
    
});
