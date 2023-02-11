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

/*-----Banner-------- */
var banner1 = new Image;
var banner2 = new Text;
banner1.src = "frame.gif";

var frame = new Array(banner1);
var delay = new Array(2500, 500, 2500);
var numframes = frame.length;
var curframe = 0;

function animateBanner(){
		curframe++;
		if(curframe == numframes) curframe = 0;
		document.headerBanner.src = frame[curframe].src;
		/*setTimeout("animateBanner()", 1200);*/
		setTimeout("animateBanner()", delay[curframe]);

}
