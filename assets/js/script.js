// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Display the game and set main menu to display none and the game to block when click on open game button
// Open rules modal when click on rules button
// Get after-win-element for afterWin function
// Close read rules modal when clicking on span

document.addEventListener("DOMContentLoaded", () => {
  const openGameBtn = document.getElementById("open-game-btn");
  const readRulesBtn = document.getElementById("read-rules-btn");
  const theGame = document.querySelector(".the-game");
  const mainMenu = document.querySelector(".main-menu");
  const rulesModal = document.getElementsByClassName("modal")[0];

  openGameBtn.addEventListener("click", () => {
    theGame.style.display = "block";
    mainMenu.style.display = "none";
  });

  readRulesBtn.addEventListener("click", () => {
    rulesModal.style.display = "flex";
    theGame.style.display = "none";
  });
  const rulesSpan = document.getElementsByClassName("close")[0];
  rulesSpan.onclick = function () {
    rulesModal.style.display = "none";
  };
  runGame();
});

/**runGame() contains all the the game functions and all the game button controls. Lets
 * the player mark and the choose a column. Automatically tests for winner. Activates a
 * winning modal and keeps track of the score. Manipulates p1-turn div.
 */
function runGame() {
  let gameArrays = [[], [], [], [], [], [], []];
  let turn = 0;
  const gameColumns = document.getElementsByClassName("game-column");
  const afterWinModal = document.getElementsByClassName("modal")[1];
  let p1Score = 0;
  let p2Score = 0;
  let nextPlayer1 = document.getElementById("p1-turn");
  let nextPlayer2 = document.getElementById("p2-turn");
  let nextPlayer1Style = getComputedStyle(nextPlayer1);
  let nextPlayer1Color = nextPlayer1Style.backgroundColor;
  document.getElementsByClassName("player-turn-text")[0].innerText =
    "Next Play";

  /**Functions purpose is to guide the players when placing their game coins.
   * When the mouse hovers over a column, the function selects all the boxes
   * in the column that are not marked as "active". If it is player 1's turn,
   * the last non active box in the column is highlighted in red. If it is player 2's turn, the
   * last unmarked box in the column is highlighted in yellow. When the mouse leaves the column,
   * the highlighting is removed.
   */
  function markBox() {
    let markedColumns = document.querySelectorAll(".game-column");
    markedColumns.forEach(function (column) {
      column.addEventListener("mouseover", function () {
        let boxes = Array.from(column.querySelectorAll(".game-box"));
        boxes = boxes.filter((x) => !x.classList.contains("active"));

        if (nextPlayer1Color == "rgb(255, 0, 0)") {
          if (boxes.length > 0) {
            boxes.at(-1).style.backgroundColor = "red";
          }
        } else {
          if (boxes.length > 0) {
            boxes.at(-1).style.backgroundColor = "yellow";
          }
        }
      });
      column.addEventListener("mouseout", function () {
        let boxes = Array.from(column.querySelectorAll(".game-box"));
        boxes = boxes.filter((x) => !x.classList.contains("active"));
        column.style.backgroundColor = "initial";
        if (boxes.length > 0) {
          boxes.at(-1).style.removeProperty("background-color");
        }
      });
    });
  }
  /** Adds event listeners to the columns and listens for click. Based
   * on if #p1-turn background-color is rgb(255,0,0) or not it will be used
   * as argument when calling the addCoin function. Only allows the player
   * to chose a column if the playercolumn is not full. Manipulates player-
   * turn-text.
   */
  function choseColumn() {
    for (let i = 0; i < gameColumns.length; i++)
      gameColumns[i].addEventListener("click", function () {
        if (gameArrays[i].length < 6) {
          if (nextPlayer1Color == "rgb(255, 0, 0)") {
            addCoin(i, "red");
            nextPlayer1.style.backgroundColor = "white";
            nextPlayer1Color = "";
            nextPlayer2.style.backgroundColor = "yellow";
            document.getElementsByClassName("player-turn-text")[1].innerText =
              "Next Play";
            document.getElementsByClassName("player-turn-text")[0].innerText =
              "";
          } else {
            addCoin(i, "yellow");
            nextPlayer2.style.backgroundColor = "white";
            nextPlayer1Color = "rgb(255, 0, 0)";
            nextPlayer1.style.backgroundColor = "red";
            document.getElementsByClassName("player-turn-text")[0].innerText =
              "Next Play";
            document.getElementsByClassName("player-turn-text")[1].innerText =
              "";
          }
        }
      });
  }
  markBox();
  choseColumn();

  /**Pushes a value of either "red" or "yellow" (color) to the gameArray which
   * represents the column clicked by the player. Result should be a variation of the following:
   * gameArrays = [['red','yellow'], ['yellow'], ['red','red'], [], [], [], []].
   * Runs the displayCoins and checkWinner functions.
   */
  function addCoin(playerColumn, color) {
    gameArrays[playerColumn].push(color);
    displayCoins(color);
    checkWinner(color);
    turn = 0;
    for (let i = 0; i < gameArrays.length; i++) {
      turn += gameArrays[i].length;
    }
  }

  /**Displays the players chosen position. Loops through all the gameArrays 
and checks if each element is equal to the color parameter (red/yellow). 
If a match is found, it changes the background color of the corresponding 
HTML element and adds the class "active" to it.
*/
  function displayCoins(color) {
    for (let i = 0; i < gameArrays.length; i++) {
      for (let j = 0; j < gameArrays[i].length; j++) {
        if (gameArrays[i][j] == color) {
          document.getElementById(`x${j + 1},y${i + 1}`).style.backgroundColor =
            color;
          document
            .getElementById(`x${j + 1},y${i + 1}`)
            .classList.add("active");
        }
      }
    }
  }
  /**Checks all result variations. Draw, Horizontal, Vertical and Diagonal.*/
  function checkWinner(color) {
    //Draw, will occur when the whole board is filled.
    if (turn > 40) {
      let draw = true;
      afterWinMenu(color, draw);
    }

    //Iterates through all gameArray values.
    for (let i = 0; i < gameArrays.length; i++) {
      for (let j = 0; j < gameArrays[i].length; j++) {
        //Checks Horizontal win
        if (
          i < 4 &&
          gameArrays[i][j] == color &&
          gameArrays[i + 1][j] == color &&
          gameArrays[i + 2][j] == color &&
          gameArrays[i + 3][j] == color
        ) {
          gameScore(color);
          afterWinMenu(color);
        }

        //Checks vertical win
        if (
          gameArrays[i][j] == color &&
          gameArrays[i][j + 1] == color &&
          gameArrays[i][j + 2] == color &&
          gameArrays[i][j + 3] == color
        ) {
          gameScore(color);
          afterWinMenu(color);
        }

        //Checks Diagonal win ⇗
        if (
          i < 4 &&
          gameArrays[i][j] == color &&
          gameArrays[i + 1][j + 1] == color &&
          gameArrays[i + 2][j + 2] == color &&
          gameArrays[i + 3][j + 3] == color
        ) {
          gameScore(color);
          afterWinMenu(color);
        }

        //Checks Diagonal win ⇖
        if (
          i > 2 &&
          gameArrays[i][j] == color &&
          gameArrays[i - 1][j + 1] == color &&
          gameArrays[i - 2][j + 2] == color &&
          gameArrays[i - 3][j + 3] == color
        ) {
          gameScore(color);
          afterWinMenu(color);
        }
      }
    }
  }
  /**Adds Score after a win and displays it in the score area.*/
  function gameScore(color) {
    if (color == "red") {
      p1Score += 1;
      document.getElementById("p1-score").innerText = `Score ${p1Score}`;
    }
    if (color == "yellow") {
      p2Score += 1;
      document.getElementById("p2-score").innerText = `Score ${p2Score}`;
    }
  }
  /**Resets the score to 0 and displays it to score area*/
  function resetScore() {
    let p1Score = 0;
    let p2Score = 0;
    document.getElementById("p1-score").innerText = `Score ${p1Score}`;
    document.getElementById("p2-score").innerText = `Score ${p2Score}`;
  }

  /**Resets the game board, nulls gameArrays, removes "active" status from 
all boxes and sets the background color to white.*/
  function resetBoard() {
    let boxes = document.querySelectorAll(".game-box");
    boxes.forEach(function (box) {
      box.classList.remove("active");
      box.style.backgroundColor = "white";
    });
    gameArrays = [[], [], [], [], [], [], []];
  }

  /**Displays afterWinModal and presents draw or winner based on values 
passed on by checkWinner(). Runs resetBoard upon clicking on closing span.*/
  function afterWinMenu(color, draw) {
    if (draw) {
    }
    afterWinModal.style.display = "flex";
    const afterWinSpan = document.getElementsByClassName("close")[1];
    afterWinSpan.onclick = function () {
      afterWinModal.style.display = "none";
      resetBoard();
    };

    if (draw == true) {
      document.getElementById("winner-text").innerText = `It's a draw`;
    } else {
      document.getElementById("winner-text").innerText = `${color} Wins!`;
    }
    newRound();
  }
  /**Lets the user close the after-win-menu and start a new round by clicking
   * the new round button. Will resetBoard upon click.*/
  function newRound() {
    const newRoundButton = document.getElementById("new-round-button");
    newRoundButton.onclick = function () {
      afterWinModal.style.display = "none";
      resetBoard();
    };
  }
  /**Reloads the page which reactivates the main menu*/
  function quitGame() {
    window.location.reload();
  }

  //Add event listeners to game buttons
  const resetBoardBtn = document.getElementById("reset-board-btn");
  resetBoardBtn.addEventListener("click", resetBoard);
  const resetScoreBtn = document.getElementById("reset-score-btn");
  resetScoreBtn.addEventListener("click", resetScore);
  const quitGameBtn = document.getElementsByClassName("quit-game-btn");
  quitGameBtn[0].addEventListener("click", quitGame);
  quitGameBtn[1].addEventListener("click", quitGame);
}
