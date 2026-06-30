const options = {
    root: null,
    rootMargin: "0px",
    scrollMargin: "0px",
    threshold: 0.2,
}

function revealElement(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.style.willChange = 'transform, opacity';
            element.classList.add('begin-fade-up');
            observer.unobserve(entry.target);

            element.addEventListener('animationend', () => {
                element.style.willChange = null;
            }, {once: true});
        }
    });
}

export function initializeObserver() {
    const observer = new IntersectionObserver(revealElement, options);
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => observer.observe(card));
}