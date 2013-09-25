function addShadeToImg(){
    $(".enc__photoArea").each(function(){

        var imgMinWidth = 200, //200px
            frameMaxHeight = 300, //300px
            image =     $(".enc__photoArea_photo", this),
            frame = $(".enc__photoArea_frame", this),
            photoAreaWidth = $(this).width(),
            frameWidth = $(frame).width(),

            imgWidth =  $(image).width(),
            photoFramePadding = 2; // 2px

        if (imgWidth < imgMinWidth) {
            imgWidth = imgMinWidth;
            $(image).width(imgWidth);
            $(image).css('height', 'auto');
            var newImgHeight = $(image).height(),
                imgMarginTop = -(newImgHeight - $(frame).height()) / 2 ;
            $(image).css('margin-top', imgMarginTop+'px');
        }
        var imgHeight = $(image).height(),
            left = (imgWidth > frameWidth )? (photoAreaWidth - frameWidth) / 2 - photoFramePadding : (photoAreaWidth - imgWidth)/2 - photoFramePadding,
            width = (imgWidth > frameWidth )? frameWidth : imgWidth,
            height= (imgHeight > frameMaxHeight)? frameMaxHeight : imgHeight;

        $("<span/>").prependTo(this).css({
            "display": "block",
            "position": "absolute",
            "box-shadow": "0 1px 2px rgba(0,0,0,0.5)",
            "padding": photoFramePadding +"px",
            "top": -photoFramePadding +"px",
            "left": left,
            "width": width,
            "height": height
        });
    });
}
// onLoad
$(window).load(function (){
    addShadeToImg()
});

// onReady
$(function(){
    $("._jBasicInfo").on('click', function(){
        $(this).toggleClass('closed');
    });
    $("._jSediMenuSettings").on('click', function(e){
        $(this).closest(".enc__menu_item_set").toggleClass('closed');
        e.preventDefault();
    });
});