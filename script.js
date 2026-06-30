// ===============================
// Typing Animation
// ===============================

const typingText = document.getElementById("typing");

const roles = [
    "Aspiring Software Developer",
    "7th Semester CSE Student",
    "Web Developer",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;
            setTimeout(typeEffect, 1500);
            return;

        }

    } else {

        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            roleIndex = (roleIndex + 1) % roles.length;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

document.addEventListener("DOMContentLoaded", typeEffect);

// ===============================
// Dark Mode Toggle
// ===============================

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';

    }else{

        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';

    }

});

// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you, Preethi! Your message has been sent successfully.");

    form.reset();

});

// ===============================
// Scroll To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "12px 16px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563EB";
topBtn.style.color = "white";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 5px 15px rgba(0,0,0,.3)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===============================
// Scroll Reveal Animation
// ===============================

const revealElements = document.querySelectorAll("section");

function revealOnScroll(){

    revealElements.forEach(section=>{

        const windowHeight = window.innerHeight;

        const top = section.getBoundingClientRect().top;

        if(top < windowHeight - 100){

            section.style.opacity = "1";
            section.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach(section=>{

    section.style.opacity = "0";
    section.style.transform = "translateY(40px)";
    section.style.transition = "0.8s";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
