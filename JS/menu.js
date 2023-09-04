
const hamburger = document.querySelector(".menu");
const navBarOff = document.querySelector("#navBarOff"); 



hamburger.addEventListener("click", () => {
    navBarOff.classList.toggle("displayMenu")

})

