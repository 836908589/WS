/**
 * Created by ThinkPad User on 2016/9/26.
 */
$(document).ready(function () {
 var in_input=$(".input_text>input");
 var placeholder= $(".input_text>span");
    function placeh(i) {
        in_input.eq(i).focus(function () {
            placeholder.eq(i).hide();
        });
        in_input.eq(i).blur(function () {
            placeholder.eq(i).show();

        });
    }

    for(var i=0;i<=in_input.length;i++){
        placeh(i);
    }


});
