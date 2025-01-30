const gridContainer = document.getElementById("grid-container");
const newGrid = document.querySelector(".new-grid");
const clearCanvas = document.querySelector(".clear");
const eraser = document.querySelector(".eraser");
const controls = document.getElementById("colour-controls");
const rainbowButton = document.querySelector('.rainbowButton > button');

let color = "black";
let rainbowMode = false;

rainbowButton.addEventListener('click',()=>{
	rainbowMode ? rainbowMode = false : rainbowMode = true;
});

function changeBg(e) {
	const element = e.target;
	rainbowMode ? element.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})` 
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

//Color Picker
controls.addEventListener("click", (event) => {
	const button = event.target;
	color = button.value;
	rainbowMode = false;
});

//Eraser functionality
eraser.addEventListener("click", () => {
	color = "white";
	rainbowMode = false;
});

clearCanvas.addEventListener("click", () => {
	let childNodes = gridContainer.childNodes;
	childNodes.forEach((childNode) => {
		childNode.style.backgroundColor = "white";
	});
});

newGrid.addEventListener("click", generateNewGrid);

gridContainer.addEventListener("touchmove", (e) => {
	e.preventDefault();
});

gridContainer.addEventListener("click",(e)=>{
	if (e.target.classList.contains('box')) {
		changeBg(e);
	}
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
		boxes.setAttribute("draggable", true);
		boxes.addEventListener("dragover", changeBg);
		boxes.addEventListener("touchmove", changeBg);
		gridContainer.append(boxes);
	}
}
generateGrid(16);
