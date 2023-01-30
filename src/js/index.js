import '../scss/style.scss'

console.log('Works!')

import '../js/button.js'

import Swiper, { Pagination } from 'swiper'

Swiper.use([Pagination])

document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 768) {
    const swiper = new Swiper('.slider-container', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      slideClass: 'section-grid__item',
      wrapperClass: 'mobile',
      slideToClickedSlide: true,
      centeredSlides: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: 'true'
      }
    })
  }
})
