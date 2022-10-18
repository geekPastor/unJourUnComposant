let burgerBnt = document.querySelector(".toggle_menu");
let menu = document.querySelector(".nav__list")

burgerBnt.addEventListener("click", ()=>{
    if (burgerBnt.classList.contains("active")) {
        burgerBnt.classList.remove("active");
        menu.classList.remove("active")
    }else{
        burgerBnt.classList.add("active");
        menu.classList.add("active")
    }
});