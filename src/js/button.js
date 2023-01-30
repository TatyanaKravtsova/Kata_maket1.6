let brandList = document.querySelector('.show')
let equipmentList = document.querySelector('.show-2')
let sectionMore = document.querySelector('.section__link')
let buttonFirst = document.querySelector('.first')
let buttonSecond = document.querySelector('.second')
let buttonFirst_2 = document.querySelector('.first-2')
let buttonSecond_2 = document.querySelector('.second-2')

buttonFirst.addEventListener('click', function () {
  buttonFirst.classList.toggle('hidden')
  buttonSecond.classList.toggle('hidden')
  brandList.classList.toggle('show')
})
buttonSecond.addEventListener('click', function () {
  buttonFirst.classList.toggle('hidden')
  buttonSecond.classList.toggle('hidden')
  brandList.classList.toggle('show')
})

buttonFirst_2.addEventListener('click', function () {
  buttonFirst_2.classList.toggle('hidden')
  buttonSecond_2.classList.toggle('hidden')
  equipmentList.classList.toggle('show-2')
})
buttonSecond_2.addEventListener('click', function () {
  buttonFirst_2.classList.toggle('hidden')
  buttonSecond_2.classList.toggle('hidden')
  equipmentList.classList.toggle('show-2')
})

//Меню бургер

const iconMenu = document.querySelector('.burger__icon')
const menuBody = document.querySelector('.aside-wrapper')
const body = document.querySelector('.aside-wrapper__inner')

if (iconMenu) {
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('.lock')
    iconMenu.classList.toggle('aside-wrapper_active')
    menuBody.classList.toggle('aside-wrapper_active')
  })
}
if (body) {
  body.addEventListener('click', function (e) {
    document.body.classList.toggle('.lock')
    iconMenu.classList.toggle('aside-wrapper_active')
    menuBody.classList.toggle('aside-wrapper_active')
  })
}
