import numAnimation from './modules/numAnimation';
import menu from './modules/menu';
import burgerMenu from './modules/burgerMenu';
import animationScroll from './modules/animationScroll';

import googleMaps from 'google-maps';
import {initMap} from './modules/_initMap';
import _formValidation from './modules/_formValidation';
import _owl from './modules/_owl';

import svgUseIt from 'svg-use-it';

document.addEventListener('DOMContentLoaded', function() {
    svgUseIt();
});

$(document).ready(function(){

    numAnimation(0, 100, '#clients', 1000);
    numAnimation(0, 1000, '#dinners', 1000);
    numAnimation(0, 40, '#workers', 1000);

    menu('.menu__item');
    burgerMenu('.menu');

    $('#more').click(function(e) {
        e.preventDefault(); 
        animationScroll('.section_adv', 1000);
    });

    $('#order').click(function(e) { 
        e.preventDefault(); 
        animationScroll('.section_form', 1000);
    });

    $('.footer__logo').click(function(e) {
        e.preventDefault();
        animationScroll('.section_main', 3000);
    });

    _formValidation();

    _owl();

    googleMaps.KEY = 'AIzaSyDb-hSAeXf2JnxUCPnrIL8W54NMBW8rCRs';
    googleMaps.load(initMap);

});
