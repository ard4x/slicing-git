$(document).ready(function(){

$('#question_priorities a').live('click', function(){
		var $inp = $('#q_priority'),
			list = $inp.val().split(','),
			$elm = $(this),
			value = $elm.attr('rel'),
			newElm = null;

		if (list.indexOf(value) >= 0) return;
		
		list.push(value);
		var newList = [], re = new RegExp(/^\d+$/);
		for (var i = 0; i < list.length; i++) {
			 if (re.test(list[i])) 
				 newList.push(list[i]);
		}
		$inp.val(newList.join(','));
		 
		$elm.parents('tr:first').hide();
		
		newElm = $('<tr><td class="arrbg"><a href="#" rel="' + value + '">' + $elm.text() + ' </a></td></tr>');
		$('#user_priorities').append(newElm);
		return false;
	});

	$('#user_priorities a').live('click', function(){
	 	 var $thisLi = $(this).parents('tr:first'), 
	 	 	 value = $(this).attr('rel'),
	 	 	 $inp = $('#q_priority'),
			 list = $inp.val().split(',');
	 	 
		 $('#question_priorities a[rel='+value+']').parents('tr').show();
		 $thisLi.remove();
		 
		 var list = $inp.val().split(','), newList = [], re = new RegExp(/^\d+$/);		 
		 for (var i = 0; i < list.length; i++) {
			 if (list[i] != value && re.test(list[i])) 
				 newList.push(list[i]);
		 }
		 $inp.val(newList.join(','));
		 return false;
    });
	
	$('.bbot').hover(function(){
		$(this).addClass('bh');
	},function(){
		$(this).removeClass('bh');
	})
	
});
