import projects from "./projectDatas.js";

const navbar = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav .links a");
const navButton = document.querySelector("nav button");
const projectsContainer = document.querySelector("#projects");
const line = document.querySelector(".endLine");
const usedLine = document.querySelector(".usedLine");
const dot = document.querySelector(".dot");
const year = document.getElementById("year");

year.innerText = new Date().getFullYear().toString();

window.onscroll = () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navbar.style.justifyContent = "space-between";
    navLinks.forEach((link) => (link.className = "slide-out-left"));
    // navLinks.forEach((link) => (link.style.display = "none"));
    navButton.className = "slide-in-left";
    navButton.style.display = "block";
  } else if (
    document.body.scrollTop < 50 ||
    document.documentElement.scrollTop < 50
  ) {
    navbar.style.justifyContent = "space-evenly";
    navLinks.forEach((link) => (link.className = "slide-in-left"));
    // navLinks.forEach((link) => (link.style.display = "block"));
    navButton.className = "slide-out-left";
    navButton.style.display = "none";
  }
};

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > window.innerHeight ||
    document.documentElement.scrollTop > window.innerHeight
  ) {
    line.style.display = "block";
  } else {
    line.style.display = "none";
  }
});

navButton.addEventListener("click", () => {
  navLinks.forEach((link) => (link.className = "slide-in-left"));
  navButton.className = "slide-out-left";
  navButton.style.display = "none";
});

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
    dot.className = "dot slide-out-bottom";
    usedLine.style.display = "none";
    line.style.top = "unset";
    line.style.bottom = "86px";
  } else {
    dot.className = "dot slide-in-bottom";
    usedLine.style.display = "block";
    line.style.top = "0px";
    line.style.bottom = "unset";
  }
});

projectsContainer.innerHTML += projects
  .map((project) => {
    return `
            <article class="projectContainer">
            <img src=${project.urlImg} alt=${project.name}>
            <div>
                <h2>${project.name}</h2>
                <div class="iconsAndDescription">
                <div class="icons">
                  ${
                    project.live
                      ? `<a href="${project.live}" target='_blank'><i
                  class="fas fa-code"></i></a>`
                      : ""
                  }
                  <a href="${project.gitHub}" target='_blank'><i
                  class="fab fa-github-alt"></i></a>
                  ${
                    Object.keys(project).includes("addictionalGitHub")
                      ? `<a href="${project.addictionalGitHub}" target='_blank'><i class="fab fa-node"></i></a>`
                      : ""
                  }
                </div>
                <div>
                <p>${project.description}</p>
                // ${project.tags
                  .map((tag) => ` <span title="${tag}">${tag}</span> `)
                  .join("")}
                </div>
                </div>
                    </div>
            </article>
        `;
  })
  .join("");
