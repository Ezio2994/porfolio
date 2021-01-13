import projects from "./projectDatas.js"

const navUl = document.querySelector('nav ul')
const projectBox = document.querySelector('.projectsBox')
const projectsContainer = document.querySelector(".projectsBox div")
const bottomSection = document.getElementsByClassName("bottomSection")
const navbarButton = document.querySelector('#navBar')

let index = 0
let interval;

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

projects.forEach(project => bottomSection[0].innerHTML += `<button>${project.name}</button>`)
projectBox.onmouseout = () => clearInterval(interval);
projectBox.onmouseleave = () => startInt()
const startInt = () => interval = setInterval(projectsGenerator, 4000)

const resetButtons = () => {
    for (let i = 0; i < bottomSection[0].children.length; i++) {
        bottomSection[0].children[i].removeAttribute("class")
    }
}

const projectsGenerator = () => {
    resetButtons()
    bottomSection[0].children[index].setAttribute("class", "bottomButtonOn")
    projectBox.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${projects[index].urlImg}")`
    projectsContainer.innerHTML = `
            <article class="middleSection slit-in-vertical">
                <h2 class="fade">${projects[index].name}</h2>
                <p class="fade">${projects[index].description}</p>
                ${projects[index].tags.map(tag => `<span title="${tag}">${tag}</span>`)}<br>
                <a href="${projects[index].live}" target='_blank'><i
                        class="fas fa-code"></i></a>
                <a href="${projects[index].gitHub}" target='_blank'><i
                        class="fab fa-github-alt"></i></a>
            </article>
        `
    index < projects.length - 1 ? index++ : index = 0;
}

bottomSection[0].onclick = (e) => {
    const projectNames = projects.map(project => project.name)
    if (projectNames.indexOf(e.target.innerHTML) >= 0) {
        resetButtons()
        index = projectNames.indexOf(e.target.innerHTML)
        projectsGenerator()
    }
}

startInt()
projectsGenerator()

