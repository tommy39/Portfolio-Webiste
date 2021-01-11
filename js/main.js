// TOGGLE MENU
const navMenu = document.getElementById('nav-menu');
const  toggleMenu = document.getElementById('nav-toggle');
const mainContent = document.getElementById('main');
const wrapper = document.getElementById('wrapper-id');
const navChildProjectsBtn = document.getElementById('nav-child-link-my-projects-button-id');
const navChildProjectsMenu = document.getElementById('nav-my-projects-children-container-id');

toggleMenu.addEventListener('click', ()=>{
    navChildProjectsMenu.classList.toggle('toggle-sidebar')
    mainContent.classList.toggle('toggle-body-size');
    wrapper.classList.toggle('toggle-body-size');
})

// TOGGLE MY PROJECTS CHILDREN
navChildProjectsBtn.addEventListener('click', ()=>{
    navChildProjectsMenu.toggle('toggle-my-projects-children');
})
