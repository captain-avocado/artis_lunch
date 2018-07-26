export default function numAnimation(startValue, endValue, blockName,animationDuration) {
    if (endValue >= startValue) {

        const section = $(blockName).closest('.section');
        let blockStatus = true;

        $(window).scroll(function() {
            let scrollEvent = ($(window).scrollTop() + $(window).height()) > section.offset().top;

            if (scrollEvent && blockStatus) {
                blockStatus = false;
                setTimeout(function() {
                    $({numberValue: startValue}).animate({numberValue: endValue}, {
                        duration: animationDuration,
                        easing: 'linear',
                        step: function(val) {
                            $(blockName).html(Math.ceil(val));
                        },
                    });
                }, 500);
                
            }

        });
    }
}