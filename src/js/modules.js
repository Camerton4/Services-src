const message1 = document.querySelector('.message');
const message2 = document.querySelector('.navigation__chat-icon');
const messageWindow = document.querySelector('.modal__feedback');
const messageClose = document.querySelector('.modal_feedback_close');
const burger = document.querySelector('.mobile-menu');
const container = document.querySelector('.container');
const main = document.querySelector('main');

const phone1 = document.querySelector('.phone');
const phone2 = document.querySelector('.navigation__call-icon');
const phoneWindow = document.querySelector('.modal__call');
const phoneClose = document.querySelector('.modal_call_close');

main.addEventListener('click', function(){
    phoneWindow.classList.remove('modal__feedback_open');
    messageWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
});

phone1.addEventListener('click', function(){
    phoneWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})
phone2.addEventListener('click', function(){
    phoneWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})

phoneClose.addEventListener('click', function(){
    phoneWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
})


message1.addEventListener('click', function(){
    messageWindow.classList.add('modal__feedback_open');
    burger.classList.remove('visible');
    container.classList.add('blur');
})
message2.addEventListener('click', function(){
    messageWindow.classList.add('modal__feedback_open');
    container.classList.add('blur');
})

messageClose.addEventListener('click', function(){
    messageWindow.classList.remove('modal__feedback_open');
    container.classList.remove('blur');
})

