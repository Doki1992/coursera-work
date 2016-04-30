var Client = require('node-rest-client').Client;
 
var client = new Client();

function F_cliente(response) {
var datos="";
var args = {
	data: { test: "hello" },
	headers: { "Content-Type": "application/json" }
};
 
client.post("http://localhost:4757/RestServicio.svc/json/23", args, function (data, response) {
	// parsed response body as js object 
	console.log(data);
	datos = data;

});
    response.writeHead(200, {"Content-Type": "text/plain"});
	response.Write(datos);
	response.end();
}

exports.F_cliente= F_cliente;