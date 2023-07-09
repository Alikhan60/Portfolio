// create responsive navbar
const mobile_nav = document.querySelector(".mobile-navbar-btn")
const header = document.querySelector(".header");
mobile_nav.addEventListener("click", () => {
    header.classList.toggle("active")
})

window.addEventListener("scroll", function () {
    let header = document.querySelector(".header")
    if (window.pageYOffset >= 500) {
        header.classList.add("sticky")
    } else {
        header.classList.remove("sticky")

    }

})