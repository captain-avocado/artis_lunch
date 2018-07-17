// подключение самописных модулей
// import search from './modules/search';
// search();

import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

// подключение овл-карусели
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';

import 'owl.carousel';
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
