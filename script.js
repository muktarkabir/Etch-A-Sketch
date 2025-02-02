const gridContainer = document.getElementById("grid-container");
const newGrid = document.querySelector(".new-grid");
const clearCanvas = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const controls = document.getElementById("colour-controls");
const rainbowButton = document.querySelector('.rainbowButton');
const colorPicker = document.querySelector('#color-picker');
const gridToggleButton = document.querySelector('.gridlines-toggle');
const shadingToggleButton = document.querySelector('.shading-toggle');

let color = "black";
let rainbowMode = false;
let shadingMode = false;
let drawing = false;
let gridLines = true;

rainbowButton.addEventListener('change',()=>{
	rainbowMode = rainbowButton.checked;
});
shadingToggleButton.addEventListener('click',()=>{
	shadingMode = !shadingMode;
	if (shadingMode) {
	    removeGridlines();
		gridLines = false;	
		makeCellsTransparent();	
	} else {	
		makeCellsOpaque();
		gridLines = true;
		addGridLines();
	}
});

colorPicker.addEventListener('change',(e)=>{
	color = e.target.value;
	rainbowButton.checked = false;
});

function changeBackgroundColor(e) {
	const element = e.target;
	rainbowButton.checked ? element.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})` 
	:element.style.backgroundColor = color;
	if (shadingMode) increaseOpacityAmount(element);
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
		if (!gridLines) removeGridlines();
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
	if (shadingMode) {
		makeCellsTransparent();	
	} else{
		return;
	}
});

gridToggleButton.addEventListener('click',()=>{
	gridLines ?  removeGridlines() : addGridLines();     
	gridLines = !gridLines;
});

newGrid.addEventListener("click", generateNewGrid);


gridContainer.addEventListener("mousedown",(e)=>{
	if (e.target.classList.contains('box')) {
		changeBackgroundColor(e);
	}
	drawing = true;
});

gridContainer.addEventListener('mouseup',()=>{
	drawing = false;
});

gridContainer.addEventListener('mouseover',(e)=>{
	if (e.target.classList.contains('box') && drawing) {
		changeBackgroundColor(e);
	}	
});

function addGridLines(){
	gridContainer.childNodes.forEach((childNode) =>{
		childNode.style.borderBottom = `0.5px solid black`;
		childNode.style.borderRight = `0.5px solid black`;
	});
}

function removeGridlines() {
	gridContainer.childNodes.forEach((childNode) =>{
		childNode.style.border = `none`;
	});
}

function getOpacityAmount(element){
    return parseFloat(element.style.opacity);

}

function increaseOpacityAmount(element) {
   //calculate the element's opacity 
   //if the opacity level is less than 1.0
   // increase the element's opacity by 0.1
   if (getOpacityAmount(element) < 1.0) {
	   element.style.opacity = parseFloat(element.style.opacity) + 0.1;
   } else {
	   return;
   }
   //if the element's opacity is not less than 1.0 
   // dont do anything.
   
   }

   function makeCellsTransparent() {
	gridContainer.childNodes.forEach((child) => child.style.opacity = 0.0);
   }

   function makeCellsOpaque() {
	gridContainer.childNodes.forEach((child) => child.style.opacity = 1.0);
   }


function generateGrid(grid) {
	for (let i = 0; i < grid ** 2; i++) {
		const boxes = document.createElement("div");
		boxes.classList.add(`box`);
		boxes.style.width = `${480 / grid}px`;
		boxes.style.height = `${480 / grid}px`;
		boxes.setAttribute('draggable', 'false');
		addGridLines(boxes);
		gridContainer.append(boxes);
	}
}
generateGrid(16);
