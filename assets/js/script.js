// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// Display the game and set main menu to display none when click on open game button
// Open rules modal when click on rules button
// Close read rules modal when clicking on span

document.addEventListener("DOMContentLoaded", function () {
  const openGameBtn = document.getElementById("open-game-btn");
  const readRulesBtn = document.getElementById("read-rules-btn");
  const theGame = document.querySelector(".the-game");
  const mainMenu = document.querySelector(".main-menu");
  const rulesModal = document.getElementById("rules-modal");
  
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
    document.getElementById("p1-turn-text").innerText = "Next Play";


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
              if (boxes.length>0){
              boxes.at(-1).style.backgroundColor = "red";}
            } else {if (boxes.length>0) {
              boxes.at(-1).style.backgroundColor = "yellow";
            }
          }
          });
          column.addEventListener("mouseout", function () {
            let boxes = Array.from(column.querySelectorAll(".game-box"));
            boxes = boxes.filter((x) => !x.classList.contains("active"));
            column.style.backgroundColor = "initial";
            if (boxes.length>0){
            boxes.at(-1).style.removeProperty("background-color");
          }
          });
        });
      }
      
      function choseColumn() {
        let playerColumn = 0;
        for (let i = 0; i < gameColumns.length; i++)
          gameColumns[i].addEventListener("click", function () {
            playerColumn = i;
            console.log(playerColumn);
            console.log(turn);
            if (turn % 2 === 0) {
              addCoin(playerColumn, "red");
              document.getElementById("p1-turn").style.backgroundColor = "white";
              document.getElementById("p2-turn").style.backgroundColor = "yellow";
              document.getElementById("p2-turn-text").innerText = "Next Play";
              document.getElementById("p1-turn-text").innerText = "";
            } else {
              addCoin(playerColumn, "yellow");
              document.getElementById("p2-turn").style.backgroundColor = "white";
              document.getElementById("p1-turn").style.backgroundColor = "red";
              document.getElementById("p1-turn-text").innerText = "Next Play";
              document.getElementById("p2-turn-text").innerText = "";
            }
          });
      }
      markBox()
      choseColumn()


/*Adds a value of either "red" or "yellow" (color) to the gameArray which represents the  
 column clicked by the player.*/
 //Runs the displayCoins and checkWinner functions.

function addCoin(playerColumn, color) {
    turn += 1;
    if (gameArrays[playerColumn].length < 6) {
      gameArrays[playerColumn].push(color);
    }
    console.log(gameArrays[playerColumn]);
    displayCoins(color);
    checkWinner(color);
  }

/*Loops through all the gameArrays and checks if each element is 
equal to the color parameter (red/yellow). If a match is found, it changes the background 
color of the corresponding HTML element and adds the class "active" to it.
It displays the players chosen position.
*/
function displayCoins(color) {
    for (let i = 0; i < gameArrays.length; i++) {
      for (let j = 0; j < gameArrays[i].length; j++) {
        if (gameArrays[i][j] == color) {
          document.getElementById(
            `x${j + 1}, y${i + 1}`
            ).style.backgroundColor = color;
          document.getElementById(`x${j + 1}, y${i + 1}`).classList.add("active");
        }
      }
    }
  }  

function checkWinner(color){}
}

