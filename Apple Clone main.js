const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");

searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-Bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelBtn = document.querySelector(".mobile-search-container .cancel-btn");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
});

cancelBtn.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
});


let slideIndex = 0;
const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

function nextSlide() {
  slideIndex++;
  if (slideIndex >= images.length) {
    slideIndex = 0;
  }
  slides.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function startSlider() {
  setInterval(nextSlide, 4000); 
}

startSlider();



document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const expanded = button.getAttribute('aria-expanded') === 'true' || false;
    button.setAttribute('aria-expanded', !expanded);
  });
});


const selectElement = (element) => document.querySelector(element);

selectElement('.mobile-nav').addEventListener('click', () => {
    selectElement('.nav-container .desktop-nav').classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function() {
  const slides = document.querySelector('.left1');
  const slide = document.querySelectorAll('.slide');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let currentIndex = 0;
  let isAutoSliding = true;

  function showSlide(index) {
      if (index >= slide.length) {
          currentIndex = 0;
      } else if (index < 0) {
          currentIndex = slide.length - 1;
      } else {
          currentIndex = index;
      }
      const offset = -currentIndex * 100;
      slides.style.transition = 'transform 0.5s ease-in-out';
      slides.style.transform = `translateX(${offset}%)`;

      setTimeout(() => {
          slides.style.transition = ''; // Disable transition after it completes for continuous animation
      }, 200); // Match the duration of the transition
  }

  prev.addEventListener('click', function() {
      isAutoSliding = false;
      showSlide(currentIndex - 1);
  });

  next.addEventListener('click', function() {
      isAutoSliding = false;
      showSlide(currentIndex + 1);
  });

  // Optional: Auto slide every 5 seconds
  setInterval(function() {
      if (isAutoSliding) {
          showSlide(currentIndex + 1);
      }
  }, 5000);
});