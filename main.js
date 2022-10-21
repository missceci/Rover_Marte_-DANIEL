canvas = document.getElementById('my_canvas');
ctx = canvas.getContext("2d");

// 4. Agrega el tamño de rover
rover_width =100;
rover_height =90;

background_image = "mars.jpg";

rover_image = "rover.png";

// 5. Agrega la ubicación de rover
rover_x =  10;
rover_y =   10;

// 6. Define una función con el nombre add
function add() {

	// 7. Define una variable con la imagen nueva utilizando new Image()
	background_imgTag = new Image(); 

	// Establece la función para cargar esta variable
	background_imgTag.onload = uploadBackground; 

	 // Carga la imagen
	background_imgTag.src = background_image;  

	// 8. Define una variable con la imagen nueva utilizando new Image()
	rover_imgTag = new Image; 
	rover_imgTag.onload = uploadRover; 
	rover_imgTag.src = rover_image;   
}


// 9. Declara la función uploadBackground
function uploadBackground() {
	
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

// 10. Declara la función uploadBackground
function uploadRover() {
	
	// 11. Completa los parámentros para la ubicación y tamaño de la imagen de rover
	ctx.drawImage(rover_imgTag,rover_x ,rover_y,rover_width,rover_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e){

	// 12. Utiliza e.keyCode para obtener el valor de la tecla que presione el usuario
	//KEY ES CON k MINUSCULA
	keyPressed = e.keyCode;

	console.log(keyPressed);

		// 13. Completa los valores de ASCII correspondientes para cada condición
		if(keyPressed == '38'){
			up();
			console.log("up");
		}

		if(keyPressed == '40'){
			down();
			console.log("down");
		}

		if(keyPressed == '37'){
			left();
			console.log("left");
		}

		if(keyPressed == '39'){
			right();
			console.log("right");
		}
}

// 14. Declara la función up
         function up(){

	if(rover_y >=0){
		// 15. Cambia el valor de rover_y para que rover img pueda avanzar hacia ARRIBA
		rover_y = rover_y-10     ;
		console.log("When up arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		 uploadBackground();
		 uploadRover();
	}
}

function down(){
	if(rover_y <=500){

		// 16. Cambia el valor de rover_y para que rover img pueda avanzar hacia ABAJO
		rover_y = rover_y+10      ;
		console.log("When down arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadRover();
	}
}

function left(){

	if(rover_x >= 0){

		// 17. Cambia el valor de rover_y para que rover img pueda avanzar hacia la IZQUIERDA
		rover_x =    rover_x-10   ;
		console.log("When left arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		 uploadRover();
	}
}

// 18. Declara la función right

             function right(){
				
	if(rover_x <= 700){

		// 19. Cambia el valor de rover_y para que rover img pueda avanzar hacia la DERECHA
		rover_x = rover_x+10     ;
		console.log("When right arrow is pressed,  x = " + rover_x + " | y = " +rover_y);
		uploadBackground();
		uploadRover();
   }
}
	