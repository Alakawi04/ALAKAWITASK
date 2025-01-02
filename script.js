
const lazyLoadElements = document.querySelectorAll('.lazy-load');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('visible'); 
            observer.unobserve(element); 
        }
    });
}, {
    threshold: 0.1
});

lazyLoadElements.forEach(element => {
    observer.observe(element);
});
