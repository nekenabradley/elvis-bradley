// Typing animation

const text = "Développeuse Web | Étudiante en Informatique";
let index = 0;

function typing(){

if(index < text.length){
document.getElementById("typing").innerHTML += text.charAt(index);
index++;
setTimeout(typing,80);
}

}

typing();


// Animation apparition au scroll

const hiddenElements = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {

hiddenElements.forEach(el => {

const position = el.getBoundingClientRect().top;
const screen = window.innerHeight;

if(position < screen - 100){
el.classList.add("show");
}

});

});