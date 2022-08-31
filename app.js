//=======================SCROLL HEADER ===========================//

const scrollHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("scroll-header")
                      : header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader);
//========================== SCROLL Up ================================//
const scrollup = document.getElementById("scroll-up");
const showScrollUp = () => {
    this.scrollY >= 400 ? scrollup.classList.add("showscroll")
                      : scrollup.classList.remove("showscroll")
}
window.addEventListener("scroll", showScrollUp);
scrollup.addEventListener("click", () => {
    window.scrollTo({top:0});
});

//========================== SLIDESHOW ================================//
let activeSlide = -1;
let timer       = 3000;
let slideshow   = document.querySelector(".slideshow");
let slides      = document.querySelectorAll(".slide");
let prev        = document.querySelector(".prev");
let next        = document.querySelector(".next");
let pointsSlides = document.querySelectorAll(".slide img")
var points = Array.from(pointsSlides);
let otherProducts = document.querySelector(".other-products");

function classSwitcher(){
    slides.forEach(slide => slide.classList.remove("active"));
    points.forEach(slide => slide.classList.remove("not-active"));
    slides[activeSlide].classList.add("active");
    points[points.length - 1].classList.add("not-active");
    updatePoints();   
}

function updatePoints() {
    otherProducts.textContent = "";
        for(let i = 0 ; i<points.length -2 ; i++){
            let myImg = document.createElement("img");
            myImg.className = "not-active-img";
            myImg.src = points[i].currentSrc;
            console.log(myImg.src);
            otherProducts.appendChild(myImg);
        };
};

let goNext = () => {
    activeSlide = (activeSlide == slides.length - 1) ? 0 : activeSlide+1;
    let x = points[0];
    points.shift();
    points.push(x);
    classSwitcher();
};



let goPrev = () => {
    activeSlide = (activeSlide == 0) ? slides.length - 1 : activeSlide-1;   
    classSwitcher();
};





let runSlideshow = setInterval(goNext, timer);
next.addEventListener("click", e => goNext());
prev.addEventListener("click", e => goPrev());
slideshow.addEventListener("mouseover", e => clearInterval(runSlideshow));
slideshow.addEventListener("mouseleave", e => runSlideshow = setInterval(goNext, timer));


//======================== SCROLL SECTION ACTIVE LINK =======================//
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute("id");
        const sectionsClass = document.querySelector(".nav__menu a[href*=" +sectionId +"]");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link");
        }
        else {
            sectionsClass.classList.remove("active-link");
        }
    });
}
    
window.addEventListener("scroll", scrollActive);

//------------------ CHANGE THEME --------------------//
let moonBtn = document.getElementById("moon-button");
let sunBtn = document.getElementById("sun-button");
const darkColor ="dark-theme";
// const themeIcon = "sun";
function getTheme() {
    document.body.classList.contains(themeColor) ? dark : light ;
}

function getIcon() {
    themeBtn.classList.contains(themeIcon) ? sun : moon;
}

function themeChanger(){
  document.body.classList.toggle(darkColor);
  moonBtn.classList.toggle("active");
  sunBtn.classList.toggle("active");
//   localStorage.setItem("selected-theme", getTheme);
//   localStorage.setItem("selected-icon", getIcon);
}


moonBtn.addEventListener("click", themeChanger);
    
//------------------- SCROLL REVEAL --------------------//
const sr = ScrollReveal({
    origin:"top",
    distance: "60px",
    duration: 2500,
    delay: 480,
    // reset: true

});

sr.reveal(`.home__data, .footer__container, .footer__info`);
sr.reveal(`.home__images`, {origin: "bottom" , delay:800});
sr.reveal(`.new__card, .brand__img`, {interval:100});
sr.reveal(`.collection__explore:nth-child(1)`, {origin:"right"});
sr.reveal(".collection__explore:nth-child(2)", {origin:"left"});