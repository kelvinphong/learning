const header = document.querySelector(".header"),
    menuToggle = document.querySelector(".menu-toggle");
document.addEventListener("scroll", (e) => {
    if (window.scrollY > 10) {
        header.classList.add("scrolled");
    } else header.classList.remove("scrolled");
})

menuToggle && menuToggle.addEventListener("click", (e) => {
    e.preventDefault();

    header.classList.toggle("show");
})