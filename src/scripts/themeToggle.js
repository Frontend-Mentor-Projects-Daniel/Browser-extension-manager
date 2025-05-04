// @ts-check

// Step 1. Target the HTML
const html = document.querySelector('html');

// Step 2. Target the theme toggle button
const themeToggleButton = document.querySelector('.header__theme-toggle');
console.log(themeToggleButton);

// window.addEventListener('DOMContentLoaded', () => {
//   const themeToggleButton = document.querySelector('.header__theme-toggle');
//   themeToggleButton?.addEventListener('click', () => console.log('Clicked!'));
//   console.log(themeToggleButton);
// });

// Step 3. On button click, check the current value of the data-theme attribute
// Step 4. If data-theme="dark" set data-theme="light" and vice-versa
