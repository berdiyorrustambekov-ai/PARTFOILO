// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// ============================
// MENU LINK CLICK
// ============================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("show");
    });

});


// ============================
// TYPING EFFECT
// ============================

const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Frontend Developer",
    "Dasturchi",
    "IT enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 100);
}

typeEffect();


// ============================
// STATISTICS COUNTER
// ============================

const statistics = document.querySelectorAll(".stat h2");

let counterStarted = false;

function startCounter() {

    if (counterStarted) return;

    const section = document.querySelector(".statistics");

    const position = section.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        statistics.forEach(counter => {

            const target = Number(counter.dataset.number);

            let current = 0;

            const increment = Math.max(
                1,
                Math.ceil(target / 50)
            );

            const update = () => {

                current += increment;

                if (current >= target) {
                    counter.textContent = target;
                    return;
                }

                counter.textContent = current;

                requestAnimationFrame(update);
            };

            update();

        });
    }
}

window.addEventListener("scroll", startCounter);

startCounter();


// ============================
// CONTACT FORM
// ============================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert(
        "Xabaringiz qabul qilindi! Tez orada siz bilan bog‘lanamiz."
    );

    form.reset();

});


// ============================
// ACTIVE NAVIGATION
// ============================

const sections = document.querySelectorAll("section");
const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});