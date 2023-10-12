const gridContainer = document.getElementById('grid-container');
const newGrid = document.querySelector('.new-grid');


function changeBgtoRed(e) {
    e.target.classList.add('change-to-red');
}

let grid;
grid = 16;


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
