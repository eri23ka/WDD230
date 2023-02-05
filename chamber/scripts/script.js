const currentYear = new Date().getFullYear();
lastModified.textContent = `${currentYear}`;

document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;



/*-----Banner-------- */
var banner1 = new Image;
var banner2 = new Text;
banner1.src = "frame.gif";
banner2 = "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";

var frame = new Array(banner1, banner2);
/*var delay = new Array(2500, 500, 2500); <--- It makes the body move*/
var numframes = frame.length;
var curframe = 0;

function animateBanner(){
		curframe++;
		if(curframe == numframes) curframe = 0;
		document.headerBanner.src = frame[curframe].src;
		setTimeout("animateBanner()", 1200);
		/*setTimeout("animateBanner()", delay[curframe]);*/

}
