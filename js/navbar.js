// Controls mobile navigation behaviour.

const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

// Opens and closes the mobile navigation menu.

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  menuToggle.classList.toggle("open");

  document.body.classList.toggle("menu-open");
});

// Close menu after selecting a navigation link.

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");

    menuToggle.classList.remove("open");

    document.body.classList.remove("menu-open");
  });
});

// Close menu when clicking outside the navbar.

document.addEventListener("click", (event) => {
  const clickedNavbar = event.target.closest(".navbar");

  if (!clickedNavbar) {
    navMenu.classList.remove("active");

    menuToggle.classList.remove("open");

    document.body.classList.remove("menu-open");
  }
});

// Automatically highlights the current page.

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach((link) => {
  const linkPage = link.getAttribute("href");

  if (linkPage === currentPage) {
    link.classList.add("active");
  }
});
