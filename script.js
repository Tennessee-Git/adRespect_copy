const trailer = document.getElementById("trailer");
const gradient = document.getElementById("gradient");
const navbar = document.getElementById("header");
const navbarText = document.querySelectorAll(".header-text");

window.onmousemove = (e) => {
  gradient.style.background = `radial-gradient(
    800px circle at ${e.clientX}px ${e.clientY}px,
    rgba(218, 48, 209, 0.4),
    transparent 90%
  )`;
  const x = e.clientX - trailer.offsetWidth / 2,
    y = e.clientY - trailer.offsetHeight / 2;
  const keyframes = {
    transform: `translate(${x}px, ${y}px)`,
  };

  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards",
  });
};

window.onscroll = function () {
  if (window.scrollY >= 1) {
    navbar.classList.add("header-scrolled");
    navbarText.forEach((element) => {
      element.classList.add("header-text-hidden");
    });
  } else {
    navbar.classList.remove("header-scrolled");
    navbarText.forEach((element) => {
      element.classList.remove("header-text-hidden");
    });
  }
};
