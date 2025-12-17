'use strict';



/**
 * add event on element
 */

const addEventOnelem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

navToggler.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
});

navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
  });
});


/**
 * header active on scroll down to 100px
 */

const header = document.querySelector("[data-header]");

const activeHeader = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

addEventOnelem(window, "scroll", activeHeader);



/**
 * filter tab
 */

const tabCard = document.querySelectorAll("[data-tab-card]");

let lastTabCard = tabCard[0];

const navigateTab = function () {
  lastTabCard.classList.remove("active");
  this.classList.add("active");
  lastTabCard = this;
}

addEventOnelem(tabCard, "click", navigateTab);

// Animate elements on scroll
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
// parallax effect

// Add subtle parallax to book covers
window.addEventListener('scroll', () => {
    bookSections.forEach(section => {
        const bookCover = section.querySelector('.book-cover');
        if (bookCover) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.3;
            bookCover.style.transform = `translateY(${rate}px)`;
        }
    });
});
// Animate text when book comes into view
const bookTitle = entry.target.querySelector('.book-title');
const bookAuthor = entry.target.querySelector('.book-author');
const bookDesc = entry.target.querySelector('.book-description');

if (bookTitle) {
    bookTitle.style.animation = 'slideInLeft 0.8s ease forwards';
    bookTitle.style.opacity = '0';
    setTimeout(() => { bookTitle.style.opacity = '1'; }, 300);
}