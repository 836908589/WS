/**
 * Created by ThinkPad User on 2016/10/22.
 */
$(".new-pass").focus(function () {
    $("#notice-lenght").text("");
});
$(".new-re-pass").focus(function () {
    $("#notice-pass").text("");
});
function notice() {
    var notice = $("#notice-pass");
    var notice_lenght = $("#notice-lenght");
    var pass = $(".new-pass").val();
    var repass = $(".new-re-pass").val();
    var patrn =/^[A-Za-z0-9]{6,20}$/;
    if (pass =="" || repass =="") {
        notice_lenght.text("密码不能为空！");
    } else if (patrn.test(pass)==false) {
        notice_lenght.text("6-20位字母数字组合!");
    }
    else if (pass != repass) {                   /*密码相同对比*/
        notice.text("您输入的密码和上一次不相同！");
    }


}