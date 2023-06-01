document.querySelector(".git").addEventListener("click", ()=>{
    document.querySelector(".git-box").classList.add("active-git-box");
})
document.querySelector(".git-close-box").addEventListener("click", ()=>{
    document.querySelector(".git-box").classList.remove("active-git-box");
})

document.querySelector(".git-hub").addEventListener("click", ()=>{
    document.querySelector(".git-hub-box").classList.add("active-git-hub-box");
})
document.querySelector(".git-hub-close-box").addEventListener("click", ()=>{
    document.querySelector(".git-hub-box").classList.remove("active-git-hub-box");
})

document.querySelector(".jira").addEventListener("click", ()=>{
    document.querySelector(".jira-box").classList.add("active-jira-box");
})
document.querySelector(".jira-close-box").addEventListener("click", ()=>{
    document.querySelector(".jira-box").classList.remove("active-jira-box");
})

document.querySelector(".scrum").addEventListener("click", ()=>{
    document.querySelector(".scrum-box").classList.add("active-scrum-box");
})
document.querySelector(".scrum-close-box").addEventListener("click", ()=>{
    document.querySelector(".scrum-box").classList.remove("active-scrum-box");
})

document.querySelector(".postman").addEventListener("click", ()=>{
    document.querySelector(".postman-box").classList.add("active-postman-box");
})
document.querySelector(".postman-close-box").addEventListener("click", ()=>{
    document.querySelector(".postman-box").classList.remove("active-postman-box");
})