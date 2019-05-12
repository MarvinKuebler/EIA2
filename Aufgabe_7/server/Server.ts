import * as Http from "http"; //Node Modul wird importiert
import * as Url from "url";
 
	console.log("Starting server"); //console.log gibt "starting server" in Konsole aus.

	let port: number = Number(process.env.PORT); //Port als Zahlenwert der Variable
	if (!port) 

		port = 8100; //Web Server Port wird festgelegt

	let server: Http.Server = Http.createServer(); //Server wird erstellt
	server.addListener("request", handleRequest); //handleRequest wird bei anfrage ausgeführt
	server.addListener("listening", handleListen); // 
	server.listen(port); //Server hört auf Port, führt ggf Listener aus

	function handleListen(): void { //void= Gibt nichts zurück
		console.log("Listening"); //console.log gibt "Listening" auf der Konsole aus.
	} //Ende Funktion

	function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void { //void= gibt nichts zurück, 
		console.log("I hear voices!"); //console.log gibt I hear Voices in Konsole aus. 

		_response.setHeader("content-type", "text/html; charset=utf-8"); 
		_response.setHeader("Access-Control-Allow-Origin", "*"); //anfragen bekommen serverzugriff

		_response.write(_request.url); //
		console.log(_request.url);
		
		_response.write("<h5>Hier sind deine bestellten Artikel:</h5>");
		let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
		for (let key in url.query) {
			_response.write("<p>" + key + ":" + url.query[key] + "</p", "<br>");
		}
	

		
		_response.end(); //Dem Server wird signalisiert, dass die Antwort vollständig ist --- server beenden strg + c 
	} 
	
 //Ende namespace
