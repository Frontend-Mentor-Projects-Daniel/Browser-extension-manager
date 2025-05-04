// @ts-check
import granimInstance from './granim';

const html = document.querySelector('html');
const themeToggleButton = document.querySelectorAll('.header__theme-toggle');

themeToggleButton.forEach((btn) => {
  if (btn instanceof HTMLButtonElement) {
    btn.addEventListener('click', () => {
      // On button click, check the current value of the data-theme attribute
      if (html instanceof HTMLHtmlElement) {
        const currentTheme = html.getAttribute('data-theme');
        // If data-theme="dark" set data-theme="light" and vice-versa
        if (currentTheme === 'dark') {
          html.setAttribute('data-theme', 'light');
          // granim is for animating gradients
          granimInstance.changeState('animated');
          renderIcon('sun');
        }

        if (currentTheme === 'light') {
          html.setAttribute('data-theme', 'dark');
          granimInstance.changeState('static');
          renderIcon('moon');
        }
      }
    });
  }
});

/**
 * Render new button with icon
 * @param {"sun" | "moon"} dataSymbol
 */
function renderIcon(dataSymbol) {
  if (dataSymbol === 'sun') {
    const sunButton = document.querySelector('[data-symbol="sun"]');
    const moonButton = document.querySelector('[data-symbol="moon"]');

    if (sunButton instanceof HTMLButtonElement) {
      sunButton.classList.add('hidden');

      if (moonButton instanceof HTMLButtonElement) {
        moonButton.classList.remove('hidden');
      }
    }
  }

  if (dataSymbol === 'moon') {
    const sunButton = document.querySelector('[data-symbol="sun"]');
    const moonButton = document.querySelector('[data-symbol="moon"]');

    if (moonButton instanceof HTMLButtonElement) {
      moonButton.classList.add('hidden');

      if (sunButton instanceof HTMLButtonElement) {
        sunButton.classList.remove('hidden');
      }
    }
  }
}
