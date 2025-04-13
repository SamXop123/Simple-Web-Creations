
let about = document.querySelector(".about-head");
let btn = document.querySelector(".btn");

about.addEventListener('click', () => {
    let para = document.querySelector(".about-desc"); 
    let wholeAbout = document.querySelector(".about");
   
    if (para.style.display === 'flex') {
        para.style.display = 'none';
        wholeAbout.style.backgroundColor = '';
    } else {
        para.style.display = 'flex'; 
        wholeAbout.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'; 
    }
});

btn.addEventListener('click', ()=>{
    let win = document.querySelector(".win-message")
    let input = document.querySelector("input"); 
    let inputValue = input.value;

    if(inputValue==""){
        win.innerHTML = "Please enter a text!";
        win.setAttribute('style', 'display: flex; color: darkred;');
    }
    else if(inputValue === inputValue.split('').reverse().join('').toLowerCase()) {
        win.innerHTML = `Yes, ${inputValue} is a palindrome!`;
        win.setAttribute('style', 'display: flex');
    } else {
        win.innerHTML = `No, ${inputValue} is not a palindrome!`;
        win.setAttribute('style', 'display: flex');
    }
})
