$(document).ready(function (){
		setHeight();
	$(window).resize(function(){
		setHeight();
	});
});


function setHeight(){
		var innerHeight = window.innerHeight;
		var b1 = document.getElementById('find_scroll');
        var b2 = document.getElementById('scroll');
    if(!b1 || !b2) return;
    var h1 = b1.offsetHeight;
    var h2 = b2.offsetHeight;
		
		b2.style.height = (innerHeight - 227) + 'px';
		
    if (h1 > h2){   
	
    }else if (h1 < h2){
        b1.style.height = (h2) + 'px';
        b2.style.height = (h2) + 'px';
    }
}