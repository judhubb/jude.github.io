// HOME===============

function reloadToTop() {
  sessionStorage.setItem("reloadFromTop", "true");
  location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
  const homeContent = document.querySelector('.home-content');

 
  function triggerHomeContentAnimation() {
    homeContent.style.display = 'block';  
    homeContent.classList.remove('zoom-in-up');  
    setTimeout(() => {
      homeContent.classList.add('zoom-in-up');  
    }, 0);
  }

  
  if (sessionStorage.getItem("reloadFromTop") === "true") {
    sessionStorage.removeItem("reloadFromTop");
    triggerHomeContentAnimation();  
  } else {
    
    triggerHomeContentAnimation();
  }

  
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

function triggerAnimationManually() {
  const homeContent = document.querySelector('.home-content');
  homeContent.classList.remove('zoom-in-up');  
  setTimeout(() => {
    homeContent.classList.add('zoom-in-up');  
  }, 0);
}

// ABOUT==============


const aboutObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 
};

const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const image = entry.target.querySelector('img'); 
    const meText = entry.target.querySelector('.me'); 
    
    
    if (entry.isIntersecting) {
      image.classList.add('visible'); 
      meText.classList.add('visible');
      image.classList.remove('hidden'); 
      meText.classList.remove('hidden'); 
    } else {
      image.classList.remove('visible'); 
      meText.classList.remove('visible'); 
      image.classList.add('hidden'); 
      meText.classList.add('hidden'); 
    }
  });
}, aboutObserverOptions);

const aboutSections = document.querySelectorAll('.aboutme');
aboutSections.forEach(section => aboutObserver.observe(section)); 

// ABOUT ME ANIMATION FIX


const meObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
};


const meObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); 
      entry.target.classList.remove('hidden'); 
    } else {
      entry.target.classList.remove('visible');
      entry.target.classList.add('hidden'); // 
    }
  });
}, meObserverOptions);

const meElements = document.querySelectorAll('.me');
meElements.forEach(me => meObserver.observe(me));

// INTEREST==============

const iconObserverOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};


const iconObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('flipped');
    } else {
      entry.target.classList.remove('flipped');
    }
  });
}, iconObserverOptions);

const icons = document.querySelectorAll('.interest .icon');
icons.forEach(icon => iconObserver.observe(icon));

// SERVICE==============

document.addEventListener('DOMContentLoaded', () => {
  
  const boxObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  
  const boxObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, boxObserverOptions);

  const boxes = document.querySelectorAll('.box');
  boxes.forEach(box => boxObserver.observe(box));
});

// CONTACT==========

document.addEventListener("DOMContentLoaded", function () {
    const contactBox = document.querySelector('.contactbox');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                contactBox.classList.add('animate-fade-left');
            } else {
                contactBox.classList.remove('animate-fade-left');
            }
        });
    });

    observer.observe(contactBox);
});