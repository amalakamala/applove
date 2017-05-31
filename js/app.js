/*
 * Archivo principal de funcionalidad de JS
 */
 (function main(){
 	var boxes = Array.from(document.getElementsByClassName("box-services"));

 	var modal = document.getElementById("box-service-modal");

 	var bodyModal, close, img;


 	boxes.forEach(function(box){
 	
 		box.addEventListener("click",function(){
 			modal.innerHTML="";
 			bodyModal = document.createElement("div");
 			bodyModal.classList.add("model-body");
 			bodyModal.innerHTML = box.innerHTML;

 			modal.appendChild(bodyModal);
 			modal.classList.remove("hide"); 			


 			close= document.createElement("div"); /* Se agrega la X*/
 			close.classList.add("close");
 			img = document.createElement("img");
 			img.setAttribute("src","https://www.iconfinder.com/data/icons/geomicons/32/672366-x-128.png");

 			close.appendChild(img);
 			modal.appendChild(close);

 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		}); 		
 	});
 })();


(function images(){
 	var lasImagenes = Array.from(document.getElementsByClassName("img-proyecto"));
 	var modal = document.getElementById("img-proyecto-modal");

 	var cuerpoModal, close, icono;


 	lasImagenes.forEach(function(c){
 		c.addEventListener("click",function(){
 			modal.innerHTML="";
 			cuerpoModal = document.createElement("div");
 			cuerpoModal.classList.add("modal-completo");

 			cuerpoModal.innerHTML = c.innerHTML;

 			modal.appendChild(cuerpoModal);
 			modal.classList.remove("hide");

 			texto = Array.from(document.getElementsByClassName("n-producto"));
 			texto.forEach(function(b){
 				b.classList.add("hide");
 			}); 			
			
 			close = document.createElement("div"); 
 			close.classList.add("close-img");
 			icono = document.createElement("i");
 			icono.setAttribute("class","fa fa-times-circle");
 			icono.setAttribute("aria-hidden","true");

 			close.appendChild(icono);
 			modal.appendChild(close);

 			close.addEventListener("click", function(){
 				modal.classList.add("hide");
 			});

 		});
		
 	});
 })();