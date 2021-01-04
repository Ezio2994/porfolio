const navLinks = document.querySelectorAll('nav li')
const navUl = document.querySelector('nav ul')
const projectBox = document.querySelector('.projectsBox')
const projects = document.querySelectorAll('.projectsBox div')
const middleSection = document.querySelectorAll('.middleSection')
const bottomSectionButtons = document.querySelectorAll('.bottomSection button')
const navbarButton = document.querySelector('#navBar')
const navBar = document.querySelector('nav')

let slide = 1
let play = true
let i;


window.onscroll = () => {
    if (window.innerWidth > 1100) {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navUl.classList = 'slide-out-blurred-right'
            navbarButton.style.visibility = 'visible'
        } else if (document.body.scrollTop < 50 || document.documentElement.scrollTop < 50) {
            navUl.classList = 'focus-in-expand'
            navbarButton.style.visibility = 'hidden'
        }
    }
}

navbarButton.onclick = () => {
    if (navUl.classList == 'slide-out-blurred-right') {
        navUl.style.display = "block"
        navUl.classList = 'focus-in-expand'
        navbarButton.style.display = 'hidden'
    } else if (navUl.classList = 'focus-in-expand') {
        navUl.classList = 'slide-out-blurred-right'
    }
}

navUl.onclick = () => {
    if (navUl.classList == 'slide-out-blurred-right') {
        navUl.style.display = "block"
        navUl.classList = 'focus-in-expand'
        navbarButton.style.display = 'hidden'
    } else if (navUl.classList = 'focus-in-expand') {
        navUl.classList = 'slide-out-blurred-right'
    }
}


const resetButtons = () => {
    bottomSectionButtons.forEach((button) => {
        button.className = 'bottomButton'
    })
    projects.forEach((project) => {
        project.style.display = 'none'
    })
}

projectBox.onmouseout = () => play = false;
projectBox.onmouseleave = () => play = true;

const slideTimer = () => {
    if (play === true && window.innerWidth > 900) {
        if (slide === 1) {
            project1Slide()
        } else if (slide === 2) {
            project2Slide()
        } else if (slide === 3) {
            project3Slide()
        } else if (slide === 4) {
            project4Slide()
        } else if (slide === 5) {
            project5Slide()
            slide = 0
        }

        slide++
    }
}

setInterval(slideTimer, 4000)

const gradiant = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"

projects[0].style.display = 'block'
bottomSectionButtons[0].addEventListener('click', project1Slide = () => {
    projectBox.style.backgroundImage = `${gradiant}, url('./img/rpgGame.jpg')`
    slide = 1;
    resetButtons()
    projects[0].style.display = 'block'
    bottomSectionButtons[0].classList = 'bottomButtonOn'
})

bottomSectionButtons[1].addEventListener('click', project2Slide = () => {
    projectBox.style.backgroundImage = `${gradiant},  url('./img/The-sicilian-shop.jpeg')`
    slide = 2;
    resetButtons()
    projects[1].style.display = 'block'
    bottomSectionButtons[1].classList = 'bottomButtonOn'
})

bottomSectionButtons[2].addEventListener('click', project3Slide = () => {
    projectBox.style.backgroundImage = `${gradiant},  url('./img/music-quiz.jpg')`
    slide = 3;
    resetButtons()
    projects[2].style.display = 'block'
    bottomSectionButtons[2].classList = 'bottomButtonOn'
})

bottomSectionButtons[3].addEventListener('click', project4Slide = () => {
    projectBox.style.backgroundImage = `${gradiant},  url('./img/hangman.jpg')`
    slide = 4;
    resetButtons()
    projects[3].style.display = 'block'
    bottomSectionButtons[3].classList = 'bottomButtonOn'
})

bottomSectionButtons[4].addEventListener('click', project5Slide = () => {
    projectBox.style.backgroundImage = `${gradiant},  url('./img/calculator.jpg')`
    slide = 5;
    resetButtons()
    projects[4].style.display = 'block'
    bottomSectionButtons[4].classList = 'bottomButtonOn'
})



