var secuencia_man = [];
var secuencia_com = [];


function inicio(){
	botonJugar.disabled=true;
	botonInicio.disabled=true;
	pulsadorVerde.disabled=true;
	pulsadorRojo.disabled=true;
	pulsadorAmarillo.disabled=true;
	pulsadorAzul.disabled=true;
}


function boton1(){
		secuencia_man.push(0);
 		/* log_h.innerHTML="<p>"+secuencia_man+"</p>"; 	<----------- LOG */

 		if(pulsadorVerde.disabled==true){
 			pulsadorVerde.style="";
 		}else{
 			luzVerde();
 		}
	}

function boton2(){
		secuencia_man.push(1);
		/* log_h.innerHTML="<p>"+secuencia_man+"</p>";    <----------- LOG */

		if(pulsadorVerde.disabled==true){
 			pulsadorVerde.style="";
 		}else{
 			luzRoja();
 		}
	}

function boton3(){
		secuencia_man.push(2);
 		/* log_h.innerHTML="<p>"+secuencia_man+"</p>";   <----------- LOG */

 		if(pulsadorVerde.disabled==true){
 			pulsadorVerde.style="";
 		}else{
 			luzAmarillo();
 		}
	}

function boton4(){
		secuencia_man.push(3);
		/* log_h.innerHTML="<p>"+secuencia_man+"</p>";    <----------- LOG */

		if(pulsadorVerde.disabled==true){
 			pulsadorVerde.style="";
 		}else{
 			luzAzul();
 		}
	}


function enviarHum(){

			if(secuencia_man.length != secuencia_com.length || secuencia_com.length==""){

			setTimeout(function(){
				pulsadorVerde.style.background="radial-gradient(lightgreen, green)";
				pulsadorRojo.style.background="radial-gradient(pink,red)";
				pulsadorAmarillo.style.background="radial-gradient(white, yellow)";
				pulsadorAzul.style.background="radial-gradient(lightblue, blue)";
				botonJugar.style.background="radial-gradient(lightgreen, green)";
			},400);

				setTimeout(function(){
				location.reload();
			},2000);
			}

			else if(JSON.stringify(secuencia_man) == JSON.stringify(secuencia_com)) {
/*				log_h.innerHTML+="<p>OK</p>";    <----------- LOG */
				secuencia_man=[];
		
			genCom();

			} else{
			setTimeout(function(){
				pulsadorVerde.style.background="radial-gradient(lightgreen, green)";
				pulsadorRojo.style.background="radial-gradient(pink,red)";
				pulsadorAmarillo.style.background="radial-gradient(white, yellow)";
				pulsadorAzul.style.background="radial-gradient(lightblue, blue)";
				botonJugar.style.background="radial-gradient(lightgreen, green)";
			},400);

				setTimeout(function(){
				location.reload();
			},2000);

				for(i = 0; i < secuencia_com.length; i++);
			}

		luzJugar();
	
}



function genCom(){
	secuencia_com.push(Math.round(Math.random()*3));
	 /* log_c.innerHTML="<p>"+secuencia_com+"<p>";   <----------- LOG */

	document.getElementById("botonInicio").style.transform="translate(-2px,-2px)";
	botonInicio.style.boxShadow="none";

		jugadaCom();

}


function reset(){

	pulsadorVerde.disabled=true;
	pulsadorRojo.disabled=true;
	pulsadorAmarillo.disabled=true;
	pulsadorAzul.disabled=true;
	botonJugar.disabled=true;
	botonInicio.disabled=true;
	location.reload();

}


function mostrarArray(){	/* <------ COMPROBACIÓN DE SECUENCIA HUM */
	alert("H: "+secuencia_man + '\n' + "C: "+ secuencia_com);
}


function luzVerde(){

			setTimeout(function(){
			pulsadorVerde.style.background="radial-gradient(lightgreen, green)";
			},0);

		setTimeout(function(){
			pulsadorVerde.style.background="";
		},250);

}


function luzRoja(){

			setTimeout(function(){
			pulsadorRojo.style.background="radial-gradient(pink,red)";
			},0);

		setTimeout(function(){
			pulsadorRojo.style.background="";
		},250);

}


function luzAmarillo(){

			setTimeout(function(){
			pulsadorAmarillo.style.background="radial-gradient(white, yellow)";
			},0);

		setTimeout(function(){
			pulsadorAmarillo.style.background="";
		},250);

}


function luzAzul(){

			setTimeout(function(){
			pulsadorAzul.style.background="radial-gradient(lightblue, blue)";
			},0);

		setTimeout(function(){
			pulsadorAzul.style.background="";
		},250);

}

function luzJugar(){

			setTimeout(function(){
			botonJugar.style.background="radial-gradient(lightgreen, green)";
			},0);

		setTimeout(function(){
			botonJugar.style.background="";
		},250);

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

				tiempo=900;

				for(j=0; j < secuencia_com.length; j++){

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
						
						setTimeout(function(){
							luzJugar();
						},tiempo+50);
}

function OnOff(){

	demo();

	document.getElementById("switchOn").style.transform="translate(10px)";	
	switchOn.style.boxShadow="-10px 0px #535353";

	pulsadorVerde.disabled=false;
	pulsadorRojo.disabled=false;
	pulsadorAmarillo.disabled=false;
	pulsadorAzul.disabled=false;
	botonInicio.disabled=false;
	botonJugar.disabled=false;
	botonDemo.disabled=true;
	switchOn.disabled=true;


}

function OffOn(){
	switchOn.style="";
}