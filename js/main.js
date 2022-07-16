// JavaScript Document

//v3
$(document).ready(function(){


	// 錨點滑動
	// $('.nav ul li').click(function(){
	// 	var n = $(this).index();
	// 	var nn = n+1;
	// 	var sss = '#section0';
	// 	$('html,body').animate({scrollTop:$(sss+nn).offset().top}, 900); 
	// });
	// $('.nav2 ul li').click(function(){
	// 	var n = $(this).index();
	// 	var nn = n+1;
	// 	var sss = '#section0';
	// 	$('html,body').animate({scrollTop:$(sss+nn).offset().top}, 900); 
	// });

	// menu_btn
	// var Menu = {
	// 	el: {
	// 	  ham: $('.m_btn'),
	// 	  menuTop: $('.btn_top'),
	// 	  menuMiddle: $('.btn_middle'),
	// 	  menuBottom: $('.btn_bottom')
	// 	},
		
	// 	init: function() {
	// 	  Menu.bindUIactions();
	// 	},
		
	// 	bindUIactions: function() {
	// 	  Menu.el.ham
	// 		  .on(
	// 			'click',
	// 		  function(event) {
	// 		  Menu.activateMenu(event);
	// 		  event.preventDefault();
	// 		}
	// 	  );
	// 	},
		
	// 	activateMenu: function() {
	// 	  Menu.el.menuTop.toggleClass('btn_top_click');
	// 	  Menu.el.menuMiddle.toggleClass('btn_middle_click');
	// 	  Menu.el.menuBottom.toggleClass('btn_bottom_click'); 
	// 	}
	// };
	// Menu.init();

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
	　　　}
	
	　　if($this_Top > 250){
			//alert($this_Top);
			$('.logo_md').stop().animate({padding:"5px 0px 5px"},200);
			$('.nav').stop().animate({height:"40px"},200);
			$('.nav_pc').stop().animate({padding:"15px 10px 10px"},200);
			$('.nav_ho').stop().animate({padding:"30px 10px"},200);
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

	
	// 專案經歷手機版選單
	$(function(){
		var curr = null;
		$('#nav>li>a').click(function () {
			//假如點選的不是已開啟，則收合全部再展開目前點選的
			if($(this).parent('li').index() != curr ){
				$('#nav ul').slideUp(500); //點擊後先收合再展開的開關
				$(this).next().slideDown(500);
				curr = $(this).parent('li').index();
			}else{
				$(this).next().slideUp(500);
				curr = null;
			}
		});
	});

	// wow套件
	new WOW().init();
	$(".header-content").load("header.html");
	$(".header-content2").load("header2.html");


	$('[data-fancybox="images"]').fancybox({
		buttons: [
			"zoom",
			//"share",
			// "slideShow",
			//"fullScreen",
			//"download",
			// "thumbs",
			"close"
		  ],
	});
});

