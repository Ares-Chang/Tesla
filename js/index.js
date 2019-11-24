//获取可视区域高
// console.log("浏览器宽度" + window.outerWidth)
// console.log("页面可用宽度" + window.innerWidth)
// console.log("body展示宽度" + document.documentElement.clientWidth + "高度" + document.documentElement.clientHeight)
var bodyHeight = document.documentElement.clientHeight;
var bodyWidth = document.documentElement.clientWidth;

// console.log(bodyWidth);
// console.log(bodyHeight);

//开局先调用一下
$('.side-bar').css('height',bodyHeight);	//ul容器
//自动检测屏幕  浏览器调整大小时执行
document.body.onresize = function() {
	$('.side-bar').css('height',bodyHeight);
}
//图片跟着屏幕大小	获取屏幕大小，赋值给module1234
$('.module1').css('height',bodyHeight);
$('.module2').css('height',bodyHeight);
$('.module3').css('height',bodyHeight);
$('.module4').css('height',bodyHeight);

//video大小适应
$('video').css('width','100%');
// $('video').css('height',bodyHeight);
$('video').prop('autoplay','autoplay');
//让模块二向下移动
$('.module2').css('height',bodyHeight)

//预约试驾下面的白线
$('.mak a').hover(function() {
	$(this).css('borderBottom','3px solid #fff')
},function() {
	$(this).css('borderBottom','2px solid rgba(255,255,255,.8)')
})

//停止跳动的下箭头
$('.module1-bottom-icon').hover(function() {
	$(this).css('animationName',"none")
},function() {
	$(this).css('animationName','jump')
})

//点击三道杠打开ul
$('#open').click(function() {
	//三道杠旋转
	//显示ul列表		动画显示
	$(this).find('.Down').css('animation','getDown .3s ease');
	$(this).find('.Up').css('animation','getUp .3s ease');
	var timer = setTimeout(function() {
		$('.side-bar').css('display','block');
		// $('.side-bar').slideDown();
		$('.side-bar').stop().animate({
			'width':271,
			'height':bodyHeight,
		})
		$('.cover').css('display','block');
		clearTimeout(timer);
	},200)
	
})
$('#shutDown').click(function() {
	//隐藏ul列表
	$('.side-bar').stop().animate({
		'width':0
	},function(){
		$('.side-bar').css('display','none');
	})
	
	$('.cover').css('display','none');
	// 消除open动画
	$('#open').find('.Down').css('animation','none');
	$('#open').find('.Up').css('animation','none');
})
// 点击遮罩层取消
$('.cover').click(function() {
	$('#shutDown').click();
})

//循环给箭头添加index
var spans = $('span.icon-xiajiantoubeifen');
for (var i = 0; i < spans.length; i++) {
	spans[i].index = i+1;
	// console.log(spans[i].index);
}

// 点击跳动下箭头，向下翻动
$('span.icon-xiajiantoubeifen').click(function() {
	// 功能不完善，后期改

	$('.click-btn li').eq(this.index).click();
	
})




//如果页面超示顶出module1显部			删除
function returnTop() {
	if (Math.ceil($('html,body').scrollTop()) >= bodyHeight) {
		$('.index-nav').show();
	}else {
		console.log(1)
		$('.index-nav').hide();
	}
}
//index-nav返回顶部按钮事件
$('.index-nav').find('a.icon-xiajiantoubeifen').click(function() {

	$('.click-btn li').eq(0).click();
})

//点击按钮对应高亮
function highlightSpan(that) {
	clearInterval(timer);
	//显示span
	that.find('span').stop().fadeIn();
	//显示2s隐藏
	var timer = setInterval(function() {
		that.find('span').stop().fadeOut();
		clearInterval(timer);
	},2000)
	
}
//给li绑定index
toggleLi();
//点击侧边li按钮事件
$('.click-btn li').click(function() {
	//高亮线条
	$(this).find('div').addClass('btn-highlight').parent().siblings().find('div').removeClass('btn-highlight');
	highlightSpan($(this));
	// console.log(this.index);
	//移动
	// $(window).scrollTop(this.index * bodyHeight);
	$('body,html').stop().animate({
		'scrollTop' : this.index * bodyHeight
	})
	if (this.index >= 1) {
		//显示本页nav
		$('.stick-nav').hide();
		$('.index-nav').show();
	}else {
		$('.stick-nav').show();
		$('.index-nav').hide();
	}
}) 
//鼠标移上，和移出，显示隐藏span
$('.click-btn li').hover(function() {
	$(this).find('span').stop().fadeIn();
},function() {
	$(this).find('span').stop().fadeOut();
})

//点击对应ul li切换对应画面	给li绑定index
function toggleLi() {
	var lis = $('.click-btn li');
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
	}
}

//全民滚动调用
$(function(){
    $('#dowebok').fullpage();
});


//观察，屏幕滚动body的class改变可以获取对应下标
function getXiaBiao() {
	var xiaBiao = $('body').prop('class');
	xiaBiao = xiaBiao.charAt(xiaBiao.length-1);
	// console.log(xiaBiao)
	
	//高亮线条
	$('.click-btn li').eq(xiaBiao).find('div').addClass('btn-highlight').parent().siblings().find('div').removeClass('btn-highlight');
	highlightSpan($(this));

	// $('.click-btn li').eq(xiaBiao).click();
	if (xiaBiao != 0) {
		$('.stick-nav').hide();
		$('.index-nav').show();
	}else{
		$('.stick-nav').show();
		$('.index-nav').hide();
	}
}

var scrollFunc = function (e) {  
    e = e || window.event;  


    if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件               
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
           // console.log('上滚')
           getXiaBiao();
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
             // console.log('下滚')
             getXiaBiao();
        }  
    } 
}
/*注册事件*/
if(document.addEventListener){
    document.addEventListener('DOMMouseScroll',scrollFunc,false);
}//W3C
window.onmousewheel=document.onmousewheel=scrollFunc;//IE/Opera/Chrome/Safari



//moude1动画
$(function() {
	$('.module1').find('.re-img').children('img').css('transform','translate(0, -20%) scale(2)');
	// $('.module1').fadeIn()
	$('.module1-top,.module1-bottom').fadeIn();
})

//鼠标滑动事件		return不出来 数据，怎么解决？？？？
var downSite;
$('.module1').find('.re-img').children('img').mousedown(function aaa(e) {
	// console.log(e.clientX);
	var a = e.clientX;
	var indexs = $('.module1-bottom').find('li[style="background: rgb(255, 255, 255);"]')[0].index;
	// return e.clientX;
	$('.module1').find('.re-img').children('img').mouseup(function(e) {
		var b = e.clientX;
		// console.log(e.clientX);
		if (a > b) {
			// console.log('左滑');
			indexs++;
			if (indexs >= 2) {
				indexs = 2;
			}
			// console.log($('.module1').find('.re-img').children('img').css('transform'))
			// $('.module1').find('.re-img').children('img').css('transform','translate(-50%, -20%) scale(2)');
			$('.module1-bottom').find('li')[indexs].click();
		}else if(a < b) {
			// console.log('右滑');
			indexs--;
			if (indexs <= 0) {
				indexs = 0;
			}
			// $('.module1').find('.re-img').children('img').css('transform','translate(50%, -20%) scale(2)');
			$('.module1-bottom').find('li')[indexs].click();
		}
	})
})

for (var i = 0; i < $('.module1-bottom').find('li').length; i++) {
	$('.module1-bottom').find('li')[i].index = i;
}
$('.module1-bottom').find('li').click(function() {
	// console.log(this.index)
	if (this.index == 0) {
		$('.module1').find('.re-img').children('img').css('transform','translate(50%, -20%) scale(2)')
		$('.module1').find('.module1-top').find('h2').html('Model S');
		// $('.module1').find('.module1-top').find('h2').hide();
		// $('.module1').find('.module1-top').find('h2').eq(this.index).slideDown();
		$('.module1').find('.module1-top').find('em').html('Model S');
		$('.module1').find('.introduce').find('p').html('不限额度的免费超级充电服务');
	}else if(this.index == 1) {
		$('.module1').find('.re-img').children('img').css('transform','translate(0%, -20%) scale(2)')
		$('.module1').find('.module1-top').find('h2').html('Model 3');
		$('.module1').find('.module1-top').find('em').html('Model 3');
		$('.module1').find('.introduce').find('p').html('您可在7日内或1,600公里内（以先到者为准）退还您的车辆');
	}else if (this.index == 2) {
		$('.module1').find('.re-img').children('img').css('transform','translate(-50%, -20%) scale(2)')
		$('.module1').find('.module1-top').find('h2').html('Model X');
		$('.module1').find('.module1-top').find('em').html('Model X');
		$('.module1').find('.introduce').find('p').html('不限额度的免费超级充电服务');
	}

	// $('.module1').find('.module1-top').find('h2').hide();
	// $('.module1').find('.module1-top').find('h2').eq(this.index).fadeIn();
	$(this).css('background','#fff').siblings().css('background','none');
	
})