let divsAmount = 16;

const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener("click", submitAnAmount);

function submitAnAmount() {
    container.innerHTML = '';
    divsAmount = parseInt(prompt("Enter a number of a grid (max 100): "));
    if (Number.isInteger(divsAmount) && divsAmount <= 100) {
        generateGrid();
    } else { 
        alert("Enter a valid number");
    }
}

function generateGrid() {
    generateColums();
    generateRows();
    darkenDivsAutomatically();
}

function generateColums() {
    divGenerator("column", "", divsAmount, container);
}

function generateRows() {
    const columns = document.querySelectorAll('.column');
    columns.forEach(column => {
        divGenerator("row", "div", divsAmount, column);
    });
}

function divGenerator(className, textContent, numberOfDivs, parentHTML) {
    for (let i = 0; i < numberOfDivs; i++) {
        const div = document.createElement('div');
        div.classList.add(className);
        div.textContent = `${textContent}`;
        parentHTML.appendChild(div);
    }
}

function darkenDivsAutomatically() {
    const columns = document.querySelectorAll('.column');
    columns.forEach((column, colIndex) => {
        const rows = column.querySelectorAll('.row');
        rows.forEach(row => {
            const step = Math.floor(255 / (divsAmount - 1));
            const darkness = step * colIndex;
            row.style.backgroundColor = `rgb(${255 - darkness}, ${255 - darkness}, ${255 - darkness})`;
        });
    });
}

generateGrid();
