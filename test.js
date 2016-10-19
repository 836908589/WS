/**
 * Created by ThinkPad User on 2016/9/19.
 */
var http = require("http");
var url=require("url");
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("ok!!!wd");
    response.end();
}).listen(8080);
console.log("监听8080端口");
