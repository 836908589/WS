/**
 * Created by ThinkPad User on 2016/10/26.
 */
function getFormatTime(time,format){
    var t = new Date(time);
    var tf = function(i){return (i < 10 ? '0' : '') + i};
    return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function(a){
        switch(a){
            case 'yyyy':
                return tf(t.getFullYear());
                break;
            case 'MM':
                return tf(t.getMonth() + 1);
                break;
            case 'mm':
                return tf(t.getMinutes());
                break;
            case 'dd':
                return tf(t.getDate());
                break;
            case 'HH':
                return tf(t.getHours());
                break;
            case 'ss':
                return tf(t.getSeconds());
                break;
        }
    });
}
$(function () {
    $.ajax({
        type:"post",
        url:"http://192.168.191.3:8080/ROOT/mainByWeb",
        dataType:"JSONP",
        async:true,
        jsonp:"callbackparam",
        jsonpCallback: "success_jsonpCallback",
        success:function (json) {
            if (json.code == "0") {
                console.log("获取成功");
          /*      var email=json.data.user.email;
                console.log(email);
                $(".email").append(email)*/



var span=$(".email");
                var wish=json.data.wishes;
                // var a = eval("wish");
                // console.log(wish);
                console.log(wish.length)
                for(var x=0;x<wish.length;x++){
                    var da =   "<table><tr>" +
                        " <td>"+(parseInt(x)+1)+"</td>"+
                        " <td>"+wish[x].title+"</td>"+
                        " <td>"+getFormatTime(wish[x].startTime, 'yyyy-MM-dd HH:mm:ss')+"</td>"+
                        " <td>"+getFormatTime(wish[x].endTime, 'yyyy-MM-dd HH:mm:ss')+"</td>"+
                        " <td>"+wish[x].status+"</td>"+
                        + "</tr></table>";
                    span.append(da);
                }
                // for(var x in wish){
                //     // console.log();
                //     // console.log(wish[x]);
                //     var da="<table><tr>" +
                //         " <td>"+(parseInt(x)+1)+"</td>"+
                //         " <td>"+wish[x].title+"</td>"+
                //         " <td>"+wish[x].startTime+"</td>"+
                //     " <td>"+wish[x].endTime+"</td>"+
                //         " <td>"+wish[x].status+"</td>"+
                //         + "</tr></table>";
                //     span.append(da);
                //
                //
                // }


            } else {
                console.log("获取失败");
            }
        }
    })
})
