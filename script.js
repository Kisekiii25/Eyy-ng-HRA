let toggleBtn = document.getElementsByClassName("toggle-button")[0]
let navLink = document.getElementsByClassName("navLink")[0]

toggleBtn.addEventListener("click", () => {
    navLink.classList.toggle("active");
})