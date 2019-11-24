
$(function () {
   $('#dowebok').fullpage();
   var arr = ['MODEL X','安全性','适用性','续航里程0','ATPOPILOT 自动辅助驾驶','性能','内饰']
   $('.section').each(function (indx,ele) {
      var li = $('<li></li>');
      $('.daohang').append( li );
      li.css({
         paddingLeft : 10,
         color : 'white',
         //   display :''
      });
       $(li).mouseenter (function () {
         $(this).text(arr[indx]);             
      })
      $(li).mouseleave (function () {
         $(this).text('');             
      })
      $('.daohang').on('click','li',function () {
         $('.dianti').eq(indx).fadeIn().siblings().fadeOut();
      })
       console.log(ele);

   }) ;
   $('.daohang').css('position','fixed');

})


{/* <ul class="daohang">
    <li class="lis"><a href="">MODEL X</a></li>
    <li><a href="">安全性</a></li>
    <li><a href="">使用性</a></li>
    <li><a href="">续航里程</a></li>
    <li><a href="">ATPOPILOT 自动辅助驾驶</a></li>
    <li><a href="">性能</a></li>
    <li><a href="">内饰</a
    </ul> */}