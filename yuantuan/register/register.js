/**
 * Created by ThinkPad User on 2016/9/26.
 */
$(function () {
    $(".agree").click(function () {
        if(this.style.backgroundPosition=="0px -26px"){
            $(this).css({"background-position":"0px 0px"});
        }else {
            $(this).css({"background-position":"0px -26px"});
        }

    });

    function myfocus(className,Position) {
        $(className).focus(function () {
            $(Position).css({"background-position":"0px -24px"})
        });
    };
    function myblur(className,Position) {
        $(className).blur(function () {
            $(Position).css({"background-position":"0px 0px"})
        });
    };
    myfocus(".input_user",".logo_user");
    myfocus(".input_sort",".logo_key");
    myfocus(".codeMa",".logo_num");
    myblur(".input_user",".logo_user");
    myblur(".input_sort",".logo_key");
    myblur(".codeMa",".logo_num");
    $(".nav_img2").html('<div class="circle cri2">'+'</div>');
   $(".nav_img").append('<'+'img class="imgtap" src="../img/state01.png"'+'>');
    $(".next1").click(function () {
        $(".step1").hide();
        $(".step2").show();
        $(".imgtap").remove();
        $(".nav_img").html('<div class="circle cri1">'+'</div>');
        $(".nav_img2").append('<'+'img class="imgtap1" src="../img/state01.png"'+'>');
        $(".cri2").remove();
    });

    $(".back_stap").click(function () {
        $(".step2").hide();
        $(".step1").show();
        $(".imgtap1").remove();
        $(".nav_img2").html('<div class="circle cri2">'+'</div>');
        $(".cri1").remove();
        $(".nav_img").append('<'+'img class="imgtap1" src="../img/state01.png"'+'>');



    })
    $(".next2").click(function () {
        $(".step2").hide();
        $(".step3").show();
        $(".circle3").remove();
        $(".imgtap1").remove();
        $(".nav_img2").html('<div class="circle">'+'</div>');
        $(".nav_img3").append('<'+'img class="imgtap2" src="../img/state01.png"'+'>');

    })

});