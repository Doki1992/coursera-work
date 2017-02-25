alert("Hola, al final de página puse una galeria, FRIA!!!. En contenidos esta el primer libro que te habia dicho. FRIA!!!");


function agregar_elemento() {

	var uno  = get(4);
	alert(uno);
	var padre = document.getElementById();
	var nodo = document.createElement('div');
	var texto = document.createTextNode("hola este es un texto de prueba");
	nodo.appendChild(texto);
	var cuerpo = document.getElementById("cuerpo");		
	cuerpo.appendChild(nodo);
}

var contador = 0;

function addi(){
	var padre = document.getElementById("imagen");
	padre.setAttribute('src',uno[get(++contador)]);
	
}

function addr(){
	var padre = document.getElementById("imagen");
	padre.setAttribute('src',uno[get(--contador)]);	
}

var uno = ["images/uno.jpeg", "images/dos.jpeg", "images/tres.jpeg", "images/cuatro.jpeg","images/levi.png"];

function get(numero){
 if(numero>3){
 	contador = 0;
 	return  0;
 }
 if (numero<0) {contador = 3;return 3} 	
 return numero;
}

