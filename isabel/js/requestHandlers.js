var exec = require("child_process").exec;
var fs = require('fs');
var cliente = require('./cliente')

function F_began(response) {
	console.log("do something");
	   fs.exists("C:/Users/twa/coursera-work/site/index.html", function(existe){
	   	console.log("entre arriba de existe");
      if(existe){
      	console.log("entre a existe");
         fs.readFile("C:/Users/twa/coursera-work/site/index.html", function(error, contenido_archivo){
            if(error){
               response.writeHead(500, 'text/plain');
               response.end('Error interno.');
            }else{
            	console.log("entre en el else");
               response.writeHead(200, {'Content-Type': 'text/html'});
               response.write(contenido_archivo);
               response.end();
            }
         });
      }else{
      	 console.log("no existe");
         response.writeHead(404, 'text/plain');
         response.end('Error 404. El enlace no existe o ha dejado de existir.');
      }
   });

	
}

function F_upload(response) {
	console.log("upload something");
	 response.writeHead(200, {"Content-Type": "text/html"});
     response.write("Hola Subir");
     response.end();
}

function G_cliente(response) {
	cliente.F_cliente(response);
}

exports.F_began=F_began;
exports.F_upload=F_upload;
exports.G_cliente=G_cliente;
