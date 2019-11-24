$(function() {
    //价格由高到低
    $('.rbox1').mouseover(function() {
        $('.kuang').stop().fadeIn(1000);
        // alert(123)
    });
    $('.rbox1').mouseout(function() {
        $('.kuang').stop().fadeOut(1000);
        // alert(123)
    });

    // 区域出现
    var a = 0;
    $('.quyu').click(function() {
        if (a == 0) {
            $('.location').stop().slideDown();
            $('.biaoqian').addClass(' glyphicon glyphicon-minus ');
            a = 1;
        } else if (a == 1) {
            $('.location').stop().slideUp();
            $('.biaoqian').addClass('glyphicon glyphicon-plus ');
            a = 0;
        }
    })
    $('.ccc').click(function() {
        if (a == 0) {
            $('.kong').stop().slideDown();
            $('.biaoqian').addClass(' glyphicon glyphicon-minus ');
            a = 1;
        } else if (a == 1) {
            $('.kong').stop().slideUp();
            $('.biaoqian').removeClass('glyphicon glyphicon-minus ');
            a = 0;
        }
    })


});