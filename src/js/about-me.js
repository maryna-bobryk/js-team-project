import Swiper from 'swiper';
import 'swiper/css/bundle';

const elemSkillsBtnNext = document.querySelector('.skills-arrow-next');

const swiperSkills = new Swiper('.swiperr', {
  speed: 900,
  loop: true,

  // Default parameters
  //slidesPerView: 3,
  //spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  },
});

elemSkillsBtnNext.addEventListener('click', evt => {
  console.log('Клік по срілці');

  swiperSkills.slideNext();
});

//!-----------------------------------------------------------

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionParams = {
 openOnInit: [0],  // Перший елемент відкривається за замовчуванням
 closeOthers: true,  // Закриває інші елементи при відкритті нового
 duration: 300,  // Тривалість анімації
 toggle: 'click',  // Клік як тригер
 easing: 'ease-in-out',  // Плавна анімація
 scrollTo: true,  // Прокручує до відкритого елемента
 scrollOffset: 20,  // Відстань при прокручуванні
  
    // elementClass: '.ac',
    // triggerClass: ".content-arrow",
    // panelClass: '.content-item-copy',
    // activeClass: 'is-active', 
}

 new Accordion(".content-container", accordionParams);


