const steps = document.querySelectorAll('.step');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.2 });

steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(10px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(step);
});