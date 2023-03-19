const DisplayVisit = document.querySelector("#visits");

let NumberofVisits = Number(window.localStorage.getItem("visits-times"));
if (NumberofVisits !== 0) {
	DisplayVisit.textContent = NumberofVisits;
} 
    else {
	    DisplayVisit.textContent = `This is your first visit!`;
    }

NumberofVisits++;
localStorage.setItem("visits-times", NumberofVisits);

const lastVisit = document.querySelector("#last-visit");

let visit = window.localStorage.getItem("visits-times")

let lastVisitDay = {visit, timestamp: new Date()}
lastVisit.innerHTML = lastVisitDay.timestamp