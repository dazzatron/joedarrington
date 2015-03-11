(function () {

    var circles = 20;
    var a = circles;

    while (a--) {
        $('.circle').eq(0).clone().appendTo('body');
    }

    var width = $('.circle').eq(0).outerWidth();
    var height = $('.circle').eq(0).outerHeight();;
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var data = [];
    var i = circles;

    // get original positions
    while (i--) {
        data[i] = [];
        //data[i].width;
        data[i].left = $('.circle').eq(i).offset().left;
        data[i].top = $('.circle').eq(i).offset().top;
        data[i].x = Math.random() * 5;
        data[i].y = Math.random() * 5;
        data[i].rot = Math.random() * 50;
        data[i].rotSpeed = Math.random() * 5;

    };

    function step() {

        i = circles;

        while (i--) {

            data[i].left += data[i].x;
            data[i].top += data[i].y;
            data[i].rot += data[i].rotSpeed;

            // move
            $('.circle').eq(i).css({
                transform: 'translate3d(' + data[i].left + 'px, ' + data[i].top + 'px, 0) rotate(' + data[i].rot + 'deg)'
            });

            // check sides
            if (data[i].left + width > windowWidth || data[i].left < 0) {
                data[i].x *= -1;
            }

            // check top/bottom
            if (data[i].top + height > windowHeight || data[i].top < 0) {
                data[i].y *= -1;
            }

            // check others
            
            a = circles;

            while (a--) {
                // check distance from



            }

        }

        window.requestAnimationFrame(step);

    }

    window.requestAnimationFrame(step);

})();