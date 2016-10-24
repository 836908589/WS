/**
 * Created by ThinkPad User on 2016/10/24.
 */
function register() {
    var name = $("#user_name").val();
    var pass = $("#user_pass").val();
    var number = $("#user_number").val();
    var email = $("#user_email").val();
    $.ajax({
        type: "post",
        url: "http://192.168.191.2:8080/SpringHibernateWish/user/registerByWeb",
        dataType: "JSONP",
        synec: true,
        data: {
            "userName": name,
            "password": pass,
            "phone": number,
            "email": email
        },
        jsonp: "callbackparam",
        jsonpCallback: "success_jsonpCallback",
        success: function (json) {
            // alert(json.msg);
            if (json.code == "0") {
                console.log("注册成功");
            } else {
                console.log("失败");
            }
        },
        error: function () {
            alert("后台的哥子睡戳了");
        }
    });

}