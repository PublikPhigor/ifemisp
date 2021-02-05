//navbar
const navbar = document.querySelector('.mb-navbar');
const openNav = document.querySelector('.burger');
const closeNav = document.querySelector('.close-nav-btn');

openNav.addEventListener('click', ()=> {
    navbar.classList.add('active');
});

closeNav.addEventListener('click', ()=> {
    navbar.classList.remove('active');
});


const landingPage = document.querySelector('.lp');
const header = document.querySelector('header');

const slideObserverOptions = {};
const slideObserver = new IntersectionObserver((entires, slideObserver) => {
    entires.forEach(entry => {
        if(!entry.isIntersecting) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed');
        }
    });
}, slideObserverOptions);

slideObserver.observe(landingPage);

