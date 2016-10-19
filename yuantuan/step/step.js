/**
 * Created by Lin on 2016/10/7.
 */
$(function () {
    $(".pro_ico").bind('mouseover',function () {
        $(this).css({"border":"1px solid #333",transition:"all 0.2s linear"});
 });
    $(".pro_ico").bind('mouseout',function () {
        $(this).css({"border":"1px solid #eee",transition:"all 0.2s linear"});
    });
$(".pro_ico").click(function () {
    $(this).unbind("mouseover,mouseout")
    // console.log($(this).css("backgroundColor"));
    var bg=$(this).css("backgroundColor");
    if(bg=="rgb(255, 255, 255)") {
        $(this).css({"background": "#333"});
        $("span",this).css({"color":"white"});
        $("figure>img",this).css({marginTop:"-100%"});
    }else if(bg=="rgb(51, 51, 51)"){
        $(this).css({"background": "white"});
        $("span",this).css({"color":"#333"});
        $("figure>img",this).css({marginTop:"0%"});
    }
})


    $(".next1").click(function () {
        $(".step1").hide();
        $(".step2").show();

    })
    $(".pre_step").click(function () {
        $(".step2").hide();
        $(".step1").show();

    })
});
