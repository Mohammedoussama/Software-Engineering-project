// Ensure this runs after page assets load
window.addEventListener('load', () => {
  const logo = document.getElementById('mainLogo');
  const hero = document.getElementById('hero');

  // If the image failed to load, you'll see no logo — make sure logo.png exists in same folder
  // Listen for end of CSS animation to then blur the background HIREVO text
  logo.addEventListener('animationend', () => {
    // add a class to the hero container which triggers blur on the HIREVO text
    hero.classList.add('logo-landed');
  });

  // fallback: in case animationend doesn't fire (older browsers), add a timeout
  setTimeout(() => {
    if (!hero.classList.contains('logo-landed')) hero.classList.add('logo-landed');
  }, 1600);
});
// === LOGIN POPUP HANDLING ===

// Select the profile button (adjust selector if needed)
const profileBtn = document.querySelector('.profile-btn');
const popup = document.getElementById('login-popup');

// Open popup when profile button is clicked
profileBtn.addEventListener('click', () => {
  popup.style.display = 'flex';
});

// Close popup when clicking outside the popup card
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
});

// Optional: close popup with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    popup.style.display = 'none';
  }
});
// === SPLASH SCREEN ===
window.addEventListener("load", () => {
  const splash = document.getElementById("splash-screen");

  // Wait 2 seconds before hiding the splash
  setTimeout(() => {
    splash.classList.add("hide");
  }, 500); // you can adjust the delay here
});
