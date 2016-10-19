/**
 * Created by ThinkPad User on 2016/9/19.
 */
$(document).ready(function () {
    $("header").css({"height": $(window).height()});
    /* $(window).resize(function () {
     $("header").css({"height": $(window).height()});
     })*/
    banerAni();
    scroll();

    // alert($(window).width());//获取屏幕的宽度；

});
function banerAni() {
    function aniB(className,val,setTime) {
        setInterval(function () {
            $(className).animate({
                marginLeft: val,
            }, 800);
        },setTime);
    }
    if (true) {
        aniB(".logo","32%",0);
        aniB(".title_conta>h2","0%",400);
        setInterval(function () {
            $(".ios_down").animate({
                marginTop: "4%",
            }, 800)
        },800);
        setInterval(function () {
            $(".and_down").animate({
                marginTop: "4%",
            }, 800)
        },1200)

    }
}


function scroll() {
    $(window).scroll(function () {
        var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器//火狐//苹果//ie
        var carou = $('.carousel_container').offset().top;
        var team = $('.team_introduce').offset().top;
        var core = $('.core_members').offset().top;
        var map = $('.map').offset().top;
        var icp = $('.icp').offset().top;
        if (scrollTop>carou){
            $('.carousel_container').animate({
                opacity:"1",
            },1000)
        }

        if(scrollTop>team-($(".team_introduce").height() / 2)){
            if($(window).width()<=320){
                $(".team_left").animate({
                    marginLeft:"-24%",
                },800);
            }else {
                $(".team_left").animate({
                    marginLeft:"0%",
                },800);
            }
            if($(window).width()<=320){
                $(".team_right").animate({
                    marginRight:"-22%",
                    marginTop: "20%"
                },800)
            }else {
                $(".team_right").animate({
                    marginRight:"0%",
                },800)
            }

        }
        if(scrollTop>core-($(".core_members").height() / 2)){
            if($(window).width()<=320){
                $(".core_part>h1").animate({
                    opacity: "1"
                },500);
            }else {
                $(".core_part>h1").animate({
                    opacity: "1"
                },500);
                $(".part_d:nth-child(1)").animate({
                    marginTop: "3%"
                },800);
                $(".part_d:nth-child(2)").animate({
                    marginTop: "3%"
                },800);
                $(".part_d:nth-child(3)").animate({
                    marginTop: "3%"
                },800);
            }

        }

        if(scrollTop>map-($(".map").height() / 2)){
            $(".map_left").animate({
                marginLeft:"0%"
            },800),
                $(".map_right").animate({
                    left:"62%"
                },800)
        }

        if(scrollTop>map){
            $("footer>aside:nth-child(1)").animate({
                marginTop:"0%"
            },800)
            $("footer>aside:nth-child(2)").animate({
                marginTop:"0%"
            },1000)
        }

    });
}
