const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = `Erika Ramirez Rendon`
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${currentYear}`;
