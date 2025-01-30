const gridContainer = document.getElementById("grid-container");
const newGrid = document.querySelector(".new-grid");
const clearCanvas = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const controls = document.getElementById("colour-controls");
const rainbowButton = document.querySelector('.rainbowButton');
const colorPicker = document.querySelector('#color-picker');
const gridToggleButton = document.querySelector('.gridlines-toggle');

let color = "black";
let rainbowMode = rainbowButton.checked;
let tracing = false;
let gridLines = true;

rainbowButton.addEventListener('change',()=>{
	rainbowMode = rainbowButton.checked;
});

colorPicker.addEventListener('change',(e)=>{
	color = e.target.value;
	rainbowButton.checked = false;
});

function changeBg(e) {
	const element = e.target;
	rainbowButton.checked ? element.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})` 
	:element.style.backgroundColor = color;
}

function random(number) {
    return Math.floor(Math.random() * number + 1);
  }


function generateNewGrid(userInput) {
	userInput = prompt("Enter a number from 1 to 100:");
	const freshGrid = parseInt(userInput);
	if (freshGrid >= 1 && freshGrid <= 100) {
		gridContainer.innerHTML = '';
		generateGrid(freshGrid);
		gridContainer.childNodes.forEach((child) => {removeGridlines(child);
		});
	} else if (freshGrid < 1 || freshGrid > 100) {
		alert("Invalid Input.");
		return generateNewGrid();
	}

}

//Color buttons
controls.addEventListener("click", (event) => {
	const button = event.target;
	color = button.value;
	rainbowButton.checked = false;
});

//Eraser functionality
eraser.addEventListener("click", () => {
	rainbowButton.checked = false;
	color = "white";
});

clearCanvas.addEventListener("click", () => {
	let childNodes = gridContainer.childNodes;
	childNodes.forEach((childNode) => {
		childNode.style.backgroundColor = "white";
	});
});

gridToggleButton.addEventListener('click',()=>{
	gridContainer.childNodes.forEach((child) => {
		gridLines ?  removeGridlines(child) : addGridLines(child);
	});      
	gridLines = !gridLines;
});

newGrid.addEventListener("click", generateNewGrid);


gridContainer.addEventListener("mousedown",(e)=>{
	if (e.target.classList.contains('box')) {
		changeBg(e);
	}
	tracing = true;
});

gridContainer.addEventListener('mouseup',()=>{
	tracing = false;
});

gridContainer.addEventListener('mouseover',(e)=>{
	if (e.target.classList.contains('box') && tracing) {
		changeBg(e);
	}	
});

function addGridLines(elem){
	elem.style.borderBottom = `0.5px solid black`;
	elem.style.borderRight = `0.5px solid black`;
}

function removeGridlines(elem) {
	elem.style.border = 'none';
}


function generateGrid(grid) {
	for (let i = 0; i < grid ** 2; i++) {
		const boxes = document.createElement("div");
		boxes.classList.add(`box`);
		boxes.style.width = `${480 / grid}px`;
		boxes.style.height = `${480 / grid}px`;
		addGridLines(boxes);
		gridContainer.append(boxes);
	}
}
generateGrid(16);
