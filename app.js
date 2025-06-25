// get the ellement from DOM
const myNavLinks = document.querySelectorAll(".nav-list li a");
const myMenuList = document.getElementById("menu-list");
const myOpenBtn = document.getElementById("menu-open-button");
const myCloseBtn = document.getElementById("menu-close-button");
const scrollToTopButton = document.querySelector(".scroll-to-top");
const myHeader = document.querySelector("header");
const myLogo = document.getElementById("logo");

// ================================================

// Hide menu Links On Click On Any Link
myNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    myMenuList.classList.remove("open-nav-menu");
    document.body.classList.remove("show");
  });
});

// ================================================

// add new class to body and menu list
myOpenBtn.addEventListener("click", () => {
  // add new class to menu list
  myMenuList.classList.add("open-nav-menu");
  // add new class to body
  document.body.classList.add("show");
});

// ================================================

// remove the new class from body and menu list
myCloseBtn.addEventListener("click", () => {
  // remove the new class and menu list
  myMenuList.classList.remove("open-nav-menu");

  // remove the new class from body
  document.body.classList.remove("show");
});

// ================================================

// move to top on click
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

// Some Edit On Scroll
window.onscroll = function () {
  //  show and hide button scroll
  if (this.scrollY >= 500) {
    scrollToTopButton.classList.add("show");
  } else {
    scrollToTopButton.classList.remove("show");
  }

  //  Change Header BackGround On Scroll
  if (this.scrollY >= 78.5) {
    myHeader.classList.add("sticky");
  } else {
    myHeader.classList.remove("sticky");
  }
};
// move to top on click [logo]
myLogo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
// Add And Remove Active Class From Nav-Links
myNavLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    myNavLinks.forEach((a) => {
      a.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// ================================================
// Initialize Swiper.js
const swiper = new Swiper(".slider-wrapper", {
  // Optional parameters
  spaceBetween: 25,
  loop: true,
  grabCursor: true,

  // pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Animation And Auto Remove
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive display Slides
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});
AOS.init({
  once: false,
  mirror: true,
});
