
let winMessage = document.querySelector(".win-message")
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");
let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let arr = [box1, box2, box3, box4, box5, box6, box7, box8, box9];

const combinations = [
    [arr[0], arr[1], arr[2]], [arr[3], arr[4], arr[5]], 
    [arr[6], arr[7], arr[8]], [arr[0], arr[3], arr[6]],
    [arr[1], arr[4], arr[7]], [arr[2], arr[5], arr[8]],
    [arr[0], arr[4], arr[8]], [arr[2], arr[4], arr[6]]
];


function disableBoard() {
    arr.forEach((box) => {
        box.style.pointerEvents = "none";
    });
}


function checkWinner() {
    for (let combination of combinations) {
        let xCount = 0;
        let oCount = 0;

        combination.forEach((box) => {
            if (box.textContent === "X") {
                xCount++;
            } else if (box.textContent === "O") {
                oCount++;
            }
        });

        if (xCount === 3) {
            winMessage.textContent = "X wins!";
            disableBoard();
            return true;
        } else if (oCount === 3) {
            winMessage.textContent = "O wins!";
            disableBoard();
            return true;
        }
    }
    return false;
}

function checkDraw() {
    let Count = 0;
    arr.forEach((box) => {
        if (box.textContent === "X" || box.textContent === "O") {
            Count++;
        }
    });
    if (Count === 9) {
        winMessage.textContent = "It's a tie!";
        disableBoard();
        return true;
    }
    return false;
}


let currentPlayer = "X";
arr.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (!box.textContent) { 
            box.textContent = currentPlayer; 
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
        checkWinner();
        checkDraw();
    });
});


