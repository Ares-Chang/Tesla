window.onload = function() {
    var yuan = document.querySelector('.yuan');
    var shuzi1 = document.querySelector('.shuzi1');
    var shuzi2 = document.querySelector('.shuzi2');
    var gundongtiao = document.querySelector('.gundongtiao');
    // console.log(yuan);

    gundongtiao.onmousedown = function(e) {
        var a = e.offsetX;
        console.log(a);
        yuan.style.left = a + "px";
        // console.log(b);
        // b = a;
        if (a >= 890) {
            yuan.style.left = "890px";
        }
        shuzi1.innerText = a * 12.5;
        shuzi2.innerText = a * 2.5;

    }




}