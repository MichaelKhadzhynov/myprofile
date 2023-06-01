document.querySelector(".sql").addEventListener("click", ()=>{
    document.querySelector(".sql-box").classList.add("active-sql-box");
})
document.querySelector(".sql-close-box").addEventListener("click", ()=>{
    document.querySelector(".sql-box").classList.remove("active-sql-box");
})

document.querySelector(".intellij-idea").addEventListener("click", ()=>{
    document.querySelector(".intellij-idea-box").classList.add("active-intellij-idea-box");
})
document.querySelector(".intellij-idea-close-box").addEventListener("click", ()=>{
    document.querySelector(".intellij-idea-box").classList.remove("active-intellij-idea-box");
})

document.querySelector(".dbeaver").addEventListener("click", ()=>{
    document.querySelector(".dbeaver-box").classList.add("active-dbeaver-box");
})
document.querySelector(".dbeaver-close-box").addEventListener("click", ()=>{
    document.querySelector(".dbeaver-box").classList.remove("active-dbeaver-box");
})

document.querySelector(".web").addEventListener("click", ()=>{
    document.querySelector(".web-box").classList.add("active-web-box");
})
document.querySelector(".web-close-box").addEventListener("click", ()=>{
    document.querySelector(".web-box").classList.remove("active-web-box");
})