const gridContainer = document.getElementById('grid-container');
let boxes;

for (let i = 0; i < 256; i++) {
    boxes = document.createElement('div');
    boxes.setAttribute('style','width:30px;height:30px;border-bottom: 0.5px solid black;border-right:0.5px solid black ;')
    gridContainer.append(boxes);

}



