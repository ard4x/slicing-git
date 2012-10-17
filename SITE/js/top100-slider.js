function monthSlider(slider) // id слайдера
    {   
        var sHeader= $("[data-id=sliderHeader]", slider); // заголовок для слайдера
        var sFrame = $("[data-id=sliderFrame]", slider); // фрейм для слайдера
        var sField = $("[data-id=sliderContainer]", slider); // поле со слайдами (контейнер)
        var sSlide = $("[data-id=sliderItem]", slider); // набор слайдов
        var sPrev  = $("[data-id=arrPrev]", slider); // стрелка Назад
        var sNext  = $("[data-id=arrNext]", slider); // стрелка Вперед
        var sCount = 1; // счетчик, показывает на каком слайде находимся
        var sCountAll= 3; // сколько слайдов всего
        //var indent = parseInt($(sField).css('right')); // сдвиг контейнера вправо
        var sSlideWidth = containerWidth(); // ширина контейнера
        
        $(sPrev).click(function (){
            goPrev()
        });
        
        $(sNext).click(function (){
            goNext()
        });
        
        function containerWidth(){         // устанавливаем ширину контейнер ...
                    contWidth = $(sSlide).length * $(sSlide).width(); //... равную произведению ширины одного слайда на количество слайдов
                    $(sField).css('width', contWidth); // сабж
                    
                    return $(sField).width();   // возвращаем ширину
        }
        
        function goPrev(){  // нажатие на предыдущий месяц
            $(sField).animate({"right": "-="+$(sFrame).width()}, "fast"); // сдвиг вправо с анимацией на размер фрейма
            if (++sCount == sCountAll)$(sPrev).hide(); // меняем номер текущего слайда, если на последнем слайде, прячем левую стрелку
            $(sNext).show();                            // делаем правую видимой
            $(sHeader).text(dataItems[sCount-1].month); //меняем заголовок блока
        }
        
        function goNext(){
            $(sField).animate({"right": "+="+$(sFrame).width()}, "fast"); // сдвиг влемо с анимацией на размер фрейма
            if (--sCount == 1)$(sNext).hide(); // меняем номер текущего слайда, если на первом слайде, прячем левую стрелку
            $(sPrev).show();                    // делаем левую видимой
            $(sHeader).text(dataItems[sCount-1].month); //меняем заголовок блока
        }
        
    }