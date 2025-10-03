// Dark Mode Toggle
const toggleBtn = document.getElementById("darkModeToggle");
toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "🌙" : "☀️";
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", () => {
    reveals.forEach(r => {
        const top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) r.classList.add("visible");
    });
});

// Typewriter effect
const text = ["Aspiring Developer 💻", "Tech Enthusiast 🚀", "Problem Solver 🎯"];
let i = 0, j = 0, current = "", isDeleting = false;
const typingEl = document.getElementById("typing");
function typeEffect() {
    current = text[i];
    typingEl.innerHTML = isDeleting ? current.substring(0, j--) : current.substring(0, j++);
    if (!isDeleting && j === current.length) { isDeleting = true; setTimeout(typeEffect, 1500); }
    else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % text.length; setTimeout(typeEffect, 200); }
    else setTimeout(typeEffect, isDeleting ? 50 : 100);
}
