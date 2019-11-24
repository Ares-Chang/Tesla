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
	$('.side0-bar').css('height',bodyHeight);
}


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


$('.page').eq(0).css('height',bodyHeight);