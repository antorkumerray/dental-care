const headerr= document.getElementById("header");
var loader = document.getElementById("preeloder");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

let menu = document.getElementById('menu');
let menubtn = document.getElementById('menubtn');
let menuicon = document.getElementById('menu-icon');


window.addEventListener("scroll", function() {
    headerr.classList.toggle("sticky", window.scrollY > 10);
});

menubtn.onclick = () => {
    menu.classList.toggle('menuactive');
    menuicon.classList.toggle('fa-remove');
}
window.onscroll = () => {
    menu.classList.remove('menuactive');
    menuicon.classList.remove('fa-remove');
}
