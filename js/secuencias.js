var secuencia_man = [];
var secuencia_com = [];



function boton1(){
		secuencia_man.push(0);
		log_h.innerHTML="<p>"+secuencia_man+"</p>"; 
	}

function boton2(){
		secuencia_man.push(1);
		log_h.innerHTML="<p>"+secuencia_man+"</p>";   /* <----------- LOG */
	}

function boton3(){
		secuencia_man.push(2);
		log_h.innerHTML="<p>"+secuencia_man+"</p>";   /* <----------- LOG */
	}

function boton4(){
		secuencia_man.push(3);
		log_h.innerHTML="<p>"+secuencia_man+"</p>";   /* <----------- LOG */
	}


function enviarHum(){

			if(secuencia_man.length != secuencia_com.length || secuencia_com.length==""){
				alert("ERROR");

				location.reload();
			}

			else if(JSON.stringify(secuencia_man) == JSON.stringify(secuencia_com)) {
				log_h.innerHTML+="<p>OK</p>";   /* <----------- LOG */
				secuencia_man=[];
		
			genCom();

			} else{

				alert("no!" + '\n' +"H: "+ secuencia_man + '\n' +  "C: " + secuencia_com );
				location.reload();

				for(i = 0; i < secuencia_com.length; i++);
			}
	
}



function genCom(){
	secuencia_com.push(Math.round(Math.random()*3));
	log_c.innerHTML="<p>"+secuencia_com+"<p>";   /* <----------- LOG */

	document.getElementById("botoneraIniciar").style.transform="translate(5px)";
	botoneraIniciar.style.boxShadow="-3px -3px 2px black";

			/*	pulsador1.disabled=false;
				pulsador2.disabled=false;
				pulsador3.disabled=false;
				pulsador4.disabled=false;

	document.getElementById("enviarHum").disabled=false;  */

		jugadaCom();

}


function reset(){
	location.reload();

}


function mostrarArray(){	/* <------ COMPROBACIÓN DE SECUENCIA HUM */
	alert("H: "+secuencia_man + '\n' + "C: "+ secuencia_com);
}


function luzVerde(){

			setTimeout(function(){
			botonSimonVerde2.style.background="radial-gradient(#8AE234 10%, green 100%)";
			},500);

		setTimeout(function(){
			botonSimonVerde2.style.background="green";
		},900);

}


function luzRoja(){

			setTimeout(function(){
			botonSimonRojo2.style.background="radial-gradient(pink 10%, red 100%)";
			},500);

		setTimeout(function(){
			botonSimonRojo2.style.background="red";
		},900);

}


function luzAmarillo(){

			setTimeout(function(){
			botonSimonAmarillo2.style.background="radial-gradient(white 10%, yellow 100%)";
			},500);

		setTimeout(function(){
			botonSimonAmarillo2.style.background="yellow";
		},900);

}


function luzAzul(){

			setTimeout(function(){
			botonSimonAzul2.style.background="radial-gradient(lightblue 10%, blue 100%)";
			},500);

		setTimeout(function(){
			botonSimonAzul2.style.background="blue";
		},900);

}


function demo(){

	tiempo = 150;

			setTimeout(function(){
				luzVerde();

					setTimeout(function(){
						luzRoja();

						setTimeout(function(){
							luzAzul();

							setTimeout(function(){
								luzAmarillo();
							},tiempo);  // amarillo
						},tiempo); // azul

					},tiempo); // rojo

			},tiempo); // verde
}

				
function jugadaCom(){

				tiempo=500;

				for(j=0; j < secuencia_com.length; j++){


						if(secuencia_com[j-1] == secuencia_com[j]){
							tiempo = tiempo *1.2;
						}

						if(secuencia_com[j] == 0){

							setTimeout(function(){
								luzVerde();
							},tiempo);
						}

						if(secuencia_com[j] == 1){

							setTimeout(function(){
								luzRoja();
							},tiempo);
						}

						if(secuencia_com[j] == 2){

							setTimeout(function(){
								luzAmarillo();
							},tiempo);
						}

						if(secuencia_com[j] == 3){
							setTimeout(function(){
								luzAzul();
							},tiempo)
						}

						tiempo = tiempo+500;
				}
}