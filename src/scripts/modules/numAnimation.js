export default function numAnimation(startValue, endValue, blockName, animationDuration) {
    if (endValue >= startValue) {

        const targetBlock = $(blockName);
        let blockStatus = true;

        $(window).scroll(function() {
            let scrollEvent = ($(window).scrollTop() + $(window).height()) > targetBlock.offset().top;

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