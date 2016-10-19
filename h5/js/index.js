$(document).ready(function () {
    $(function(){
        $(window).scroll(function(){
            scrolltop = $(window).scrollTop();
            if(scrolltop>=620){
                $("#menu").css({"position":"fixed","z-index":"99","top":"0em","background-color":"white","transition":"all 0.5 linear"});
            }else if(scrolltop=580){
                $("#menu").css({"position":"static","transition":"all 0.5 linear"});
            }
        })
    })
    /*画布画圆*/
    function mycanvas(idName,startArc,endArc) {
        var c=document.getElementById(idName);
        var cxt=c.getContext("2d");
        cxt.strokeStyle = "#FF5252";
        cxt.lineWidth="10";
        cxt.beginPath();
        cxt.arc(90,90,70,startArc,endArc);
        cxt.stroke();//边框；
    }

    var aa=mycanvas("mycanvas1",-1.5,3.6);//-1.5到4.8整个圆；
    mycanvas("mycanvas2",1.5*Math.PI,1.3*Math.PI);
    mycanvas("mycanvas3",1.5*Math.PI,1.2*Math.PI);
    mycanvas("mycanvas4",1.5*Math.PI,1.4*Math.PI);


  /*  $(".circle_div").mouseover(function () {
        var start=1.5;
        var end =0.2;
        var time=1000000;
        var interval=(start-end)/time;
        var next=start-interval;
      function cc(){
         var aa= setInterval(function () {
             if(start<=1.1){
                 aa.clearInterval();
                 return ;
             }
              mycanvas("mycanvas1",start*Math.PI,next*Math.PI);
             start=start-interval;
             next=next-interval;
          },100);
      }
        cc();
    });*/
function che() {
    var part=$(".part");
  /*  setInterval(function () {
        part.eq(0).css({display: "none"});
        part.eq(1).css({display: "block"});
    },10000);
    setInterval(function () {
        part.eq(0).css({display: "block"});
        part.eq(1).css({display: "none"});
    },20000);*/

}
    che();
$(function () {
    var part=$(".part").className;
   if(/part/.test(disB)){
      part.addClass("disN")
   }else {
       part.remove("disN")
   }
});





/*
    $(window).scroll(function(){
        scrolltop = $(window).scrollTop();
        if(scrolltop>=2500){
            alert("sddadasda")
        }
    })*/


});
$(".submit_bnt>input").click(function () {
    $(this).css('outline','0.1em solid #AAA');
})


