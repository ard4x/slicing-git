/**
 * User: ard4x
 * Date: 25.09.13
 */
(function($){
    jQuery.fn.preloaderPic = function(options){

        options = $.extend({
            speed: 40,
            size: 72,
            background: 'rgba(255,255,255,0.7)'
        }, options);


        var init = function (el) {

            var holder = $(el),
                parent = $(holder).parent(),
                parentHeight = $(parent).outerWidth(),
                parentWidth = $(parent).outerHeight(),
                image = 'images/preloader_'+ options.size +'.png',
                preloaderImage = $('<div></div>').appendTo(holder),
                preloaderCSS = {
                    width: options.size,
                    height: options.size,
                    backgroundImage: 'url('+ image +')',
                    position: 'relative',
                    top: (parentHeight - options.size)/2,
                    left: (parentWidth - options.size)/2
                };
            $(holder).css('background', options.background);

            $(holder).width(parentWidth)
                .height(parentHeight );
            $(preloaderImage).css(preloaderCSS);

            return preloaderImage;
        }

        var action = function (el){
            var angle = 0;
            setInterval(function(){
                angle+=30;
                $(el).rotate(angle);
            },options.speed);
        };

        var make = function () {
            //interval = setInterval(function(){action(preloaderImage)}, 1000/ options.speed );
            img = init(this);
            action(img);
        };

        return $(this).each(make);
    };
})(jQuery);