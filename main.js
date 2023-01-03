const toggle = document.querySelector('#toggle')
const toggleImg = document.querySelector('#toggle img')
const menu = document.querySelector('#menu-mobile')
const menuList = document.querySelector('#menu-list')
const select = document.querySelectorAll('#menu-list li a')
const currentLocation = location.href

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

const menuLength = select.length
for (let i = 0; i < menuLength; i++) {
  if (select[i].href === currentLocation) {
    select.className = 'selected'
  }
}
/*
menuList.addEventListener('click', function () {
  select.forEach((element) => {
    element.classList.toggle('selected')
    // alert(`ola ${element.textContent}`)
  })
})
*/
