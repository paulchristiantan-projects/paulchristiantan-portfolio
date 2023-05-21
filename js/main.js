//for Themes (Light and Dark mode)
const body = document.querySelector("body");
const textPosition = document.querySelector(".position");
toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
    body.classList.toggle("dark");

});
toggle.addEventListener("click", () => toggle.classList.toggle("active"));

// for Position 
const text = document.querySelector(".position");
const textLoad = () => {
    setTimeout(()=> {
        text.textContent = "Front-End Developer";
    }, 0);
    setTimeout(()=> {
        text.textContent = "Software Engineer";
    }, 4000);
    setTimeout(()=> {
        text.textContent = "Content Creator";
    }, 8000);
}

textLoad();
setInterval(textLoad, 12000);