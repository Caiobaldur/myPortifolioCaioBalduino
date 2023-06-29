//Consts
const slideWrapper = document.querySelector('[data-slide="wrapper"]')
const slideList = document.querySelector('[data-slide="list"]')
const navPreviousButton = document.querySelector('[data-slide="nav-previous-button"]')
const navNextButton = document.querySelector('[data-slide="nav-next-button"]')
const controlsWrapper = document.querySelector('[data-slide="controls-wrapper"]')
const slideItens = document.querySelectorAll('[data-slide="item"]')
const controlButtons = document.querySelectorAll('[data-slide="control-button"]')


function onMouseMove() {

}





slideItems.forEach(function(slideItem, index) {
  slideItem.addEventListener('dragstart', function(event) {
    event.preventDefault()
  })
  slideItem.addEventListener('mousedown', function() {

    slideItem.addEventListener('mousemove', onMouseMove)
    
  
  })
  slideItem.addEventListener('mouseup', function() {
    slideItem.removeEventListener('mousemove', onMouseMove)
  })
  
})