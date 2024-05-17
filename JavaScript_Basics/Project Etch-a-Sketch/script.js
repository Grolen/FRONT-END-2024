let divsAmount = 256;

const container = document.querySelector('.container');
const button = document.querySelector('button');

button.addEventListener("click", submitAnAmount)

function submitAnAmount() {
    container.innerHTML = '';
    divsAmount = parseInt(prompt("Enter a number of a grid (max 100): "))
    if(Number.isInteger(divsAmount) && divsAmount <= 100) {
        generateGrid(divsAmount)
    } else { 
        alert("Enter a valid number")
    }
}

function generateGrid(usersNumber) {
    for (let i = 1; i <= usersNumber; i++) {
        const divColumn = document.createElement('div');
        divColumn.classList.add("column")
        container.appendChild(divColumn);
        for( let j = 1; j <= usersNumber; j++) {
            const divRow = document.createElement('div');
            divRow.classList.add("row");
            divRow.textContent = `div`;
            divColumn.appendChild(divRow)
        }
  }
}
