// script.js
// Prevent right-click menu
document.addEventListener("contextmenu", (e) => e.preventDefault());

// Block common DevTools shortcuts
document.addEventListener("keydown", function (e) {
  if (
    (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) ||
    (e.ctrlKey && e.key === "U") ||
    e.key === "F12"
  ) {
    e.preventDefault();
  }
});

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}
function filterCards() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const text = card.textContent.toLowerCase();
    if (text.includes(input)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
}


// Track certificate clicks
document.addEventListener('DOMContentLoaded', () => {
  const certLinks = document.querySelectorAll('.card a');

  certLinks.forEach(link => {
    link.addEventListener('click', () => {
      console.log('User is viewing a certificate:', link.href);
    });
  });
});
