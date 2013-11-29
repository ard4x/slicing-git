$(function(){

    // Common Scropt for header scrolling
    $(window).scroll(function(){
        var indentLeft = $(document).scrollLeft();
        $("#pageHeader").css('left', '-'+indentLeft+'px');
    });

    // Footer fix
    if ($(window).height() >= $(document).height()){
        $('#pageFooter').css({position: 'absolute', bottom: 0})
    }
});