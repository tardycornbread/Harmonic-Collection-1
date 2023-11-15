$(document).ready(function() {


    // Code for .dream-1 3D effect
    $('.dream-1-A').each(function() {
        var $img = $(this);
        var speed = 2;
        var dx = speed;
        var dy = speed;
        var x = Math.random() * ($(window).width() - $img.width());
        var y = Math.random() * ($(window).height() - $img.height());

        function animate() {
            var winWidth = $(window).width() - $img.width();
            var winHeight = $(window).height() - $img.height();

            x += dx;
            y += dy;

            if (x <= 0 || x >= winWidth) {
                dx = -dx;
            }
            if (y <= 0 || y >= winHeight) {
                dy = -dy;
            }

            $img.css({
                left: x + 'px',
                top: y + 'px',
                transform: 'rotate3d(' + x/winWidth + ', ' + y/winHeight + ', 0, 45deg)'
            });

            requestAnimationFrame(animate);
        }

        animate();

        $('.dream-1-B').each(function() {
            var $img = $(this);
            var speed = 2;
            var dx = speed;
            var dy = speed;
            var x = Math.random() * ($(window).width() - $img.width());
            var y = Math.random() * ($(window).height() - $img.height());
    
            function animate() {
                var winWidth = $(window).width() - $img.width();
                var winHeight = $(window).height() - $img.height();
    
                x += dx;
                y += dy;
    
                if (x <= 0 || x >= winWidth) {
                    dx = -dx;
                }
                if (y <= 0 || y >= winHeight) {
                    dy = -dy;
                }
    
                $img.css({
                    left: x + 'px',
                    top: y + 'px',
                    transform: 'rotate3d(' + x/winWidth + ', ' + y/winHeight + ', 0, 45deg)'
                });
    
                requestAnimationFrame(animate);
            }
    
            animate();
        });
    });
});


    