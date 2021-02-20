const sectionOne = document.querySelector('.fade');
const creeper = document.querySelectorAll('.creep')

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            entry.target.classList.remove('appear');
        } else {
            entry.target.classList.toggle('appear');
            // observer.unobserve(entry.target);
        }
    });
}, options);


creeper.forEach(creeper => {
    observer.observe(creeper)
})
// observer.observe(sectionOne);