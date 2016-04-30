var http = require('http');
var url = require('url');

function iniciar(route,handle){//inicia funcion iniciar
var onrequest = function (request,response) {//inicia var onrequest
	var pathname = (url.parse(request.url).pathname == '/') ? '/index.html' : url.parse(request.url).pathname;
	console.log("Peticion para"+pathname+" recibida");
	 
	route(handle,pathname,response);
}; //fin de var onrequest

http.createServer(onrequest).listen(5555);

console.log("servidor encendido");

}//fin funcion  iniciar 

exports.iniciar = iniciar;