/*
 * Archivo principal de funcionalidad de JS
 */

 var lasImagenes = Array.from(document.getElementsByClassName("col-4"));

 lasImagenes.forEach(function(e){
 	e.addEventListener("click", boton)
 });


 function boton (){
 	alert("hola")
 }