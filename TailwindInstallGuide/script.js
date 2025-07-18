const steps = document.querySelectorAll('.step');
steps.forEach(step => {
    step.style.opacity = '0';
    step.style.transform = 'translateY(10px)';
    step.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(step);
});