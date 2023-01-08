const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

const currentYear = new Date().getFullYear();
copyright.textContent = `${currentYear}`;

try {
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);
} catch (e) {
  alert("Error with code or browser does not support Locale");
}





let quantity = document.querySelector('#q');