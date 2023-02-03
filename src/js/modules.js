const parent = document.querySelector('.parent');
const clone = parent.cloneNode(true);
const child = document.querySelector('.clone');
child.appendChild(clone);

const messageFirst = document.querySelector('.message');
const messageSecond = document.querySelector('.navigation__chat-icon');
const messageWindow = document.querySelector('.modal__feedback');
const messageClose = document.querySelector('.modal_feedback_close');
const burger = document.querySelector('.mobile-menu');
const container = document.querySelector('.container');
const main = document.querySelector('main');

const phoneFirst = document.querySelector('.phone');
const phoneSecond = document.querySelector('.navigation__call-icon');
const phoneWindow = document.querySelector('.modal__call');
const phoneClose = document.querySelector('.modal_call_close');
const priceButton = document.querySelector('.price__button');



priceButton.addEventListener('click', function(evt){

    evt.preventDefault();

})

main.addEventListener('click', function(){
    phoneWindow.classList.remove('modal__feedback_open');
    messageWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
});

phoneFirst.addEventListener('click', function(){
    phoneWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})
phoneSecond.addEventListener('click', function(){
    phoneWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})

phoneClose.addEventListener('click', function(){
    phoneWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
})


messageFirst.addEventListener('click', function(){
    messageWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})
messageSecond.addEventListener('click', function(){
    messageWindow.classList.add('modal__feedback_open');
    container.classList.add('blur');
})

messageClose.addEventListener('click', function(){
    messageWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
})

