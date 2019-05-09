"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //Node Modul wird importiert
console.log("Starting server"); //console.log gibt "starting server" in Konsole aus.
let port = Number(process.env.PORT); //Port als Zahlenwert der Variable
if (!port)
    port = 8100; //Web Server Port wird festgelegt
let server = Http.createServer(); //Server wird erstellt
server.addListener("request", handleRequest); //handleRequest wird bei anfrage ausgeführt
server.addListener("listening", handleListen); // 
server.listen(port); //Server hört auf Port, führt ggf Listener aus
function handleListen() {
    console.log("Listening"); //console.log gibt "Listening" auf der Konsole aus.
} //Ende Funktion
function handleRequest(_request, _response) {
    console.log("I hear voices!"); //console.log gibt I hear Voices in Konsole aus. 
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*"); //anfragen bekommen serverzugriff
    _response.write(_request.url); //
    _response.end(); //Dem Server wird signalisiert, dass die Antwort vollständig ist
}
//Ende namespace
//# sourceMappingURL=Server.js.map