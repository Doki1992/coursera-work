	var server = require("./server");
	var router = require("./router");
	var requestHandler = require("./requestHandlers.js");
	var handle ={};
	handle["/"] = requestHandler.F_began;
	handle["/iniciar"] = requestHandler.F_began;
	handle["/subir"] = requestHandler.F_upload;
	handle["/cliente"] = requestHandler.G_cliente;
	server.iniciar(router.F_router,handle);
