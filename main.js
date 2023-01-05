const toggle = document.querySelector('#toggle')
const toggleImg = document.querySelector('#toggle img')
const menu = document.querySelector('#menu-mobile')
const main = document.querySelector('main')

toggle.addEventListener('click', function () {
  menu.classList.toggle('close')

  if (!menu.classList.item('close')) {
    toggleImg.src = './assets/menu-buguer-close.svg'
    main.style.display = 'none'
  } else {
    toggleImg.src = './assets/menu-buguer-open.svg'
    main.style.display = 'block'
  }
})
