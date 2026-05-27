// Navbar shadow on scroll

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 50) {
    navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    navbar.style.boxShadow = "none";
  }

});


// Simple typing effect

const text = "Aspiring Software Engineer";
let index = 0;

function typingEffect() {

  const typingElement = document.querySelector(".tag");

  if (index < text.length) {
    typingElement.innerHTML =
      `<i class="fa-solid fa-code"></i> ` + text.slice(0, index + 1);

    index++;
    setTimeout(typingEffect, 100);
  }

}

typingEffect();