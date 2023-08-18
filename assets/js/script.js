// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
// display the game and set main menu to display none when click on open game btn
// open rules modal when click on rules button
// close read rules modal when clicking on span

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

    function markColumn() {
        let markedColumns = document.querySelectorAll(".game-column");
        markedColumns.forEach(function (column) {
          column.addEventListener("mouseover", function () {
            column.style.backgroundColor = "";
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
      markColumn()
}
