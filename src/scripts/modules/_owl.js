import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import 'owl.carousel';

export default function _owl() {
    //
    $('.owl-clients').owlCarousel({
        autoplay: true,
        dots: false,
        margin: 30,
        items: 3,
        loop: true,
        slideSpeed: 300,
        paginationSpeed: 400,
    });

    //
    $('.owl-history').owlCarousel({ 
        dots: false,
        items: 1,
        loop: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        navContainer: '#owl-nav-history',
    });
    $('.owl-next').click(function() {
        $('.owl-history').trigger('next.owl.carousel', [750]);
    });
    $('.owl-prev').click(function() {
        $('.owl-history').trigger('prev.owl.carousel', [750]);
    });

    //
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
}