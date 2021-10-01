const playerFactory = (name) => {
  
  return {name}
}

const gameBoard = (function() {
  let board = ['x','o','x','o','x','o','x','o','x'];
  return {board}
})();

const displayController = (function() {
  
  //cache DOM
  let gameBoardContainer = document.querySelector("#game-board");

  renderGameBoard();

  function renderGameBoard() {
    let counter = 0;
    gameBoard.board.forEach(() => {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      let cellText = document.createElement("div");
      cellText.classList.add("cell-text");
      cellText.textContent = gameBoard.board[counter];
      cell.appendChild(cellText);
      gameBoardContainer.appendChild(cell);
      counter++;
    });
  }
})();