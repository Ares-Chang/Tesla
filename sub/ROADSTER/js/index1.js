$(function() {
    //视频
    $('.vidbg-box').vidbg({
        'mp4': './ROADSTER-img/roadster-loop-metric-kilometer.mp4',
        'webm': 'path/to/video.webm',
        'poster': 'path/to/fallback-image.png',
    }, {
        // 参数选项
        volume: 1,
        playbackRate: 1,
        muted: true,
        loop: true,
        position: '50% 50%',
        resizing: true,
        overlay: false,
    });
    //头部出现
    chuxian();

    function chuxian() {
        if ($('body,html').scrollTop() >= $('.vidbg-box').offset().top) {

            $('.container').stop().fadeIn();
        } else {

            $('.container').stop().fadeOut();
        }
    }

    function change() {
        if ($('body,html').scrollTop() >= $('.topview').offset().top) {

            $('.img2').stop().fadeIn('linear');
            $('.img1').stop().fadeOut('linear');
        } else {

            $('.img1').stop().fadeIn('linear');
            $('.img2').stop().fadeOut('linear');
        }
    }
    $(window).scroll(function() { chuxian(); });

    //页面滚动换图
    // change();
    $(window).scroll(function() {
        change();
    });

});