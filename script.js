document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-links a");
  const navbar = document.getElementById("navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.style.background = "indigo";
      navLinks.forEach((link) => {
        link.style.color = "black";
      });
    } else {
      navbar.style.background = "rgba(0, 0, 0, 0.8)";
      navLinks.forEach((link) => {
        link.style.color = "white";
      });
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      link.style.color = "#f09400";
    });

    link.addEventListener("mouseout", function () {
      if (window.scrollY > 50) {
        link.style.color = "black";
      } else {
        link.style.color = "white";
      }
    });
  });
});
