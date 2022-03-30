let activePlayer= 'X'; //whose turn//
let selectedSquares = [];

// function for placing x or o //
function placeXorO(squareNumber) {
	if (!selectedSquare.some(element=> element.includes(squareNumber))) {
		let select=document.getElementById(squareNumber);
		if (activePlayer=== 'X') {
			select.style.backgroundImage= 'url("/x.png")';
		} else {
			select.style.backgroundImage= 'url("/o.png")';
		}
		//squarenumber and activeplayer concatentated//
		selectedSquares.push(squareNumber + activePlayer);
		// check for win //
		checkWinConditions();
		// change active player //
		if (activePlayer=== 'X') {
			activePlayer='O';
		} else {
			// change activeplayer to x //
			activePlayer='X';
		}
		
		// sound //
		audio('/place.mp3');
		if (activePlayer === 'O') {
			disableClick();
			setTimeout (fucntion () { computersTurn(); }, 1000)
		}
		return true;
	}
	function computersTurn() {
		//boolean for while loop //
		let success= false;
		let pickASquare;
		while(!success) {
			pickASquare= String(Math.floor(Math.random() * 9));
			if (placeXorO(pickASquare)) {
				//calls funcion //
				placeXorO(pickASquare);
				// change boolean, end loop //
				success = true;
			};
		}
	}
}

// lines. selectedSquares //
function checkWinConditions() {
	// X 0,1,2 condition //
	if  (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
	// X 3,4,5 condition //
	else if  (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
	// X 6,7,8 condition //
	else if  (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
	// X 0,3,6 condition //
	else if  (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
	// X 1,4,7 condition //
	else if  (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
	// X 2,5,8 condition //
	else if  (arrayIncludes('0X', '1X', '2X')) { drawWinLine(508, 50, 508, 558) }
	// X 6,4,2 condition //
	else if  (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
	// X 0,4,8 condition //
	else if  (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
	// O 0,1,2 condition //
	else if  (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
	// O 3,4,5 condition //
	else if  (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
	// O 6,7,8 condition //
	else if  (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
	// O 0,3,6 condition //
	else if  (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
	// O 1,4,7 condition //
	else if  (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
	// O 2,5,8 condition //
	else if  (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
	// O 6,4,2 condition //
	else if  (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
	// O 0,4,8 condition //
	else if  (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
	
	else if (selectedSquares.length >=9) {
		// tie sound //
		audio('/tie.mp3');
		setTimeout(function () { resetGame(); }, 1000);
	}
	
	function arrayIncludes(squareA, squareB, squareC) {
		// check for 3 in a row //
		const a= selectedSquares.includes(squareA)
		const b= selectedSquares.includes(squareB)
		const c= selectedSquares.includes(squareC)
		if (a === true && b === true && c === true) { return true }
	}
}

// makes body elemtn temp. unclickable //
function disbaleClick() {
	body.style.pointerEvents='none';
	setTimeout(function() {body.style.pointerEvents= 'auto';}, 1000);
}

// function takes string parameter of path set earlier for place sound //
function audio(audioURL) {
	let audio= new Audio(audioURL) ;
	// play sound //
	audio.play();
}

function drawWinLine(coordX1, coordY1,coordX2, coordY2) {
	const canvas = document.getElementById('win-lines')
	const c = canvas.getContext('2d');
	// start of a lines x axis //
	let x1 = coordX1,
		y1 = coordY1,
		x2 = coordX2,
		y2 = coordY2,
		x = x1,
		y = y1;
		
		// function interacts with canvas //
		function animateLineDrawing() {
			const animationLoop = requestAnimationFrame(animateLineDrawing);
			c.clearRect(0,0,608,608)
			c.beginPath();
			c.moveTo(x1, y1)
			c.lineTo(x, y)
			c.lineWidth = 10;
			c.strokeStyle = 'rgba (70, 255, 33, .8)';
			c.stroke();
			if (x1 <= x2 && y1 <= y2) {
				if (x < x2){ x+= 10; }
				if (y < y2) { y+= 10; }
				if (x >= x2 && y >= y2) { cance1AnimationFrame (animationLoop) ; }
			}
			
			if (x1 <= x2 && y1 >= y2) {
				if (x < x2) { x += 10; }
				if (y > y2) { y -= 10; }
				if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop) ; }
			}
		}
		
		// function clears canvas after win line is drawn //
		function clear() {
			// line starts animation loop //
			const animationLoop = requestAnimationFrame(clear);
			c.clearRect(0,0,608,608);
			//stop animation loop //
			cancelAnimationFrame(animationLoop);
		}
		disableClick();
		// plays win sound //
		audio('/winGame.mp3');
		// calls main animation loop //
		animateLineDrawing();
		setTimeout(function () { clear(); resetGame(); }, 1000);
}
// function resets game if tie or win occurs //
function resetGame() {
	for (let i= 0; i < 9; i++) {
		let square = document.getElementById(String(i))
		//remove element from backgroundImage //
		square.style.backgroundImage = ''
	}
	selectedSquares = [];
}

				