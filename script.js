const gridContainer = document.getElementById('grid-container');


function changeBg(e) {
    e.target.classList.add('change');
}
for (let i = 0; i < (16*16); i++) {
    const boxes = document.createElement('div');
    boxes.classList.add(i+1)
    boxes.classList.add('box')
    boxes.setAttribute('style','width:30px;height:30px;border-bottom: 0.5px solid black;border-right:0.5px solid black ;') 
    boxes.addEventListener('mouseover',changeBg)
    gridContainer.append(boxes);
    console.log(boxes);
}


