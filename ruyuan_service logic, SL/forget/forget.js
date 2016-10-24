/**
 * Created by ThinkPad User on 2016/10/21.
 */


function box() {
    var box="<div class='bomb_box'>" +
        "<img src="+"../img/成功.png"+">"+
        "<span>已成功发送至您的邮箱</span>"
        +"</div>";
    $(".pub-main").append(box);
}

$(window).resize(function(){
    myCenter();
});
function myCenter() {
    var bomb_w=$(".bomb_box").width()/2;
    var bomb_h=$(".bomb_box").height()/2;
    var width=$(window).width();
    var height=$(window).height();
    // alert(width/2-bomb_w);
    $(".bomb_box").css({"left":width/2-bomb_w,"top":height/2-bomb_h});
};
myCenter();

function  forget() {
    var forgrt_id = $(".forgrt-id").val();
    var forget_email = $(".forget-email").val();
    $.ajax({
        type: "post",
        url: "http://192.168.191.2:8080/SpringHibernateWish/user/findPassWordByWeb",
        dataType: "JSONP",
        synec: true,
        data: {
            "userName": forgrt_id,
            "email": forget_email
        },
        jsonp:"callbackparam",
        success:function (json) {
            alert(json.code);
            if(json.code=="0"){
                box();
            }else{

            }
        },
        error:function () {
            alert("错误");

        }
    })
}
