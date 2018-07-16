
// подключение самописных модулей
// import search from './modules/search';
// search();

// подключение файлов jquery скриптов как модулей
import 'ion-rangeslider/css/ion.rangeSlider.css';
import 'ion-rangeslider/css/ion.rangeSlider.skinHTML5.css';
import 'ion-rangeslider/js/ion.rangeSlider.min.js';

// подключение овл-карусели
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import 'owl.carousel';

//активация горизонтального слайдера
$('#price-slider').ionRangeSlider({
    min: 0,
    max: 20000,
    from: 1000,
    to: 9000,
    type: 'int',
    grid_margin: false,
    hide_min_max: true,
    hide_from_to: true,
});
