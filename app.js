const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu)
//Past Slideshow

let slides = document.querySelectorAll('.past__card')
let arrowLeft = document.querySelector('#arrow-left')
let arrowRight = document.querySelector('#arrow-right')
current = 0

function reset(){
    for(let i = 0; i < slides.length; ++i){
        slides[i].style.display = 'none'
    }
}

function startSlideshow(){
    reset()
    slides[0].style.display = 'block'
}

function slideLeft(){
    reset();
    slides[current - 1].style.display = 'block'
    current--
}

function slideRight(){
    reset()
    slides[current + 1].style.display = 'block'
    current++
}

arrowLeft.addEventListener('click',function(){
    if(current === 0){
        current = slides.length
    } 
    slideLeft()
})

arrowRight.addEventListener('click',function(){
    if(current == slides.length - 1){
        current = -1
    }
    slideRight()
})

startSlideshow()

//Arrow Positions based on screen size
function moveArrowsUp(){
    var rightArrow = document.getElementById('arrow-right')
    var leftArrow = document.getElementById('arrow-left')
    var wrap = rightArrow.parentNode
    wrap.insertBefore(rightArrow, wrap.firstChild)
    wrap.insertBefore(leftArrow, wrap.firstChild)
}

function moveArrowsBack(){
    var rightArrow = document.getElementById('arrow-right')
    var leftArrow = document.getElementById('arrow-left')
    var slider = document.getElementById('slider')
    var wrap = rightArrow.parentNode
    wrap.insertBefore(rightArrow, wrap.firstChild)
    wrap.insertBefore(slider, wrap.firstChild)
    wrap.insertBefore(leftArrow, wrap.firstChild)
}

let widthMatch = window.matchMedia("(min-width: 1100px)");
widthMatch.addEventListener('change',function(mm){
    if (mm.matches){
        moveArrowsBack()
    }
    else{
        moveArrowsUp()
    }
})



