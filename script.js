const gridContainer = document.getElementById("grid-container");
const newGrid = document.querySelector(".new-grid");
const clearCanvas = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const controls = document.getElementById("colour-controls");
const rainbowButton = document.querySelector('.rainbowButton');
const colorPicker = document.querySelector('#color-picker');

let color = "black";
let rainbowMode = rainbowButton.checked;
let tracing = false;

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
	color = "white";
});

clearCanvas.addEventListener("click", () => {
	let childNodes = gridContainer.childNodes;
	childNodes.forEach((childNode) => {
		childNode.style.backgroundColor = "white";
	});
});

newGrid.addEventListener("click", generateNewGrid);


gridContainer.addEventListener("mousedown",(e)=>{
	if (e.target.classList.contains('box')) {
		changeBg(e);
	}
	tracing = true;
});


gridContainer.addEventListener('mouseover',(e)=>{

	if (e.target.classList.contains('box') && tracing) {
		changeBg(e);
	}
	
});

gridContainer.addEventListener('mouseup',()=>{
	tracing = false;
});

function generateGrid(grid) {
	for (let i = 0; i < grid ** 2; i++) {
		const boxes = document.createElement("div");
		boxes.classList.add(`box`);
		boxes.classList.add(`${i + 1}`);
		boxes.style.width = `${480 / grid}px`;
		boxes.style.height = `${480 / grid}px`;
		boxes.style.borderBottom = `0.5px solid black`;
		boxes.style.borderRight = `0.5px solid black`;
		gridContainer.append(boxes);
	}
}
generateGrid(16);
