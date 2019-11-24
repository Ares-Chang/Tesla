//获取可视区域高
// console.log("浏览器宽度" + window.outerWidth)
// console.log("页面可用宽度" + window.innerWidth)
// console.log("body展示宽度" + document.documentElement.clientWidth + "高度" + document.documentElement.clientHeight)
var bodyHeight = document.documentElement.clientHeight;
var bodyWidth = document.documentElement.clientWidth;

// $(document).change(function() {
// 	console.log(1)
// })
//开局先调用一下
$('.side-bar').css('height',bodyHeight);
$('.bg').css('height',bodyHeight)
//自动检测屏幕
document.body.onresize = function() {
	$('.side-bar').css('height',bodyHeight);
	// $('.bg').css('width',bodyWidth)
	$('.bg').css('height',bodyHeight)
}
//图片跟着屏幕大小
$('.module1').css('height',bodyHeight);
// $('.module1').css('width',bodyWidth);
console.log(bodyWidth);
console.log(bodyHeight);
// $('.module1 re-img img').css('height',bodyHeight);
// $('.module1 re-img img').css('width',bodyWidth);

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
	// $(this).children('i').animate({
	// 	'transform':'rotate(45deg)'
	// });
	// $(this).children('i').css('transform: rotate(45deg)')
	// console.log($(this).children('i'))
	//显示ul列表
	$('.side-bar').css('display','block');
	// $('.side-bar').slideDown();s
	$('.side-bar').stop().animate({
		'width':271,
		'height':bodyHeight,
	})
	$('.cover').css('display','block');
})
$('#shutDown').click(function() {
	//隐藏ul列表
	$('.side-bar').stop().animate({
		'width':0
	},function(){
		$('.side-bar').css('display','none');
	})
	
	$('.cover').css('display','none');
})
// 点击遮罩层取消
$('.cover').click(function() {
	$('#shutDown').click();
})

// 点击跳动下箭头，向下翻动
$('span.icon-xiajiantoubeifen').click

let num=3545608.85 