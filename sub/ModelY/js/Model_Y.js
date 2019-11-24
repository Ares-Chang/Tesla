window.onload = function () {
    // "use strict"

    // 元素获取
    var inner = document.getElementsByClassName('inner_Height');
    var content = document.querySelector('body>.content');
    // var newNav = document.querySelector('.navigations');
    var lists = document.querySelectorAll('.navigations li');
    var elevAcco_1 = document.querySelectorAll('.navigations .elevAcco_1');
    var elevatorAcco = document.querySelectorAll('.elevatorAcco');
    var body = this.document.querySelector('body,html')




    // 可视区尺寸设定
    var inner_height = window.innerHeight;
    content.Height = window.innerHeight;
    for (var i = 0; i < inner.length; i++) {
        inner[i].style.height = inner_height + 'px';

    }




    /* 
        导航栏特效js文件

    */

    // timer()
    // 2秒消失特效
    function timer() {
        clearTimeout(dsq);
        var dsq = window.setTimeout(function () {
            $('.elevatorAcco').stop().fadeOut('400');
            $('.navigations li').removeClass('click');

        }, 3000)
    };

    // 排他
    function paitas() {
        lists.forEach(function (els, index) {
            els.index = index;
            elevatorAcco[els.index].style.display = 'none';
            elevAcco_1[els.index].classList.remove('Acco_2');

        });
    }

    // 滚动事件
    scroll();

    function scroll() {
        $(window).scroll(function () {

            $('.inner_Height').each(function (index, els) {
                els.index = index;
                // $('body,html').scrollTop() // 可行
                if ($(els).offset().top <= $(window).scrollTop()) {
                    if (els.index == 1 || els.index == 5) {
                        $('.navigations').addClass('elevatorNav_black');
                        $('.navigations').removeClass('elevatorNav');
                    } else {
                        $('.navigations').addClass('elevatorNav');
                        $('.navigations').removeClass('elevatorNav_black');
                    }
                    // 排他
                    paitas();
                    $('.navigations li').eq(els.index).find('.elevAcco_1').addClass('Acco_2').siblings('.elevatorAcco').show();
                    $('.inner_Height').eq(els.index).show().addClass('donghua').siblings('.inner_Height').removeClass('donghua');
                }

                // $('.navigations li').eq(els.index).find('.elevatorAcco').stop().show();
                timer()
            })

        })

    }


    // 验证区域======
    // $(document).bind('click scroll','.elevatorAcco', function () {
    //     var a = $(this).parents('.lis').index();
    //     console.log(a);
    //     console.log(1);
    // })

    // ===========
    $(function () {
        $('.panel').css({
            'height': $(window).height()
        });
        $.scrollify({
            section: '.panel'
        });
    });

    // 鼠标滚动事件
    // autoRoll();
    // var newIndex = 0;
    // // bug太多
    // autoRoll()

    // function autoRoll() {
    //     $(document).on('mousewheel DOMMouseScroll', function (e) {
    //         window.onmousewheel = true;
    //         var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) || // chrome & ie
    //             (e.originalEvent.delta && (e.originalEvent.delta > 0 ? -1 : 1)); // firefox
    //         var num = 0;

    //         $(document).off('mousewheel DOMMouseScroll');
    //         if (delta > 0) {

    //             // 向上滚
    //             num -= 1;
    //             if (num > 0) {
    //                 num = 0;
    //             }
    //             // 方法区

    //             under();

    //             function under() {
    //                 $(window).scroll(function () {

    //                     $('.inner_Height').each(function (index, els) {
    //                         els.index = index;
    //                         // $('body,html').scrollTop() // 可行
    //                         if ($(els).offset().top <= $(window).scrollTop()) {
    //                             if (els.index == 1 || els.index == 5) {
    //                                 $('.navigations').addClass('elevatorNav_black');
    //                                 $('.navigations').removeClass('elevatorNav');
    //                             } else {
    //                                 $('.navigations').addClass('elevatorNav');
    //                                 $('.navigations').removeClass('elevatorNav_black');
    //                             }
    //                             // 排他
    //                             paitas();
    //                             $('.navigations li').eq(els.index).find('.elevAcco_1').addClass('Acco_2').siblings('.elevatorAcco').show();
    //                         }

    //                         // $('.navigations li').eq(els.index).find('.elevatorAcco').stop().show();
    //                         timer()
    //                     })

    //                 })
    //                 // newIndex = $(this).index();
    //                 newIndex--;
    //                 if (newIndex < 0) {
    //                     newIndex = 0;
    //                     return;
    //                 }
    //                 // var inner_heightTop = $('.inner_Height').eq(newIndex).offset().top;
    //                 // $('body,html').animate({
    //                 //     scrollTop: inner_heightTop
    //                 // });
    //                 // // if(newIndex < 0){
    //                 // //     newIndex = 0
    //                 // // }
    //             }
    //         } else if (delta < 0) {
    //             // 向下滚
    //             num += 1;
    //             if (num > 1) {
    //                 num = 0;
    //             }

    //             // 方法区
    //             ontop();

    //             function ontop() {
    //                 newIndex++;
    //                 if (newIndex >= 9) {
    //                     newIndex = 8;
    //                     return;
    //                 }
    //                 var inner_heightTop = $('.inner_Height').eq(newIndex).offset().top;
    //                 $('body,html').animate({
    //                     scrollTop: inner_heightTop
    //                 });


    //             }

    //         }

    //         setTimeout(autoRoll, 800);
    //     })
    // }




    // ++================滚轮事件
    // var doScroll = true;
    // (function () {
    //     // var oDiv 
    //     function onMouseWheel(e) {
    //         var e = e || window.event;
    //         var down = true;
    //         down = e.wheelDelta ? e.wheelDelta < 0 : e.detail > 0;
    //         if (down) {
    //             if (paqe_index != 6) {
    //                 doScroll = false;
    //                 paqe_index++;
    //             }
    //         }


    //     }
    // })()

    // 点击事件

    $('.hahah').on('click', function () {
        $(this).parents('.tds-content_container').stop().hide('400').siblings('.tds-content_containers').stop().show('400');
    })
    $('.tbs-yuan-out').click(function () {
        $(this).parents('.tds-content_containers').stop().hide('400').siblings('.tds-content_container').stop().show('400');
    })
    $('.tbs-tab-btn').on('click', '.tds-tab-label', function () {
        // $(this).eq(this.index())
        $('.tbs-tab-left-rught').eq($(this).index()).removeClass('slideInUp').show().siblings('.tbs-tab-left-rught').addClass('slideInUp').hide();
        $(this).addClass('tds-o-tab-label').siblings('.tds-tab-label').removeClass('tds-o-tab-label');
    })
    $('.model_Y .btn').click(function () {

    })
    // 鼠标进入事件





    // 类封装
    var thst;
    var index;
    class Nav {
        // 元素获取
        constructor(id) {
            thst = this;
            this.body = document.querySelector('body,html');
            this.content = document.querySelector('.content')
            // nav盒子
            this.nav = document.querySelector(id);
            // 屏幕列表盒子
            this.inner_Height = document.querySelectorAll('.inner_Height');
            // 电梯盒子
            this.navigations = this.nav.querySelector('.navigations');
            this.list = this.navigations.querySelectorAll('li');
            // 电梯文字
            this.elevatorAcco = this.navigations.querySelectorAll('.elevatorAcco');
            // 电梯竖线
            this.elevAcco_1 = this.navigations.querySelectorAll('.elevAcco_1');

            this.init();
        }

        // 遍历
        init() {
            for (var i = 0; i < this.list.length; i++) {
                this.list[i].index = i;
                // 点击
                this.list[i].onclick = this.toggleNav;
                // 鼠标进入
                this.list[i].onmouseover = this.mouseOver;
                // 鼠标离开
                this.list[i].onmouseout = this.mouseOut;
                // 页面卷起事件

            }

        }
        // 点击事件
        toggleNav() {
            window.scroll = null;
            // 排他
            paitas()
            // 判断
            if (this.index == 1 || this.index == 5) {
                thst.navigations.classList.add('elevatorNav_black');
                thst.navigations.classList.remove('elevatorNav');
            } else {
                thst.navigations.classList.add('elevatorNav');
                thst.navigations.classList.remove('elevatorNav_black');
            }

            this.className = 'click';

            // 修改样式
            thst.elevAcco_1[this.index].classList.add('Acco_2');
            thst.elevatorAcco[this.index].style.display = 'block';

            // 点击点击跳页
            // thst.body.scrollTop = thst.inner_Height[this.index].offsetTop;
            $('body,html').animate({
                scrollTop: thst.inner_Height[this.index].offsetTop
            })

            timer()

        }

        // 鼠标进入时间
        mouseOver() {
            thst.pai()
            thst.elevatorAcco[this.index].style.display = 'block';
        }

        // 鼠标离开时间
        mouseOut() {
            if (this.className == 'click') {
                return false;
            }
            this.classList.remove = 'click';
            thst.elevatorAcco[this.index].style.display = 'none';
        }

        // 页面卷起事件
        // 当页面滚到指定的位置，导航栏高亮对应的元素



        // 鼠标滚动事件




        // 键盘上下事件





        // 排他清样式
        // exclusive() {
        //     for (let i = 0; i < this.list.length; i++) {
        //         this.elevAcco_1[i].classList.remove('Acco_2');
        //         this.elevatorAcco[i].style.display = 'none';
        //     }
        // }
        pai() {
            for (let j = 0; j < this.list.length; j++) {
                this.elevatorAcco[j].style.display = 'none';

            }
        }

    }

    new Nav('#anv_1');


    /* 
        ======结尾=====
    */


}