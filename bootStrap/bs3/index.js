var navli = $(".navBar>ul>li");
navli.bind("click",
    function () {
        navli.css('border-bottom', '0em solid black');
        $(this).css('border-bottom', '0.2em solid black');
    });
$(function () {
    getH();
    $(window).resize(function () {
        getH();
    })
    setIn();

})
function getH() {
    $(".banner").css({
        "width": $(window).width() - 18,
        "height": $(window).height()
    });
    $(".bg_black").css({
        "width": $(window).width(),
        "height": $(window).height()
    });
}

function setIn() {
    var i = 1;
    /*clearInterval(aa);*/
    var aa = setInterval(function () {

            if (i > 3) {
                i = 1;
            }
            $(".banner").css("background-image", 'url(images/slide-img' + i + '.jpg)').addClass("class_my");

            i++;
        },
        3000);
}
$(".changing-over>li").click(function () {
    $(".changing-over>li").removeClass("active");
    $(this).addClass("active");
});