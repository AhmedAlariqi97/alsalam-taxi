// Swiper js
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  // grabCursor: true,
  loop: true,
  autoplay: {
    delay: 2500,  // Time in milliseconds between slides (2.5 seconds)
    disableOnInteraction: false,  // Continues autoplay after user interaction
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
   // Responsive breakpoints
   breakpoints: {
    280: {
      slidesPerView: 1,
   },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
    },
    // when window width is >= 968px
    968: {
      slidesPerView: 3,
    }
  }
});


// Nav open close
const body = document.querySelector('body'),
      navMenu = body.querySelector('.menu-content'),
      navOpenBtn = body.querySelector('.navOpen-btn'),
      navCloseBtn = navMenu.querySelector('.navClose-btn');

if(navMenu && navOpenBtn){
  navOpenBtn.addEventListener("click", () =>{
    navMenu.classList.add("open");
    body.style.overflowY = "hidden";
  })
}

if(navMenu && navCloseBtn){
  navCloseBtn.addEventListener("click", () =>{
    navMenu.classList.remove("open");
    body.style.overflowY = "scroll";
  })
}

// Change header bg color
window.addEventListener("scroll", () => {
  const scrollY = window.pageYOffset;

  if(scrollY > 5){
    document.querySelector("header").classList.add("header-active");
  }else{
    document.querySelector("header").classList.remove("header-active");
  }

  
  // Nav link indicator

  
}) 

const activePage = window.location.pathname;
 const navLinks = document.querySelectorAll('nav div ul a').
 forEach(link => {
  if(link.href.includes('${activePage}')){
    link.classList.add('.active-navlink')
  }
 })



  // Scroll Reveal Animation
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
  })
  
  sr.reveal(`.title-section,.weWorkTitle,.address-links`, {interval:100,})

sr.reveal(`.content,.about-left,.social-icons,.vision .right,.services-box div:nth-child(1),
  .services-box div:nth-child(3),.weWork .box:nth-child(1),.weWork .box:nth-child(2), .teams-p p:nth-child(1)`, {origin: 'left'})
  
sr.reveal(`.about-right,.about-left-shape,.footer .img,.contact-us .form,.vision .left,
  .services-box div:nth-child(2),.weWork .box:nth-child(3), .teams-p p:nth-child(2)`, {origin: 'right'})


  
  
 