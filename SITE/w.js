$(document).ready(function(){

function setBackFontPopap(){
	var opDiv = $('.some_div');
	var pageHeight = $('body').height();
	opDiv.css('height' , pageHeight + 'px')
}

function popMenu(){
	var popLink = $('.popup_menu ul li');
	popLink.hover(function(){$(this).addClass('active');},function(){$(this).removeClass('active');})
}

function chGiftHover(){	
	var giftHover = $('.ch_gift ul li');
	giftHover.hover(function(){$(this).addClass('hover');},function(){$(this).removeClass('hover');})
}

function popImgClick(){	
	var popImg = $('.ch_photo img');
	
	popImg.click(
		function (e){
			e.preventDefault();	
			$(this).parent('.brdpic2').toggleClass('select');
		});
}



	popImgClick();
	setBackFontPopap();
	popMenu();
	chGiftHover();
	$(window).resize(function(){
		setBackFontPopap();
	});
});