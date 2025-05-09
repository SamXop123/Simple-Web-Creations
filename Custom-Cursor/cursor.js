const cursor = document.querySelector('.cursor');
const buttons = document.querySelectorAll('.cursor-btn');

// Update cursor position
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX - 10 + 'px';
    cursor.style.top = e.clientY - 10 + 'px';
});

