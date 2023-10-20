const gridContainer = document.getElementById('grid-container');
const newGrid = document.querySelector('.new-grid');


function changeBgtoRed(e) {
    e.target.classList.add('change-to-red');
}

let grid,theInput;
grid = 16;
function userInput(theInput) {
    theInput = parseInt(prompt('Enter a number between 1 and 100:'));
    const freshGrid = parseInt(theInput);
    if (freshGrid >=1 && freshGrid <= 100) {
        grid = freshGrid;
    } else if (freshGrid < 1 || freshGrid > 100) {
        alert('Invalid Sumayya')
        return userInput();
    }

    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
    theGrid(grid);
} 

newGrid.addEventListener('click',userInput);

function theGrid(grid) {
    for (let i = 0; i < grid**2; i++) {
        const boxes = document.createElement('div');
        boxes.classList.add(`box-${i+1}`)
        boxes.style.width = `${480/grid}px`;
        boxes.style.height = `${480/grid}px`;
        boxes.style.borderBottom = `0.5px solid black`;
        boxes.style.borderRight = `0.5px solid black`;
        boxes.addEventListener('click',changeBgtoRed);
        boxes.addEventListener('dragover',changeBgtoRed);
        gridContainer.append(boxes);
    }
}
theGrid(grid);