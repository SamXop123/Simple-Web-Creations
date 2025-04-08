
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
    });
});



