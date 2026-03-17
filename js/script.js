const slider = document.querySelector(".hero-images");
const images = document.querySelectorAll(".hero-images img");

if(slider && images.length > 0){

let index = 0;
const total = images.length;

const firstClone = images[0].cloneNode(true);
slider.appendChild(firstClone);

setInterval(()=>{

index++;

slider.style.transition = "transform 1s ease-in-out";
slider.style.transform = `translateX(-${index * 100}vw)`;

if(index === total){

setTimeout(()=>{

slider.style.transition = "none";
slider.style.transform = "translateX(0)";
index = 0;

},1000);

}

},3000);

}


const btn = document.getElementById("btnOrcamento");

if(btn){
btn.addEventListener("click",()=>{
alert("Em breve entraremos em contato para seu orçamento.");
});
}


const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle){
menuToggle.addEventListener("click",()=>{
navMenu.classList.toggle("active");
});
}