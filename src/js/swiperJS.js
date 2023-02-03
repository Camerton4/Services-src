const slider = document.querySelector('.swiper-container');
const sliderSecond = document.querySelector('.swiper-container2');
const sliderThird = document.querySelector('.swiper-container3');
let mySwiper;
let mySwiperSecond;
let mySwiperThird;


import Swiper, {Pagination} from 'swiper';
Swiper.use([Pagination]);

function mobileSlider() {
	if (window.innerWidth <= 768 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
      width: 240,
      spaceBetween: 16,
      slidesPerView:'auto',
      direction: 'horizontal',
      loop: true,
      loopPreventsSliding: true,
      modules: [Pagination],
      pagination: {
        type: 'bullets',
        el: '.pag',
        clickable: true,
      },
    

  
		});
    
    mySwiperSecond = new Swiper(sliderSecond, {
      direction: 'horizontal',
      loop: true,
      modules: [Pagination],
      pagination: {
        el: '.pag2',
        clickable: true,
      },
      width: 240,
      slidesPerView:'auto',
  
		});
    mySwiperThird = new Swiper(sliderThird, {
      direction: 'horizontal',
      loop: true,
      modules: [Pagination],
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
      mySwiperSecond.destroy();
      mySwiperThird.destroy();
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