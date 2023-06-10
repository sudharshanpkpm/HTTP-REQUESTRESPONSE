 var http = require("http");
function samp(request,response)
{
    response.writeHead(200,{"content-Type":"text/html"});
    response.write("Hello");
    response.end("<html><body>Url was:"+request.url+"</body></html>");
    console.log("Request received");
}
http.createServer(samp).listen(8000);
console.log("Server running");