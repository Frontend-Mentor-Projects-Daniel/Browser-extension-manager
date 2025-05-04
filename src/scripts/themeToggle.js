// @ts-check
import granimInstance from './granim';

const html = document.querySelector('html');
const themeToggleButton = document.querySelector('.header__theme-toggle');

if (themeToggleButton instanceof HTMLButtonElement) {
  themeToggleButton.addEventListener('click', () => {
    // On button click, check the current value of the data-theme attribute
    if (html instanceof HTMLHtmlElement) {
      const currentTheme = html.getAttribute('data-theme');
      // If data-theme="dark" set data-theme="light" and vice-versa
      if (currentTheme === 'dark') {
        html.setAttribute('data-theme', 'light');
        // granim is for animating gradients
        granimInstance.changeState('animated');
      } else if (currentTheme === 'light') {
        html.setAttribute('data-theme', 'dark');
        granimInstance.changeState('static');
      }
    }
  });
}
