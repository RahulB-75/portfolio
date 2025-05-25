/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

// Light/Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Load theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    icon.classList.remove('bx-moon');
    icon.classList.add('bx-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    if (body.classList.contains('dark-theme')) {
        icon.classList.remove('bx-moon');
        icon.classList.add('bx-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('bx-sun');
        icon.classList.add('bx-moon');
        localStorage.setItem('theme', 'light');
    }
});

/*===== REMOVE MENU MOBILE =====*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
sr.reveal('.home__img', {origin:'right', delay: 500})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
sr.reveal('.portfolio__img', {interval: 200})


// Portfolio model Functionality

const model = document.getElementById('portfolio-model');
const modelBody = document.getElementById('portfolio-model-body');
const closeBtn = document.getElementById('portfolio-model-close');
const detailLinks = document.querySelectorAll('.portfolio__link-name');
const prevBtn = document.getElementById('portfolio-prev');
const nextBtn = document.getElementById('portfolio-next');

const projectDetails = [
    {
        title: "Email reply automation using Gemini API using Spring Boot",
        description: "This project automates email replies using the Gemini API, enhancing productivity by generating context-aware responses.",
        image: "assets/img/Project 1.png"
    },
    {
        title: "My Portfolio Website",
        description: "This is a personal portfolio website showcasing my skills, projects, and experiences. It is built with HTML, CSS, and JavaScript.",
        image: "assets/img/Project2.png"
    },
    {
        title: "Project 3 Title",
        description: "This is a description of Project 3. Share what makes this project unique or interesting.",
        image: "assets/img/work3.jpg"
    }
];

let currentProject = 0;

function showProject(index) {
    const project = projectDetails[index];
    modelBody.innerHTML = `
        <img src="${project.image}" alt="${project.title}" style="width:100%;border-radius:0.5rem;margin-bottom:1rem;">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    `;
    model.classList.add('active');
    currentProject = index;
    // Animate content
    modelBody.style.opacity = 0;
    setTimeout(() => { modelBody.style.opacity = 1; }, 100);
}

detailLinks.forEach((link, idx) => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        showProject(idx);
    });
});

closeBtn.addEventListener('click', () => {
    model.classList.remove('active');
});

model.addEventListener('click', (e) => {
    if (e.target === model) {
        model.classList.remove('active');
    }
});

// Navigation buttons
if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        let idx = (currentProject - 1 + projectDetails.length) % projectDetails.length;
        showProject(idx);
    });
    nextBtn.addEventListener('click', () => {
        let idx = (currentProject + 1) % projectDetails.length;
        showProject(idx);
    });
}

//

/*SCROLL WORK*/
sr.reveal('.work__content', {});
sr.reveal('.work__img', {delay: 200});

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})



const sr1  = ScrollReveal({
    origin: 'bottom',
    distance: '40px',
    duration: 900,
    delay: 200,
    reset: false // set to true if you want animation every time you scroll
});





