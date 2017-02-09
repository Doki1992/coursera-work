function  F_router(handle,path,response) {//inicia funcion
	console.log("a punto de rutear una peticion para "+path);
	if(typeof handle[path]==='function'){
		handle[path](response);
	}else{
		console.log("no se encontro manipulador para "+path);
		response.writeHead(404, {"Content-Type": "text/html"});
        response.write("404 No Encontrado");
        response.end();
		
	}
};//fin variable

exports.F_router=F_router;