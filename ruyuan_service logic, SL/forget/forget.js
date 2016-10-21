/**
 * Created by ThinkPad User on 2016/10/21.
 */
function  aa() {
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
        },
        error:function () {
            alert("错误")
        }
    })
}
