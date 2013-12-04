/**
 * Author: ard4x
 * Date: 02.07.13
 */
(function($){
    jQuery.fn.textCounter = function(options){

        options = $.extend({
            wrapper : '._jTextCounter',       // Главный блок
            field : '._jTextCounter_field', // Поле, в котором считаем символы
            counter : '._jTextCounter_counter', // Индикатор количества символов
            counter_limit : '._jTextCounter_counter_limit', // индикатор минимального количества символов
            button : '._jTextCounter_button', // Кнопка, которая подтверждает ввод, перехватываем ее нажатия для проверки условий
            limit : 'default' // Ограничение количества символов, По умолчанию брать из data-параметра
        }, options);

        var make = function(){

            var block = $(this),
                field = $(options.field, block),
                counter = $(options.counter, block),
                counter_limit = $(options.counter_limit, block),
                button = $(options.button, block),
                limit = (options.limit == 'default')? $(block).data('limit') : options.limit,

                // Обработчик подсчета текста
                textCount = function(e){
                    var countNumb = $(field).val().length;
                    $(counter).text( countNumb );
                    if (countNumb >= limit ){
                        $(counter).addClass('ok');
                        $(block).removeClass('error');
                    }else{
                        $(counter).removeClass('ok');
                    }
                },

                // Обработчик нажатия кнопки
                buttonCheck = function (e) {
                    if ($(field).val().length < limit) {
                        $(block).addClass('error');
                        e.preventDefault();
                        e.stopImmediatePropagation();
                    }
                };

            $(counter_limit).text(limit);
            $(field).on('keyup', textCount).trigger('keyup');
            $(button).on('click', buttonCheck);
        };

        return $(this).each(make);
        // в итоге, метод responsiveBlock вернет текущий объект jQuery обратно

    };
})(jQuery);