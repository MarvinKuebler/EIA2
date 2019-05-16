"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
const Url = require("url");
console.log("Starting server");
let port = Number(process.env.PORT);
if (!port)
    port = 8100;
let server = Http.createServer();
server.addListener("request", handleRequest);
server.addListener("listening", handleListen);
server.listen(port);
function handleListen() {
    console.log("Listening");
}
function handleRequest(_request, _response) {
    console.log("I hear voices!");
    console.log(_request.url);
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");
    // _response.write(_request.url); // _request.url wird in _response.write in der URL geschrieben, vom Server so empfangen --- 2.4 Was hinter Schrägstrich in der URL eingetragen wird, steht dann auch im Browser 
    //console.log (_request.url);
    _response.write("<h2> Folgende Artikel sind soeben bei uns bestellt worden:</h2>");
    let url = Url.parse(_request.url, true);
    for (let key in url.query)
        _response.write("<p>" + key + url.query[key] + "</p>");
    _response.end();
}
//# sourceMappingURL=Server.js.map