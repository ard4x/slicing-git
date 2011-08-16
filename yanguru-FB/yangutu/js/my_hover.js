$(document).ready(function(){

var $menu = $('.ny_pinfo_onlist'); /* hover user list */


$menu.hover(function() { 

    $(this).addClass('hover');
	$('.nyp_right',this).css('display','block');
 
}, function() {

	$(this).removeClass('hover');
	$('.nyp_right',this).hide();

});


var $mEdit = $('.mail-edit');

$('.ny_mail-edit').click(function(){
 
   var $parents = $(this).parents().find('.still_right .ny_mail');
    $parents.css('display','none');
    $mEdit.css('display','block');

});

});
