const currentYear = new Date().getFullYear();
lastModified.textContent = `${currentYear}`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;