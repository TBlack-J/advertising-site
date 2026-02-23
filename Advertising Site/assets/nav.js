document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown");
  const navLinks = document.querySelector(".nav-links");
  const navToggle = document.querySelector("#navToggle");

  function closeAllDropdowns(except = null) {
    dropdowns.forEach(d => {
      if (d !== except) d.classList.remove("open");
    });
  }

  // Mobile menu open/close
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("open");
      // When opening the mobile menu, close any open dropdowns for cleanliness
      if (!navLinks.classList.contains("open")) closeAllDropdowns();
    });
  }

  // Dropdown open/close
  dropdowns.forEach(dropdown => {
    const button = dropdown.querySelector("button");
    button.addEventListener("click", (e) => {
      e.stopPropagation();

      const isOpen = dropdown.classList.contains("open");
      closeAllDropdowns();

      if (!isOpen) dropdown.classList.add("open");
    });
  });

  // Click outside closes dropdowns; on mobile also closes menu if tap outside header
  document.addEventListener("click", () => {
    closeAllDropdowns();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeAllDropdowns();
      if (navLinks) navLinks.classList.remove("open");
    }
  });
});