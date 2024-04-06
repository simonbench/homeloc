let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');
let sections = document.querySelectorAll('section');
let linkNav = document.querySelectorAll('ul li a');

let scrollActive = () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            linkNav.forEach(links => {
                links.classList.remove('active')
                document.querySelector('ul li a[href*='+id+']').classList.add('active')
            });
        }
    });
}

window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', scrollActive);

window.addEventListener('scroll', () => {
    nav.classList.toggle('active', scrollY > 0)
    ul.classList.remove('active')
    burger.classList.remove('bx-x')
});

burger.addEventListener('click', () => {
    ul.classList.toggle('active')
    burger.classList.toggle('bx-x')
});

let sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true
})
sr.reveal('.container, .image, .text, .cardes, .titles, .form, form, footer', {interval: 200})