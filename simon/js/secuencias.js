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

}

function reset(){
	location.reload();

}

function mostrarArray(){	/* <------ COMPROBACIÓN DE SECUENCIA HUM */
	alert("H: "+secuencia_man + '\n' + "C: "+ secuencia_com);
}



function demo(){

demoVerde = setInterval(
			function(){
			botonSimonVerde2.style.background="white";

			clearInterval(demoVerde);
		}, 
		
		200);
		
demoRojo =  setInterval(
			function(){
			botonSimonRojo2.style.background="white";

			clearInterval(demoRojo);
		}, 
		
		400);

demoAzul =  setInterval(
			function(){
			botonSimonAzul2.style.background="white";

			clearInterval(demoAzul);
		}, 
		
		600);

demoAmarillo =  setInterval(
			function(){
			botonSimonAmarillo2.style.background="white";

			clearInterval(demoAmarillo);
		}, 
		
		800);


/* --------------- APAGADO ------------------- */


demoVap=	setInterval(
			function(){
			botonSimonVerde2.style.background="green";

			clearInterval(demoVap);
		}, 
		
		1000);
		
demoRap =	setInterval(
			function(){
			botonSimonRojo2.style.background="red";

			clearInterval(demoRap);
		}, 
		
		1200);

demoAap =	setInterval(
			function(){
			botonSimonAzul2.style.background="blue";

			clearInterval(demoAap);
		}, 
		
		1400);

demoAmAp =	setInterval(
			function(){
			botonSimonAmarillo2.style.background="yellow";
			clearInterval(demoAmAp);
		}, 
		
		1600);
}




