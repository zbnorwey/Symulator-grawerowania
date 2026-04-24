self.addEventListener('fetch', (event) => {
  // Prosty mechanizm pass-through dla PWA
});
// Zamiast zwykłego update(), poczekaj na załadowanie czcionek
document.fonts.ready.then(function () {
  update();
});
