export default function menu(itemName) {
    $(itemName).click(function(e) {
        e.preventDefault();
        const item = $(e.currentTarget);
        const scrollIndex = item.data('scroll');

        //refactoring
        const reqSection = $('section').filter(function(index) {
            return index === scrollIndex;
        });

        $('html, body').animate({
            scrollTop: $(reqSection[0]).offset().top,
        }, 1000);
    });
}