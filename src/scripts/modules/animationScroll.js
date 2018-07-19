export default function animationScroll(sectionName, scrollSpeed) {
    $('html, body').animate({
        scrollTop: $(sectionName).offset().top,
    }, scrollSpeed);
}