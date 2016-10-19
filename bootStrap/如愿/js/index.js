$(function () {
    /*百度地图*/
    baiduMap();
    banner();//banner页延迟函数
    bg();//背景图
    carousel();
});
$(".navbar-nav>li").click(function () {
    $(".navbar-nav>li").removeClass("active");
    $(this).addClass("active");
});
function carousel() {
    var leftA = $(".left-arrow");
    var rightA = $(".right-arrow");
    // console.log(activeWid);
    var carouselActive = $(".carousel-active");//图片容器
    function lunbo() {
        rightA.click(function () {
            var divWidth = $(".index-card").innerWidth() * 2 + 60;//每次滚动的距离div宽度+间距；
            var activeWid = $(".carousel-active").innerWidth() - 990;//到这个位置回滚到第一张；
            if (divWidth <= activeWid) {
                carouselActive.css({"marginLeft": -divWidth, "transition": "all 0.3s linear"});
                divWidth += 330;//叠加的增加left值
            } else if (divWidth >= activeWid) {
                carouselActive.css({"marginLeft": "0px", "transition": "all 0.3s linear"});
                divWidth = 330;//重置divWidth的值
                // console.log(activeWid);
            }
        })

        leftA.click(function () {
            var indexW = $(".index-card").innerWidth() + 30;
            var divWidth = 0;
            var activeW = $(".carousel-active").width();
            if (divWidth <= activeW) {
                carouselActive.css({"marginLeft": divWidth, "transition": "all 0.3s linear"});
                divWidth += 330;
            } else if (divWidth >= indexW) {
                carouselActive.css({"marginLeft": "0px", "transition": "all 0.3s linear"});
            }
            /* divWidth+=divWidth;*/
            // console.log(divWidth);
        })


    }

    lunbo();
    /*自动轮播*/
}

/*滚动条事件*/
$(window).scroll(function () {
    var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;//兼容浏览器//火狐//苹果//ie
    /*获取div离顶部的距离*/
    var carouselOffset = $('.carousel').offset();//获取carousel的scrollTop值;
    var team_introductionOffset = $('.team_introduction').offset();
    var coreOffset = $('.core_members').offset();
    var mapOffset = $('.map').offset();
    var footerOffset = $('footer').offset();
    /*轮播滚动条特效*/
    if (scrollTop > carouselOffset.top - ($(".controller").height() / 2)) {
        $(".controller").css({"margin-top": "10%", "transition": "all 0.4s linear"});
    }
    if (scrollTop > team_introductionOffset.top - ($(".team_introduction").height() / 2)) {
        $(".introduction_img > img").css({"margin-left": "28%", "transition": "all 0.4s linear"});
        $(".introduction").css({"margin-right": "28%", "transition": "all 0.4s linear"});
    }
    if (scrollTop > coreOffset.top - ($(".core_members").height()) / 2) {
        setInterval(function () {
            $(".part_d").eq(0).css({"margin-top": "10%", "transition": "all 0.4s linear"});
        }, 0);
        setInterval(function () {
            $(".part_d").eq(1).css({"margin-top": "10%", "transition": "all 0.4s linear"});
        }, 500);
        setInterval(function () {
            $(".part_d").eq(2).css({"margin-top": "10%", "transition": "all 0.4s linear"});
        }, 1000);
        setInterval(function () {
            $(".core_part>h1").css({"margin-top": "2%", "transition": "all 0.4s linear"});
        }, 1300);
    }
    if (scrollTop > mapOffset.top - ($(".map").height()) / 2) {
        $(".map_baidu").css({"margin-top": "0%", "transition": "all 0.4s linear"});
        $(".contact").css({"margin-top": "0%", "transition": "all 0.4s linear"});
    }
    /*获取div离顶部的距离end*/
    if (scrollTop > carouselOffset.top) {
        $("#up").show();
    } else {
        $("#up").hide();
    }
});
//点击logo回到顶部
$(".logo").click(function () {
    $("body,html").stop().animate({"scrollTop": 0}, 600);
})


//回到顶部
$("#up").click(function () {
    $("body,html").animate({scrollTop: 0}, 600);
    return false;
});

/*banner页延迟函数*/
function banner() {
    function bannerInterval(className, Left, mytime) {
        setInterval(function () {
            $(className).css({"margin-left": Left, "transition": "all .4s linear"});
        }, mytime);
    }

    function bannerIntervalTop(className, top, mytime) {
        setInterval(function () {
            $(className).css({"margin-top": top, "transition": "all .4s linear"});
        }, mytime);
    }

    bannerInterval(".icon_name", "16%", 600);
    bannerInterval(".banner-content > h1", "0%", 900);
    bannerInterval(".banner-content > h2", "0%", 1200);
    bannerIntervalTop(".download_ios", "4em", 1500);
    bannerIntervalTop(".donwload_and", "2em", 1800);
}

/*背景图*/
function bg() {
    setInterval(function () {
        $("header").css({"background-size": "100%", "transition": "all 1.1s linear", "background-position": "0% 0%"});
    }, 2000)
}
