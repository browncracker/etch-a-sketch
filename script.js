//set vars for default items
let container = document.querySelector('#container');
let gridBtn = document.querySelector('#gridSelector');
//generate default grid
generateGrid(16);

//set event listener for all squares
let squares = document.querySelectorAll('.square');
squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background: black;');
    });
});

//set event listener for button
gridBtn.addEventListener('click', () => {
    let newSize = prompt('Enter grid size from 1-100 squares');
    if (newSize>=1 && newSize <=100) {
        clearGrid();
        generateGrid(newSize);
    } else {
        prompt('Enter grid size from 1-100 squares');
    }
});

//function to generate new grid of size gridSize x gridSize
function generateGrid(gridSize) {
    for (i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        for (j = 0; j < gridSize; j++) {
            let square = document.createElement('div');
            square.classList.add('square');
            row.appendChild(square);
        }
        container.appendChild(row);
    }
    console.log('run');
}

//function to clear grid
function clearGrid() {
    container.innerHTML = '';
}