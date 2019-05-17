import * as Http from "http"; 
import * as Url from "url";
import * as Mongo from "mongodb";


Mongo.connect("mongodb+srv://MarvinKuebler:<WolfGang>@marvinkueblereia-xrtq4.mongodb.net/test?retryWrites=true", MongoCallBack);

function MongoCallBack(): {

}


console.log("Starting server"); 
let port: number = Number(process.env.PORT); 
if (!port) 
	port = 8100; 
let server: Http.Server = Http.createServer(); 
server.addListener("request", handleRequest);  
server.addListener("listening", handleListen); 
server.listen(port); 

function handleListen(): void { 
	console.log("Listening");
} 

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { 
	console.log("I hear voices!"); 
	console.log(_request.url);
	_response.setHeader("content-type", "text/html; charset=utf-8"); 
	_response.setHeader("Access-Control-Allow-Origin", "*"); 

	// _response.write(_request.url); // _request.url wird in _response.write in der URL geschrieben, vom Server so empfangen --- 2.4 Was hinter Schrägstrich in der URL eingetragen wird, steht dann auch im Browser 
	//console.log (_request.url);

	_response.write("<h2>That's Your Order</h2>");
	let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
	for (let key in url.query)
		_response.write("<p>" + key + url.query[key] + "</p>");



	_response.end(); 
} 