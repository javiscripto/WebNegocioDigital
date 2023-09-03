
const hamburger = document.querySelector(".menu");
const navBarOff = document.getElementById("navBarOff"); 



hamburger.addEventListener("click", () => {
    navBarOff.classList.toggle("navBarOn");

})

