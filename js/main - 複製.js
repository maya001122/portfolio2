// JavaScript Document

//v3
$(document).ready(function (){
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
	
	
	
			
	// $('.nav ul li a').click(function(){ 
	// 	var aaa = $(this).attr("href");
	// 	console.log(aaa);
	// 	$('html,body').animate({scrollTop:$(aaa).offset().top}, 900); 
	// }); //代表一個完整的執行區塊
	

	$('.nav ul li').click(function(){
		var n = $(this).index();
		var nn = n+1;
		var sss = '#section0';
		$('html,body').animate({scrollTop:$(sss+nn).offset().top}, 900); 
	});

	// $('#ss01a').click(function(){
	// 	$('html,body').animate({scrollTop:$('#ss01').offset().top}, 900); 
	// });
	// $('#ss02a').click(function(){
	// 	$('html,body').animate({scrollTop:$('#ss02').offset().top}, 900); 
	// });
	// $('#ss03a').click(function(){
	// 	$('html,body').animate({scrollTop:$('#ss03').offset().top}, 900); 
	// });
	// $('#ss04a').click(function(){
	// 	$('html,body').animate({scrollTop:$('#ss04').offset().top}, 900); 
	// });






	// menu_btn
	var Menu = {
			  
		el: {
		  ham: $('.m_btn'),
		  menuTop: $('.btn_top'),
		  menuMiddle: $('.btn_middle'),
		  menuBottom: $('.btn_bottom')
		},
		
		init: function() {
		  Menu.bindUIactions();
		},
		
		bindUIactions: function() {
		  Menu.el.ham
			  .on(
				'click',
			  function(event) {
			  Menu.activateMenu(event);
			  event.preventDefault();
			}
		  );
		},
		
		activateMenu: function() {
		  Menu.el.menuTop.toggleClass('btn_top_click');
		  Menu.el.menuMiddle.toggleClass('btn_middle_click');
		  Menu.el.menuBottom.toggleClass('btn_bottom_click'); 
		}
	  };

	  Menu.init();



	  // header動態
	  $(function(){
	  　$(window).load(function(){
	  　　$(window).bind('scroll resize', function(){
	  　　var $this = $(this);
	  　　var $this_Top=$this.scrollTop();
		  
		  //當高度小於100時，選單header高度縮小 
		  if($this_Top < 250){
			  $('.logo_md').stop().animate({padding:"15px 0px 15px"},200);
			  $('.nav').stop().animate({height:"50px"},200);
			  $('.nav_pc').stop().animate({padding:"20px 10px"},200);
			  $('.nav_ho').stop().animate({padding:"20px 10px"},200);
	  // 　　　　$('.logo2').stop().animate({width:"230px"},300);
	  // 　　　  $('#top-bar').stop().animate({top:"0px"},300);
	  // 　  　  $('.header_bor').stop().animate({padding:"30px 10px"},300);
	  // 　　　　$('.nav').stop().animate({top:"0px"},300);
	  // 　　　　$('.nav').stop().animate({margin:"26px 0px 25px 0px"},300);
	  　　　}
	  
	  　　if($this_Top > 250){
			  //alert($this_Top);
			  $('.logo_md').stop().animate({padding:"5px 0px 5px"},200);
			  $('.nav').stop().animate({height:"40px"},200);
			  $('.nav_pc').stop().animate({padding:"15px 10px 10px"},200);
			  $('.nav_ho').stop().animate({padding:"30px 10px"},200);
	  // 　　　　$('.logo2').stop().animate({width:"210px"},300);
	  // 　　　　$('#top-bar').stop().animate({top:"-20px"},300);
	  // 　 　　 $('.header_bor').stop().animate({padding:"35px 10px 15px"},300);
	  // 　　　　$('.nav').stop().animate({top:"5px"},300);
	  // 　　　　$('.nav').stop().animate({margin:"32px 0px 25px 0px"},300);
	  　　　 }
	  
	  　　}).scroll();
			  
	  　});
	  });



	  // TOP鍵
	  $(function(){
		$("#gotop").click(function(){
			jQuery("html,body").animate({
				scrollTop:0
			},1000);
		});
		$(window).scroll(function() {
			if ( $(this).scrollTop() > 500){
				$('#gotop').fadeIn(300);
			} else {
				$('#gotop').stop().fadeOut(300);
			}
		});
	});


	new WOW().init();








	
});

