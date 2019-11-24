$(function(){
	
	//侧栏跳转功能
	$('nav ul li').on('click',function(){
		var i = $(this).index();
		var top  =$('body>div').eq(i).offset().top;
		$('html,body').stop().animate({
			scrollTop:top
		});
	});
	
	//侧栏鼠标移入功能
	$('nav ul li').on('mouseenter',function(){
		var i = $(this).index();
		$(this).css({
			borderLeft:'3px solid #ffffff',
			color:'#ffffff'
		}).find('span').show();
	});
	
	//侧栏鼠标移出功能
	$('nav ul li').on('mouseleave',function(){
		var i = $(this).index();
		$(this).css({
			borderLeft:'1px solid #ffffff70',
			color:'#ffffff70'
		}).find('span').hide();
	});
	
	
	$(window).on('scroll',function(){
		if($(window).scrollTop()>0&&$(window).scrollTop()<360){
			//1
			$('.Model_S .title').show(1000);
			$('.Model_S .lead').show(1200);
			$('.Model_S .tips').show(1400);
		}
		else if($(window).scrollTop()>360&&$(window).scrollTop()<1080){
			//2
			$('.safety .right ul').fadeIn(2000);
			$('.safety .left .top .titleS').show(1000).next().show(1000).next().slideDown(1000);
			$('.safety .left .down').slideDown(1200);
		}
		else if($(window).scrollTop()>1080&&$(window).scrollTop()<1800){
			//3
			$('.property .c2').show(1000);
			$('.property .down .left').show(1400);
			$('.property .down .right').fadeIn(1400);
			
		}
		else if($(window).scrollTop()>1800&&$(window).scrollTop()<2520){
			//4
			$('.endurance .c3').show(1000);
			$('.endurance .right .top').slideDown(1400);
			$('.endurance .right .down').slideDown(1400);
			
		}
		else if($(window).scrollTop()>2520&&$(window).scrollTop()<3240){
			//5
			$('.aided .p1').show(1000);
			$('.aided .down .left').slideDown(1500);
			$('.aided .down .right').show(1500);
			
		}
		else if($(window).scrollTop()>3240&&$(window).scrollTop()<3960){
			//6
			$('.interior .p2').show(1000);
			$('.interior .down .left').slideDown(1500);
			$('.interior .down .right').show(1500);
			
		}
		else if($(window).scrollTop()>3960&&$(window).scrollTop()<4680){
			//7
			$('.appearance .c3').show(1000);
			$('.appearance .down .left').slideDown(1400);
			$('.appearance .down .right').fadeIn(1400);
			
		}
		else if($(window).scrollTop()>4680&&$(window).scrollTop()<5400){
			//8
			$('.specification .data .top h1').show(1000).next('.btnbk').show(1500).next().show(1500);
			$('.specification .data .down ul').slideDown(1500);
			
		}
	})
	
});