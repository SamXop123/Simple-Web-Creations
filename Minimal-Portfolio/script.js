// Scroll-to-top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.textContent = '▲';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 10px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
`;
document.body.appendChild(scrollTopBtn);

window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Fade in elements on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.box, .work-item, .social-item, .certificate-item, .skill-item, .contact-content').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});


// Contact form handling
const contactForm = document.getElementById('contact-form');
const sentMessage = document.getElementById('sent-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); 
    sentMessage.textContent = 'Message sent! Thank you for reaching out.';
    sentMessage.classList.add('show');
    contactForm.reset(); 
    setTimeout(() => {
        sentMessage.classList.remove('show');
        sentMessage.textContent = '';
    }, 3000); 
});


// Skills progress bars
document.querySelectorAll('.progress').forEach(bar => {
    const width = bar.style.width;
    bar.style.width = '0';
    setTimeout(() => {
        bar.style.width = width;
    }, 500);
});