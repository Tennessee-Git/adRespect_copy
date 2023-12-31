const trailer = document.getElementById("trailer");
const trailerHover = document.getElementById("trailer-hover");
const gradient = document.getElementById("gradient");
const navbar = document.getElementById("header");
const navbarText = document.querySelectorAll(".header-text");
const hoverableElements = document.querySelectorAll(".trailer-hoverable");
const hoverableElementsArray = Array.from(hoverableElements);
const menu = document.getElementById("menu");
const menuClose = document.getElementById("menuClose");
const headerButtons = document.getElementById("headerButtons");
var scrollPosition;

setTimeout(() => {
  document.getElementById("disclaimer").style.display = "none";
  window.scrollTo(0, 0);
}, 5000);

menuClose.addEventListener("click", () => {
  menu.style.display = "none";
  navbar.style.display = "flex";
  window.onscroll = function () {
    changeNavbarOnScroll();
  };
});

headerButtons.addEventListener("click", () => {
  scrollPosition = window.scrollY;
  menu.style.display = "block";
  navbar.style.display = "none";
  window.onscroll = function () {
    window.scrollTo(0, scrollPosition);
  };
});

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

  if (hoverableElementsArray.includes(e.target)) {
    trailer.animate(
      {
        outline: "1px solid white",
        outlineOffset: "25px",
      },
      { duration: 400, fill: "forwards" }
    );
  } else {
    trailer.animate(
      {
        outline: "1px transparent",
        outlineOffset: "0",
      },
      { duration: 400, fill: "forwards" }
    );
  }

  trailer.animate(keyframes, {
    duration: 500,
    fill: "forwards",
  });
};

function changeNavbarOnScroll() {
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
}

window.onscroll = function () {
  changeNavbarOnScroll();
};
