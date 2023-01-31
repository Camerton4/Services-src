const slider = document.querySelector('.swiper-container');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');
let mySwiper;
let mySwiper2;
let mySwiper3;


function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.pag',
        clickable: true,
      },
      width: 240,
      spaceBetween: 16,
      slidesPerView:'auto',
  
		});
    
    mySwiper2 = new Swiper(slider2, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.pag2',
        clickable: true,
      },
      width: 240,
      slidesPerView:'auto',
  
		});
    mySwiper3 = new Swiper(slider3, {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.pag2',
        clickable: true,
      },
      width: 240,
      slidesPerView:'auto',
  
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth >= 768) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
      mySwiper2.destroy();
      mySwiper3.destroy();
		}
	}

}

mobileSlider()


window.addEventListener('resize', () => {
	mobileSlider();
});

const button = document.querySelector('.swiper_button-1');
const swiperContainer = document.querySelector('.swiper-wrapper');
const swArrow1 = document.querySelector('.sw_arrow1');

button.addEventListener('click', function(){
  swiperContainer.classList.toggle('swiper-wrapper-open');
  if (swiperContainer.classList.contains('swiper-wrapper-open')){
    button.textContent = 'Скрыть';
    swArrow1.classList.add('sw_arrow1_reverse');
  }
  else {
    button.textContent = 'Показать все';
    swArrow1.classList.remove('sw_arrow1_reverse');
    
  }
});

const swButton2 = document.querySelector('.swiper_button-2');
const swArrow2 = document.querySelector('.sw_arrow2');
const swContainer2 = document.querySelector('.swiper-flex-2');


swButton2.addEventListener('click', function(){
  swContainer2.classList.toggle('swiper-flex-2-open');
  if (swContainer2.classList.contains('swiper-flex-2-open')){
    swButton2.textContent = 'Скрыть';
    swArrow2.classList.toggle('sw_arrow2_reverse');
  }
  else {
    swButton2.textContent = 'Показать все';
    swArrow2.classList.remove('sw_arrow2_reverse');
    
  }
});