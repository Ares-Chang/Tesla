$(function() {

    console.log($('.z'));
    $('.z').click(function() {
        console.log('aaa');

        $('.zhong2').addClass('xianshi');
        $('.zhong1').removeClass('xianshi');
        // $(this).css('background', '#ccc');
        // $('.y').css('background', '#fff');
    })
    $('.y').click(function() {
        $('.zhong1').addClass('xianshi');
        $('.zhong2').removeClass('xianshi');
        // $(this).css('background', '#ccc');
        // $('.z').css('background', '#fff');
    })
})