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

    $('.owl-carousel').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        // navClass: '.owl-nav',
        items: 1,
        loop: true,
        // navigation: true, 
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
    });
    
});
