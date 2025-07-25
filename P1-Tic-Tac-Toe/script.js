let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgamebtn = document.querySelector(".new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player O

let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turnO) {
        box.innerText = "O";
        box.style.color = "blue";
        turnO = !turnO;
      }
        else {
            box.innerText = "X";
            turnO = !turnO;
        }
      chckWinner();
    }
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = ""; // Clear the text in the boxes
  }
};

const show_winner = (winner) => {
  msg.innerText = "Congratulations! Player " + winner + " wins!";
  msgcontainer.classList.remove("hide");
  disableBoxes();
};

function chckWinner() {
  for (pattern of winning) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (
      pos1 != "" &&
      pos2 != "" &&
      pos3 != "" &&
      pos1 === pos2 &&
      pos2 === pos3
    ) {
      show_winner(pos1);
    }
  }
}

const reset = () => {
  turnO = true;
  enableBoxes();
  msgcontainer.classList.add("hide");
};

newgamebtn.addEventListener("click", reset);
resetbtn.addEventListener("click", reset);
