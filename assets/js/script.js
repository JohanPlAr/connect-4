// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Display the game and set main menu to display none when click on open game button
// Open rules modal when click on rules button
// Define after-win-modal for afterWin function
// Close read rules modal when clicking on span

document.addEventListener("DOMContentLoaded", function () {
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
  let span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    rulesModal.style.display = "none";
  };
  runGame();
});

//Contains the game functions
//Sets turns to 0
//Sets Score to 0
//Displays next play for user

function runGame() {
  let gameArrays = [[], [], [], [], [], [], []];
  let turn = 0;
  const gameColumns = document.getElementsByClassName("game-column");
  let p1Score = 0;
  let p2Score = 0;
  document.getElementById("p1-turn").style.backgroundColor = "red";
  document.getElementsByClassName("player-turn-text")[0].innerText =
    "Next Play";

  /*When the mouse hovers over a column, the function selects all the boxes 
in that column that are not already marked as "active" and logs them to 
the console. If it is player 1's turn (turn is even), the last unmarked 
box in the column is highlighted in red. If it is player 2's turn (turn 
    is odd), the last unmarked box in the column is highlighted in yellow. 
When the mouse leaves the column, the highlighting is removed.
  */
  function markBox() {
    let markedColumns = document.querySelectorAll(".game-column");
    markedColumns.forEach(function (column) {
      column.addEventListener("mouseover", function () {
        // column.style.backgroundColor = "cyan"; can be used to display marked column
        let boxes = Array.from(column.querySelectorAll(".game-box"));
        boxes = boxes.filter((x) => !x.classList.contains("active"));
        console.log(boxes);
        if (turn % 2 === 0) {
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
  /* Adds event listeners to the columns and listens for click. When a column is 
clicked the function will console.log the column and turn number. Based on 
turn either red or yellow will be used as argument when calling the addCoin
function. Only allows the player to chose a column if the playercolumn is not
full.
*/
  function choseColumn() {
    let playerColumn = 0;

    for (let i = 0; i < gameColumns.length; i++)
      gameColumns[i].addEventListener("click", function () {
        playerColumn = i;
        console.log(playerColumn);
        console.log(turn);
        if (gameArrays[playerColumn].length < 6) {
          if (turn % 2 === 0) {
            addCoin(playerColumn, "red");
            document.getElementById("p1-turn").style.backgroundColor = "white";
            document.getElementById("p2-turn").style.backgroundColor = "yellow";
            document.getElementsByClassName("player-turn-text")[1].innerText =
              "Next Play";
            document.getElementsByClassName("player-turn-text")[0].innerText =
              "";
          } else {
            addCoin(playerColumn, "yellow");
            document.getElementById("p2-turn").style.backgroundColor = "white";
            document.getElementById("p1-turn").style.backgroundColor = "red";
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

  /*Pushes a value of either "red" or "yellow" (color) to the gameArray which represents the  
 column clicked by the player. Result should look accordingly:
 gameArrays = [['red','yellow'], ['yellow'], ['red','red'], [], [], [], []]
 
 */
  //Runs the displayCoins and checkWinner functions.

  function addCoin(playerColumn, color) {
    gameArrays[playerColumn].push(color);
    turn += 1;
    displayCoins(color);
    checkWinner(color);
    console.log(gameArrays[playerColumn]);
  }

  /*Displays the players chosen position. Loops through all the gameArrays 
and checks if each element is equal to the color parameter (red/yellow). 
If a match is found, it changes the background color of the corresponding 
HTML element and adds the class "active" to it.

*/
  function displayCoins(color) {
    for (let i = 0; i < gameArrays.length; i++) {
      for (let j = 0; j < gameArrays[i].length; j++) {
        if (gameArrays[i][j] == color) {
          document.getElementById(
            `x${j + 1}, y${i + 1}`
          ).style.backgroundColor = color;
          document
            .getElementById(`x${j + 1}, y${i + 1}`)
            .classList.add("active");
        }
      }
    }
  }
  //Checks all result variations. Draw, Horizantal, Vertical and Diagonal.
  function checkWinner(color) {
    //Draw, will occur when the whole board is filled.
    //Resets turn to 0 and runs the afterWinMenu function.
    if (turn > 41) {
      turn = 0;
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
          console.log(`${color} wins`);
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
          console.log(`${color} wins`);
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
          console.log(`${color} wins`);
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
          console.log(`${color} wins`);
          gameScore(color);
          afterWinMenu(color);
        }
      }
    }
  }
  //Adds Score after a win and displays it in the score area.
  function gameScore(color) {
    if (color == "red") {
      p1Score += 1;
      document.getElementById("p1-score").innerText = `Score ${p1Score}`;
    }
    if (color == "yellow") {
      p2Score += 1;
      document.getElementById("p2-score").innerText = `Score ${p2Score}`;
    }
    console.log(p1Score, p2Score);
  }
  //Resets the score to 0 and displays it to score area
  function resetScore() {
    let p1Score = 0;
    let p2Score = 0;
    document.getElementById("p1-score").innerText = `Score ${p1Score}`;
    document.getElementById("p2-score").innerText = `Score ${p2Score}`;
  }

  /*Resets the game board, nulls gameArrays, removes "active" status from 
all boxes and sets the background color to white.*/
  function resetBoard() {
    turn = 0;
    let boxes = document.querySelectorAll(".game-box");
    boxes.forEach(function (box) {
      box.classList.remove("active");
      box.style.backgroundColor = "white";
    });
    gameArrays = [[], [], [], [], [], [], []];
  }

  function afterWinMenu(color, draw) {
    const afterWinModal = document.getElementsByClassName("modal")[1];
    resetBoard();
    if (turn > 41) {
      turn = 0;
    }
    afterWinModal.style.display = "flex";
    let span = document.getElementsByClassName("close")[1];
    span.onclick = function () {
      afterWinModal.style.display = "none";
    };

    if (draw == true) {
      document.getElementById("winner-text").innerText = `It's a draw`;
    } else {
      document.getElementById("winner-text").innerText = `${color} Wins!`;
    }
    newRound();
  }

  function newRound(){}
  

  //Add event listeners to game buttons
  let resetBoardBtn = document.getElementById("reset-board-btn");
  resetBoardBtn.addEventListener("click", resetBoard);
  let resetScoreBtn = document.getElementById("reset-score-btn");
  resetScoreBtn.addEventListener("click", resetScore);
  let quitGameBtn = document.getElementsByClassName("quit-game-btn");
  quitGameBtn[0].addEventListener("click", quitGame);
  quitGameBtn[1].addEventListener("click", quitGame);


}
