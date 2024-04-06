let burger = document.getElementById('burger');
let ul = document.querySelector('ul');
let nav = document.querySelector('nav');

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
sr.reveal('.text, form, .button, .image', {interval: 200})