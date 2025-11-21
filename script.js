// Navbar
const toggleBtn = document.getElementById('menuToggle');
const menu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggleBtn.classList.toggle('open');

    // Change icon between ☰ and ✖
    if (menu.classList.contains('active')) {
        toggleBtn.textContent = '✖';
    } else {
        toggleBtn.textContent = '☰';
    }
});


// service section 
document.addEventListener("DOMContentLoaded", function() {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach((el, index) => {
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 100;

      if (elementTop < windowHeight - elementVisible) {
        setTimeout(() => {
          el.classList.add("show");
        }, index * 150);
      } else {
        el.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});


// about section 
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    reveals.forEach((el, i) => {
      const elementTop = el.getBoundingClientRect().top;
      if (elementTop < windowHeight - 80) {
        setTimeout(() => el.classList.add("show"), i * 100);
      } else {
        el.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  window.addEventListener("load", revealOnScroll);
});



// contact section
function revealOnScroll() {
  const elements = document.querySelectorAll(".reveal");

  elements.forEach((el) => {
    const position = el.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (position < windowHeight - 100) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Call once for initial check
revealOnScroll();


// footer
document.getElementById("year").textContent = new Date().getFullYear();


