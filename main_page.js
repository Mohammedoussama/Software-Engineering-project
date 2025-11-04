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