const burger = document.querySelector('.navigation__burger');
const burgerMenu = document.querySelector('.mobile-menu');
const iconBack = burgerMenu.querySelector('.icon-back');
const container = document.querySelector('.container');
const main = document.querySelector('.main');
burger.addEventListener('click', function(){
    burgerMenu.classList.add('visible');
    container.classList.add('blur');
})

iconBack.addEventListener('click', function(){
    burgerMenu.classList.remove('visible');
    container.classList.remove('blur');
})
main.addEventListener('click', function(){
    burgerMenu.classList.remove('visible');
    container.classList.remove('blur');
})