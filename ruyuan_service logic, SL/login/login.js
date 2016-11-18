/**
 * Created by ThinkPad User on 2016/10/20.
 */
/*改变验证码*/
$(".chengeImg").click(function () {
    $("#imgSrc").attr("src", $("#imgSrc").attr("src") + "?nocache=" + new Date().getTime());
});
/*改变验证码end*/
function loginAction() {
    var password = $("#password").val();
    var userName = $("#userName").val();
    var veryCode = $("#veryCode").val();
    $(".Form").find("span").text("");
    if (userName == null || userName == undefined || userName.trim() == "") {
        $("#userName").next("span").text("用户名不能为空");
        return;
    }
    if (userName.length < 2 || userName.length > 9) {
        $("#userName").next("span").text("用户名长度不合法");
        return;
    }
    if (password == null || password == undefined || password.trim() == "") {
        $("#password").next("span").text("密码不能为空");
        return;
    }
    if (password.length < 6) {
        $("#password").next("span").text("密码必须大于6位");
        return;
    }
    if (veryCode == null || veryCode == undefined || veryCode.trim() == "") {
        $("#veryCode").next("span").text("验证码不能为空");
        return;
    }
    $.ajax({
            type: "post",
            url: "http://192.168.191.3:8080/ROOT/loginByWeb",
            dataType: "JSONP",
            synec: true,
            data: {
                "userName": userName,
                "password": hex_md5(password), /*提交给后台的数据格式*/
                "loginDevice": "",//判断用pc还是移动端登录;
                "veryCode": veryCode,//验证码;
            },
            jsonp: "callbackparam",//callbackparam后台接受数据的类型的函数//jsonp传到后太的参数//callbackparam名字随便取但是要和后台参数一致
            jsonpCallback: "success_jsonpCallback",//固定的写法//jsonp回调函数的参数//
            success: function (json) {
                // alert(json.msg);    //返回0成功//返回1失败；
                if (json.code == "0") {
                    console.log("登陆成功");
                    window.location.href="../index/index.html";
                } else {
                    console.log("登陆成功！");
                }
                ;

            },
            error: function () {
                alert("后台的哥子睡戳了");//后台的哥子睡戳了
            }
        }
    )
}



/*window.onload = function(){

 //首先获得body中的3个input元素
 var msg = document.getElementById("userName");
 var getData = document.getElementById("getData");
 var setData = document.getElementById("setData");

 setData.onclick = function()//存入数据
 {
 if(msg.value)
 {
 localStorage.setItem("data", msg.value);
 alert("信息已保存到data字段中");
 }
 else
 {
 alert("信息不能为空");
 }
 }

 getData.onclick = function()//获取数据
 {
 var msg = localStorage.getItem("data");
 if(msg)
 {
 alert("data字段中的值为：" + msg);
 }
 else
 {
 alert("data字段无值！");
 }
 }
 }
 */   /*<input id="msg" type="text"/>
 <input id="setData" type="button" value="保存数据"/>
 <input id="getData" type="button" value="获取数据"/>*/


