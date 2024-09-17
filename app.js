// javascript is a scripting langauge 

function myMenuFunction() {
    var menubtn = document.getElementById('myNavMenu')

    if (menubtn.className === "nav-menu") {
        menubtn.className += "responsive";
    } else {
        menubtn.className = "nav-menu";
    }
}

// .............................

const body = document.querySelector("body"),
    toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
});

// .....................

var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Coder", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

// ...........................

const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true

})

sr.reveal(".featured-name", { delay: 100 });
sr.reveal(".text-info", { delay: 200 });
sr.reveal(".text-btn", { delay: 200 });
sr.reveal(".socical-icon", { delay: 200 });
sr.reveal(".featured-image", { delay: 200 });


sr.reveal(".project-box", { interval: 200 });
sr.reveal(".top-header", {});

const srLeft = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,

})

srLeft.reveal(".about-info", { delay: 100 });
srLeft.reveal(".contact-info", { delay: 100 });

const srRight = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,

})

srRight.reveal(".skill", { delay: 100 });
srRight.reveal(".skill-box", { delay: 100 });

const sections = document.querySelectorAll(".section[id]")
function scrollActive() {
    const scrollv = window.scrollv;
    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop = 50,
            sectionId = current.getAttribute("id")
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.add("#active-link");

        } else {

            document.querySelector(".nav-menu a[href*=" + sectionId + "]")
                .classList.remove("#active-link");


        }
    })
}

window.addEventListener("scroll", scrollActive)

document.getElementById('linkedIn').addEventListener('click',function(){
    window.location.href='http://www.linkedin.com/in/shabakhan';
})
document.getElementById('github').addEventListener('click',function(){
    window.location.href='https://github.com/shaba-78666';
})
document.getElementById('telegram').addEventListener('click',function(){
    window.location.href='https://web.telegram.org/';
})