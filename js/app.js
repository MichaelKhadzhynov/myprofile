//Scroll coordinates
window.addEventListener("scroll", ()=>{
    document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`);
})

