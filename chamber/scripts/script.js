/*---- Last Modified ---*/
const currentYear = new Date().getFullYear();
lastModified.textContent = `${currentYear}`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

/*-------DATE----------*/
function updateDate() {
    let date = new Date();
    console.log(date.getDate());
    let DD = String(date.getDate()).padStart(2, '0');
    let MM = String(date.getMonth() + 1).padStart(2, '0'); 
    let YYYY = date.getFullYear();
  
    const DateFormat = MM + '~' + DD + '~' + YYYY;
    console.log(DateFormat);

    document.querySelector('#currentYear').innerHTML = DateFormat;
    const fulldateUS = new Intl.DateTimeFormat("en-US", {
        dateStyle: "full"
    }).format(date);
    let statement = `${fulldateUS}`;
    document.querySelector('#currentYear').innerHTML = statement;
}
updateDate();

/*------HAMBRUGER------
function toggleMenu() {
    document.getElementsByClassName('menu')[0].classList.toggle('responsive')
} */
