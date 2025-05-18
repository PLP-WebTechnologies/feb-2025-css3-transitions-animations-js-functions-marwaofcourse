// Elements
const animateBtn = document.getElementById('animateBtn');
const darkModeToggle = document.getElementById('darkModeToggle');

// Trigger bounce animation on button click
animateBtn.addEventListener('click', () => {
  animateBtn.classList.add('animate-bounce');
  
  // Remove animation class after it ends so it can be triggered again
  animateBtn.addEventListener('animationend', () => {
    animateBtn.classList.remove('animate-bounce');
  }, { once: true });
});

// Dark mode toggle and persistence with localStorage
function applyDarkMode(enabled) {
  if (enabled) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
  localStorage.setItem('darkModeEnabled', enabled);
}

// Load preference from localStorage on page load
const savedPreference = localStorage.getItem('darkModeEnabled');
if (savedPreference === 'true') {
  darkModeToggle.checked = true;
  applyDarkMode(true);
}

// Listen for checkbox changes to toggle dark mode
darkModeToggle.addEventListener('change', (e) => {
  applyDarkMode(e.target.checked);
});
