let container = document.getElementById('#container');

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
}