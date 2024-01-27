let container = document.querySelector('#container');
let gridBtn = document.querySelector('#gridSelector');
generateGrid(16);

let squares = document.querySelectorAll('.square');

squares.forEach((square) => {
    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background: black;');
    });
});

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