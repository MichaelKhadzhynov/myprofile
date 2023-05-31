//Scroll coordinates
window.addEventListener("scroll", ()=>{
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
})

// Welcome button
document.querySelector(".welcome-btn").addEventListener("click", ()=>{
    document.querySelector(".welcome-icon").classList.add("welcome-icon-stop");
    document.querySelector(".about-me").classList.add("about-me-active");
});

document.querySelector(".about-me-close-btn").addEventListener("click", ()=>{
    document.querySelector(".welcome-icon").classList.remove("welcome-icon-stop");
    document.querySelector(".about-me").classList.remove("about-me-active");
});
