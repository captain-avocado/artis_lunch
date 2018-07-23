export default function burgerMenu(menu) {

    const hamburger = $('.hamburger');
    const menuMain = $(menu);

    hamburger.on('click', function(e) {
        e.preventDefault();
        hamburger.toggleClass('is-active');
        menuMain.toggleClass('active');
    });

    menuMain.children().on('click', function(e) {
        e.preventDefault();
        if (menuMain.hasClass( 'active' )) {
            menuMain.removeClass('active');
            hamburger.removeClass('is-active');
        }
    });

}