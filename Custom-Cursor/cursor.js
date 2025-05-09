const cursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('.cursor-btn');

// Update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

// Change cursor style on button click
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove all cursor classes except 'cursor'
        cursor.className = 'cursor';
        // Add the selected cursor style
        const cursorStyle = button.getAttribute('data-cursor');
        cursor.classList.add(cursorStyle);
    });

});