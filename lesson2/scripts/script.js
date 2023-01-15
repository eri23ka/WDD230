const copyright = document.querySelector('#copyright');

const currentYear = new Date().getFullYear();
copyright.textContent = `©️${currentYear}`;

let text = document.lastModified;
document.getElementById("time").innerHTML = text