document.addEventListener('DOMContentLoaded', () => {
  const skillSection = document.querySelector('#skills');
  const skillBars = document.querySelectorAll('.skill-bar');

  function animateBars() {
    const sectionPosition = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if (sectionPosition < screenPosition) {
      
      skillBars.forEach((bar) => {
        bar.classList.add('animate-bar');
      });
    } else {
      
      skillBars.forEach((bar) => {
        bar.classList.remove('animate-bar');
      });
    }
  }

  window.addEventListener('scroll', animateBars);
});