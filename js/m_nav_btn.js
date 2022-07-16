// JavaScript Document

//v3
$(function(){
	$(".menu_btn").click(function(){
		var curDl = $('.header_mb'),
			curHeight = curDl.height(),
			autoHeight = curDl.css('height', 'auto').height(); 
		
		if(!curHeight){
			curDl.height(curHeight).animate({height: autoHeight}, 400, function() {
			curDl.css('height', 'auto'); 
			});
		}else
			curDl.animate({height: '0px'},400);
	});
	
	
	
	
	
});

