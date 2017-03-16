function cambiar_estado(quien) {
	var puntero = document.getElementById(quien);
	puntero.setAttribute('class','active');
	desactivar(quien);
}

function desactivar(quien) {
	cosas = ["si","ti","pi"]
	for (var i = cosas.length - 1; i >= 0; i--) {
		if (quien != cosas[i]) {
			var puntero = document.getElementById(cosas[i]);
			puntero.setAttribute('class','');	
		}	
	}	
}
var x;
x=$(document);
x.ready(inicializarEventos);

function inicializarEventos()
{
  var x=$("#si");
  x.click(ocultar_recuadro);
  x=$("#ti");
  x.click(mostrar_cuadro);
  x=$("#pi");
  x.click(mostrar_cuadro);
}

function mostrar_cuadro(quien) {
	
	var cont = "";
	if (quien == "si") {
		cont="información sobre el segundo informe";	
		alert(cont)	;
	}else if (quien=="ti") {
		cont="información sobre el  tercero informe";		
		alert(cont)	;
	}else{
		cont="información sobre el primera informe";
		alert(cont)	;
	}
	  
}

function ocultar_recuadro() {
	 var x=$("#cuadro");
     x.hide("slow")	
}
