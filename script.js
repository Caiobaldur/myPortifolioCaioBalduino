//Consts
const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItens = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="control-button"]')

let startingPoint
let savedPosition



function onMouseDown(event) {
  const slideItem = event.currentTarget
  startingPoint = event.clientX
  slideItem.addEventListener('mousemove', onMouseMove)
}


function onMouseMove(event) {
  const movement = event.clientX - startingPoint
  slideList.style.transform = 'translateX('+movement+'px)'
  savedPosition = movement
}

function onMouseUp(event){
  const slideItem = event.currentTarget
  slideItem.removeEventListener('mousemove', onMouseMove)
}

slideItems.forEach(function(slideItem, index) {
  slideItem.addEventListener('dragstart', function(event) {
    event.preventDefault()
  })
  slideItem.addEventListener('mousedown',onMouseDown)
  slideItem.addEventListener('mouseup', onMouseUp)
})