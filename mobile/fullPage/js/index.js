/**
 * Created by ThinkPad User on 2016/9/23.
 */
$(function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        speed:1000,
        setWrapperSize :true,
        effect : 'slide',
        touchMoveStopPropagation : false,
        mousewheelControl:true,
        /*当Swiper的父元素变化时，例如window.resize，Swiper更新。*/
        pagination : '.swiper-pagination',
        observer:true,
        observeParents:true,




        onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
            swiperAnimateCache(swiper); //隐藏动画元素
            swiperAnimate(swiper); //初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper){
            swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
        }
    });


})
