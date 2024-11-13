document.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("nav ul li a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    
    link.classList.remove("hover");

    
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("hover");
    }
  });
});