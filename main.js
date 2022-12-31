const toggle = document.querySelector('#toggle')
const toggleImg = document.querySelector('#toggle img')
const menu = document.querySelector('#menu-mobile')
const menuList = document.querySelectorAll('#menu-list a')
const select = document.querySelectorAll('#menu-list li')

toggle.addEventListener('click', function () {
  menu.classList.toggle('close')
  toggleImg.classList.add('close')

  if (!menu.classList.item('close')) {
    toggleImg.src = './assets/menu-buguer-close.svg'
    toggleImg.classList.add('close')
  } else {
    toggleImg.src = './assets/menu-buguer-open.svg'
    toggleImg.classList.add('close')
  }
})

menuList.addEventListener('click', function () {
  select.classList.toggle('selected')
  console.log('ola')
})
