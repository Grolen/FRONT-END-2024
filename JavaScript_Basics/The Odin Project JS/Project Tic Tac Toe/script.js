//Factory Functions and the Module Pattern

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
// logs { discordName: "@josh", reputation: 2 }

// const Gameboard = (function () {
//   const board = Array(9).fill(null);
//   const getBoard = () => board;
//   return { getBoard };
// })();

// const GameStart = (function () {
//   const body = document.querySelector("body");
//   const board = Gameboard.getBoard();
//   const startingBoard = [];
//   for (let i = 0; i < board.length; i++) {
//     const cell = `<button class="cell-btn-${i + 1}">${i + 1}</button>`;
//     startingBoard.push(cell);
//   }
//   startingBoard.forEach((cellBtn) => {
//     body.innerHTML += cellBtn;
//   });
//   const testFunc = () => {
//     console.log("works");
//   };
//   const cellsDOM = document.querySelectorAll("button");
//   cellsDOM.forEach((cellDOM) => {
//     cellDOM.addEventListener("click", testFunc);
//   });
// })();

const Gameboard = (function () {
  const container = document.querySelector(".container");
  const board = Array(9).fill(null);

  const getBoard = () => board;

  const clearBoard = () => board.fill(null);

  const createTemplate = (index) => {
    const button = document.createElement("button");
    button.classList.add(`cell-btn`, `cell-btn-${index}`);
    button.innerText = "press me to change this text on X";
    container.appendChild(button);

    button.addEventListener("click", changeText);

    function changeText(event) {
      event.preventDefault();
      const targetedBtn = event.target;
      targetedBtn.innerText = "X (well done!)";
    }

    return button;
  };

  const newRoundBoard = () => {
    return board.map((cell, index) => {
      return createTemplate(index + 1);
    });
  };

  const newArray = newRoundBoard();
})();
