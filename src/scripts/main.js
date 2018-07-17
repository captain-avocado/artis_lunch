// подключение самописных модулей
// import animateScroll from './modules/animateScroll';
// animateScroll(1000,2000);

// подключение овл-карусели
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';


import googleMaps from 'google-maps';
import {initMap} from './modules/initMap';
googleMaps.KEY = 'AIzaSyDb-hSAeXf2JnxUCPnrIL8W54NMBW8rCRs';
googleMaps.load(initMap);


import numAnimation from './modules/numAnimation';
numAnimation(0, 220, '#clients', 3000);
numAnimation(0, 1300, '#dinners', 3000);
numAnimation(0, 65, '#workers', 3000);


// $({numberValue: 0}).animate({numberValue: 1000}, {
//     duration: 5000, // Скорость анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд
//     easing: 'linear',
//     step: function(val) {
//         $('.price').html(Math.ceil(val)); // Блок, где необходимо сделать анимацию
//     },
// });


// $('.menu__item').click(function(e) {
//     e.preventDefault();
//     const item = e.currentTarget;
//     const scrollIndex = item.data('scroll');
//     const reqSection = $('section').filter(function(index) {
//         return index === scrollIndex;
//     });
//     console.log(reqSection);

//     // $('html, body').animate({
//     //     scrollTop: $('.section_adv').offset().top,
//     // }, 1000);
// });


$('#more').click(function(e) {
    e.preventDefault(); 
    $('html, body').animate({
        scrollTop: $('.section_adv').offset().top,
    }, 1000);
});

$('#order').click(function(e) { 
    e.preventDefault(); 
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
        $('.owl-carousel').trigger('to.owl.carousel', [$(this).index(), 500]);
    });
    
});
