
const hamburger = document.querySelector(".menu");
const navBarOff = document.getElementById("navBarOff"); // No necesitas el '#'

console.log(navBarOff.className)
hamburger.addEventListener("click", () => {
    navBarOff.classList.toggle("navBarOn");
})

// const close = document.querySelector(".close");
// close.addEventListener("click", ()=>{
//     navBarOff.classList.toggle("navBarOff")
// })