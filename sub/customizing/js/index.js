//实现点击top中的li  改变content中的内容big  small;
//先获取元素li;直接使用jQuery做;
window.onload=function(){
    var bodyHeight = document.documentElement.clientHeight;
    $('.main').css('height',bodyHeight);
    $('.top ul li').click(function(){
        
        $(this).addClass('active').siblings().removeClass('active')
        $(this).css('color','black').nextAll().css('color','');
        var index=$(this).index();
        $('.content .big').eq(index).stop().show(500).siblings().stop().hide(500);
        $('.content .small').eq(index).stop().show(500).siblings().stop().hide(500);
       
    })

    












}



