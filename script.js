// script.js
AOS.init();

// Toggle dark mode
const toggle = document.getElementById('themeToggle');
toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});

// Counter Animation
const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const speed = 100; // smaller is faster
    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});

// Particles.js background
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 40
    },
    "size": {
      "value": 3
    },
    "color": {
      "value": "#ffffff"
    },
    "move": {
      "speed": 1
    },
    "line_linked": {
      "enable": true,
      "color": "#ffffff"
    }
  }
});
