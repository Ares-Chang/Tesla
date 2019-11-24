window.onload = function() {
    var xiao = document.querySelectorAll('.nav-xiaotu');
    var topimg = document.querySelector('.top-img');
    var touMing = document.querySelectorAll('.touming');
    for (var i = 0; i < xiao.length; i++) {
        xiao[i].index = i;
        xiao[i].onmouseover = function() {
            this.style.cursor = 'pointer';
            // touming[this['index']].style.backgroundColor = `rgba(0, 0, 0, 0.2)`;
            topimg.style.background = `url(./img/${this['index']+1}.jpg) no-repeat`;
            topimg.style.backgroundSize = `100% 100%`;

        }

    }
}