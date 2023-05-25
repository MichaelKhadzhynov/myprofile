const parallax_el = document.querySelectorAll(".parallax");
const main = document.querySelector("main");

let xValue = 0, yValue = 0;
let rotateDegree = 0;

function update(cursorPosition) {
    parallax_el.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth/2 ? 1 : -1;

        let zValue = (cursorPosition.clientX - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
                             translateY(calc(-50% + ${-yValue * speedy}px))
                             perspective(2500px) translateZ(${zValue * speedz}px)
                             rotateY(${rotateDegree * rotation}deg)`;
    })
}

update(0);
window.addEventListener("mousemove", (e) =>{
    if(timeline.isActive()) return;

    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

    update(e);
})

if(window.innerWidth >= 725){
    main.style.maxHeight = `${window.innerWidth * 0.8}px`
}else {
    main.style.maxHeight = `${window.innerWidth * 1.8}px`
}

/* GSAP animation*/

let timeline = gsap.timeline();
parallax_el.forEach(el => {
    timeline.from(
        el,
        {
            top: `${el.offsetHeight / 2 + +el.dataset.distance}px`,
            duration: 2,
            ease: "power3.out",
        },
        "1"
    );
});

