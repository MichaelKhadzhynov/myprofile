// Home button
const homeButton = document.querySelector(".home-btn");
homeButton.addEventListener("click", ()=>{
    window.scrollTo({top:0 , left: 0, behavior: "smooth"});
});

const loginBtn = document.querySelector(".btnLogin-popup");
loginBtn.addEventListener("click", ()=>{
    wrapper.classList.add("active-popup");
});

// Wrapper button
const wrapperClose = document.querySelector(".icon-close");
wrapperClose.addEventListener("click", ()=>{
    wrapper.classList.remove("active-popup");
});

// Skills button
const skills = document.querySelector(".skills-btn");
skills.addEventListener("click", ()=>{
    document.querySelector(".automation-tech").scrollIntoView({behavior: "smooth"})
})