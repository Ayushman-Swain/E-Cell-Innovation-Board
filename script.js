//Nav Bar Background
const navBar = document.querySelector(".nav-bar");

window.addEventListener("scroll" , () => {
    if(window.scrollY > 100){
        navBar.classList.add("scrolled");
    }
    else{
        navBar.classList.remove("scrolled");
    }
});

//Logo click
const logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const footerLogo = document.querySelector(".footer-logo");

footerLogo.addEventListener("click" , () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

//Scroll to Top Icon
const scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll" , () => {
    if(window.scrollY > 500){
        scrollTop.style.display="flex";
    }
    else{
        scrollTop.style.display="none";
    }
});

scrollTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});