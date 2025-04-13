
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

