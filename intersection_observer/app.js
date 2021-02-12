// make an intersection observer for first section 

// const sectionOne = document.querySelector('.content1');
// const sections = document.querySelectorAll('section');

// const options = {
//     root: null, //it is the viewport 
//     threshold: 0.25, //default is 0, how much content is on the page (25% of content shows before firing)
//     rootMargin: '-150px'  //margin at viewpoint 
// };

// // callback will be a function (entries and observer)
// const observer = new IntersectionObserver(function (entries, observer) {
//     entries.forEach(entry => {
//         if (!entry.isIntersecting) {
//             return;
//         }
//         console.log(entry.target);
//         entry.target.classList.toggle('inverse');
//         // observer.unobserve(entry.target);
//     })
// }, options);


// sections.forEach(section => {
//     observer.observe(section);
// });

// // observer.observe(sectionOne);


const header = document.querySelector("header");
const sectionOne = document.querySelector(".home-intro");

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled");
        } else {
            header.classList.remove("nav-scrolled");
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);

const appearOptions = {
    threshold: 0,
    rootMargin: '0px 0px -250px 0px'
};

const appearOnScroll = new IntersectionObserver
    (function (
        entries,
        appearOnScroll
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.remove('appear');
            } else {
                entry.target.classList.add('appear');
            }
        })
    },
        appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

sliders.forEach(slider => {
    appearOnScroll.observe(slider);
});