const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const options = {
    root: null,
    threshold: 0.6,
    rootMargin: "-100px 0px -300px 0px",
};
const toggleBtn = document.getElementById("theme-toggle")

document.getElementById("year").textContent = new Date().getFullYear();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${id}`) {
            link.classList.add("active");
        }
        });
    }
    });
}, options);

sections.forEach((section) => {
    observer.observe(section);
});

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
    toggleBtn.textContent = "☀️"
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode")

    if(document.body.classList.contains("dark-mode")){
        toggleBtn.textContent = "☀️"
        localStorage.setItem("theme", "dark");
    }else{
        toggleBtn.textContent = "🌙"
    }
})