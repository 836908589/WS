/**
 * Created by ThinkPad User on 2016/10/25.
 */
var os = require("os");
var fs=require("fs");

var result = os.arch(); //查看操作系统平台

console.log(result);
//fs模块提供writeFile函数，可以异步的将数据写入一个文件, 如果文件已经存在则会被替换。用法如下：
//例：fs.writeFile(filename, data, callback)
var data = "通过node.js添加的信息";
fs.readFile('node.txt','utf-8',function (err,data) {
    if (err) throw err;
    console.log(data); //文件被保存
});