const gameBoard = (function() {

  //cache DOM
  let gameBoardContainer = document.querySelector("#game-board");
  

  let board = [];

  return {board, gameBoardContainer}
})();


const game = (function() {

  //cache DOM
  let body = document.querySelector("body");
  let resetButton = document.querySelector("#reset-button");
  let victoryBanner = document.querySelector("div #victory-banner");

  let XOtoggle = 0;
  let gb = gameBoard.board;

  renderGameBoard();
  resetButton.addEventListener("click", resetGame);

  function resetGame() {
    gb = [];
    XOtoggle = 0;
    clearGameBoard();
    renderGameBoard();
    if (body.children[2]) {
      body.removeChild(body.lastChild);
    }
  }

  function renderGameBoard() {
    let counter = 0;
    while (counter < 9){
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.id = counter;
      cell.addEventListener("click", editGameBoard);
      let cellText = document.createElement("div");
      cellText.classList.add("cell-text");
      cellText.textContent = gb[counter];
      cell.appendChild(cellText);
      gameBoard.gameBoardContainer.appendChild(cell);
      counter++;
    }
  }

  function clearGameBoard() {
    while (gameBoard.gameBoardContainer.lastChild) {
      gameBoard.gameBoardContainer.removeChild(gameBoard.gameBoardContainer.lastChild);
    }
  }

  function editGameBoard() {
    if (gb[this.id] === undefined) {
      gb[this.id] = chooseXO();
      clearGameBoard();
      renderGameBoard();
      checkIfWin();
    } else {return}
  }

  function chooseXO() {
    if (XOtoggle === 0) {
      XOtoggle++;
      return "x"
    } else if (XOtoggle === 1) {
      XOtoggle--;
      return "o"
    }
  }

  function checkIfWin() {
    switch(true) {
      case gb[0] === "x" && gb[1] === "x" && gb[2] === "x":
        victoryMessage("x");
        break;
      case gb[3] === "x" && gb[4] === "x" && gb[5] === "x":
        victoryMessage("x");
        break;
      case gb[6] === "x" && gb[7] === "x" && gb[8] === "x":
        victoryMessage("x");
        break;
      case gb[0] === "x" && gb[3] === "x" && gb[6] === "x":
        victoryMessage("x");
        break;
      case gb[1] === "x" && gb[4] === "x" && gb[7] === "x":
        victoryMessage("x");
        break;
      case gb[2] === "x" && gb[5] === "x" && gb[8] === "x":
        victoryMessage("x");
        break;
      case gb[0] === "x" && gb[4] === "x" && gb[8] === "x":
        victoryMessage("x");
        break;
      case gb[2] === "x" && gb[4] === "x" && gb[6] === "x":
        victoryMessage("x");
        break;

      case gb[0] === "o" && gb[1] === "o" && gb[2] === "o":
        victoryMessage("o");
        break;
      case gb[3] === "o" && gb[4] === "o" && gb[5] === "o":
        victoryMessage("o");
        break;
      case gb[6] === "o" && gb[7] === "o" && gb[8] === "o":
        victoryMessage("o");
        break;
      case gb[0] === "o" && gb[3] === "o" && gb[6] === "o":
        victoryMessage("o");
        break;
      case gb[1] === "o" && gb[4] === "o" && gb[7] === "o":
        victoryMessage("o");
        break;
      case gb[2] === "o" && gb[5] === "o" && gb[8] === "o":
        victoryMessage("o");
        break;
      case gb[0] === "o" && gb[4] === "o" && gb[8] === "o":
        victoryMessage("o");
        break;
      case gb[2] === "o" && gb[4] === "o" && gb[6] === "o":
        victoryMessage("o");
        break;
      }

    function victoryMessage(xORo) {
      let victoryBanner = document.createElement("div");
      victoryBanner.id = "victory-banner";
      victoryBanner.textContent = `WOOHOO! ${xORo} WINS!`;
      body.appendChild(victoryBanner);


      disableBoard();

      function disableBoard() {
        let counter = 0;
        let gbChildren = gameBoard.gameBoardContainer.children;
        while (counter < 9) {
          gbChildren[counter].removeEventListener("click", editGameBoard);
          counter++;
        }
      }
    }
  }
})();