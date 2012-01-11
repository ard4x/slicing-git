
    function setChatHeight() {
	
		var $innerHeight = $(window).height(), 
			wWidth = $(window).width(),
			wHeight = $(window).height(),
			b1 = document.getElementById('find_scroll'),
		    b2 = document.getElementById('scroll'),
		    b3 = document.getElementById('left-panel'),
		    b4 = document.getElementById('contacts'),
		    b5 = document.getElementById('inbox'),				
		    b6 = document.getElementById('texteditor').offsetWidth,
		    bodyOverflow = document.getElementById('chat_body');
		
		var leftSide = b3.offsetHeight;
		
		var ls1 = parseInt($('.scrh_cht').height() + $('.chbotbut').height() + 20);
		var h3 = 360 + ls1;
					
		if (!b1 || !b2) {
			var bgeight = $innerHeight - ls1;
			b4.style.height = bgeight + 'px';
			b5.style.height = bgeight + 'px';
		} else {
			var b6_temp = b6 - 6;
			var $msgfinder = $('#msg-finder');
			
			if($.browser.msie && $.browser.version == '7.0') {
				var ls2 = 269 + ($msgfinder.css('display') != 'none' ? ($msgfinder.height()+20) : 0);
			} else {
				var ls2 = parseInt($('#chat-window .chatrighttbltoptd').height() + $('#chat-window .chinputtd').height() + 41 + ($msgfinder.css('display') != 'none' ? ($msgfinder.height()+20) : 0));
			}
			
			if ($innerHeight < h3) {	
				var b2_height_number = h3 - ls2,
					bheight_number = $innerHeight - ls1;	
					
					bodyOverflow.style.overflowY = 'scroll';				
					b2.style.height = b2_height_number + 'px';
					b4.style.height = bheight_number + 'px';
					b5.style.height = bheight_number + 'px';				
			} else {			
				var b2_height_number = $innerHeight - ls2,
					bheight_number = $innerHeight - ls1;
					
					bodyOverflow.style.overflowY = 'hidden';	
					b2.style.height = b2_height_number + 'px';
					b4.style.height = bheight_number + 'px';
					b5.style.height = bheight_number + 'px';
			}
		}		
	}

