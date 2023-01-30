let swiper = document.querySelector('.slider-container')

let mySwiper
function mobileSlider() {
  if (window.innerWidth <= 767 && swiper.dataset.mobile == 'false') {
    mySwiper = new Swiper(swiper, {
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
    swiper.dataset.mobile = 'true'
  }
  if (window.innerWidth > 767) {
    swiper.dataset.mobile = 'false'
    mySwiper.destroy()
  }
}

mobileSlider()

window.addEventListener('resize', () => {
  mobileSlider()
})
