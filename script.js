const gridContainer = document.getElementById('grid-container');
const newGrid = document.querySelector('.new-grid');
const clearCanvas = document.querySelector('.clear');
const eraser = document.querySelector('.eraser');
const controls = document.getElementById("colour-controls");
// const rainbowButton = document.querySelector('.rainbowButton > button');

let grid = 16;
let color = "black";
let isDragging = false;

function changeBg(e) {
    const element = e.target;
    element.style.backgroundColor = color;
}

// function random(number) {
//     return Math.floor(Math.random() * number + 1);
//   }
  
// function rainbowMode(e) {
//     e.target.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
// }

function generateNewGrid(userInput) {
    userInput =prompt('Enter a number from 1 to 100:');
    const freshGrid = parseInt(userInput);
    if (freshGrid >=1 && freshGrid <= 100) {
        grid = freshGrid;
    } else if (freshGrid < 1 || freshGrid > 100) {
        alert('Invalid Input.')
        return generateNewGrid();
    }
    
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    generateGrid(grid);
} 

//Color Picker
controls.addEventListener("click", (event) => {
    const button = event.target;
    color = button.value;
});

//Eraser functionality
eraser.addEventListener('click',()=>{
    color = 'white';
});

clearCanvas.addEventListener('click',()=>{
    let childNodes = gridContainer.childNodes;
    childNodes.forEach((childNode)=>{childNode.style.backgroundColor = 'white'})
});



newGrid.addEventListener('click',generateNewGrid);

function generateGrid(grid) {
    for (let i = 0; i < grid**2; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add(`box`)
        boxes.classList.add(`${i+1}`)
        boxes.style.width = `${480/grid}px`;
        boxes.style.height = `${480/grid}px`;
        boxes.style.borderBottom = `0.5px solid black`;
        boxes.style.borderRight = `0.5px solid black`;
        boxes.setAttribute('draggable',true)
        boxes.addEventListener('click',changeBg);
        boxes.addEventListener('dragover',changeBg);
        gridContainer.append(boxes);
    }
}
generateGrid(grid);


