const imagenes= document.querySelectorAll(".imagen")
const display=document.querySelector(".displayOff")

imagenes.forEach(imagen=>{
    imagen.addEventListener("click",(e)=>{
   let srcValue=imagen.getAttribute("src");

   display.innerHTML=`
   <img src="${srcValue}" alt="" class="img-show">
    <img src="/imagenes/bx-x.svg" alt="" id="close">
   `;
   display.classList.toggle("displayOn")
   

   //cerrar ventana
   const close=document.getElementById("close");
   close.addEventListener("click",()=>{
    display.classList.remove("displayOn")
   })
})
});






