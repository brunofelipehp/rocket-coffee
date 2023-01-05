const toggle = document.querySelector('#toggle')
const toggleImg = document.querySelector('#toggle img')
const menu = document.querySelector('#menu-mobile')
const menuList = document.querySelector('#menu-list')
const main = document.querySelector('main')
const currentLocation = location.href

toggle.addEventListener('click', function () {
  menu.classList.toggle('close')
  toggleImg.classList.add('close')

  if (!menu.classList.item('close')) {
    toggleImg.src = './assets/menu-buguer-close.svg'
    toggleImg.classList.add('close')
    main.style.display = 'none'
  } else {
    toggleImg.src = './assets/menu-buguer-open.svg'
    toggleImg.classList.add('close')
    main.style.display = 'block'
  }
})
