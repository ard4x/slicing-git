/**
 * User: ard4x
 * Date: 25.09.13
 */
(function($){
    jQuery.fn.preloaderPic = function(options){

        options = $.extend({
            speed: 40,
            size: 72,
            top: 'default',
            background: 'rgba(255,255,255,0.7)',
            imgPath: '/js/preloader/images/', // path to preloader images
            parentPosition: 'relative'
        }, options);


        var init = function (el) {

            var holder = $(el),
                parent = $(holder).parent(),
                parentWidth = $(parent).outerWidth(),
                parentHeight = $(parent).outerHeight(),
                image = options.imgPath + '/preloader_'+ options.size +'.png',
                preloaderImage = $('<div></div>').appendTo(holder),
                preloaderCSS = {
                    width: options.size,
                    height: options.size,
                    backgroundImage: 'url('+ image +')',
                    position: 'relative',
                    top: (options.top == 'default')? (parentHeight - options.size)/2 : options.top,
                    left: (parentWidth - options.size)/2
                };
            $(holder).css('background', options.background);

            $(holder).width(parentWidth)
                .height(parentHeight)
                .css({
                    'position':'absolute',
                    'left':0,
                    'top': 0,
                    'z-index': 333
                });
            $(preloaderImage).css(preloaderCSS);
            $(parent).css('position', 'relative');

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
            var img = init(this);
            action(img);
        };

        return $(this).each(make);
    };
})(jQuery);