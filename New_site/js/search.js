$(function(){
    $("#slider").slider({
        range: "min",
        min: 1,
        max: 4,
        value: 2,
        slide: function( event, ui ) {
            $slider = $("#slider");
            if (ui.value == $slider.slider( "option", "max" ) ){
                $slider.addClass('max');
            }else{
                $slider.removeClass('max');
            }
        }
    });
});