const table = document.querySelector(".table");
const arrow = document.querySelector(".trought");

document.addEventListener("DOMContentLoaded", function () {
    arrow.addEventListener("click", function () {
        if (table.style.display === "none") {
            table.style.display = "block";
            arrow.src = "assets/image/arrowup.png";
        } else {
            table.style.display = "none";
            arrow.src = "assets/image/arrowdown.png";
        }
    })
})


const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});