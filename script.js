const gridContainer = document.getElementById('grid-container');


function changeBg(e) {
    e.target.classList.add('change');
}

let rowXColum =16;
for (let i = 0; i < (rowXColum**2); i++) {
    const boxes = document.createElement('div');
    boxes.classList.add(i+1)
    boxes.classList.add('box')
    boxes.setAttribute('style',`width:${480/rowXColum}px;height:${480/rowXColum}px;border-bottom: 0.5px solid black;border-right:0.5px solid black ;`) 
    boxes.addEventListener('click',changeBg)
    boxes.addEventListener('mouseover',changeBg)
    gridContainer.append(boxes);
}


