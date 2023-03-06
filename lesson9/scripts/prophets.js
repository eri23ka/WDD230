const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
  const response  = await fetch (url);
  const data = await response.json();
  displayProphets(data.prophets);
}

/*Getting them in order from first, second, third, fourth... */
const getNth = (number) => {
  let nth;

  if(number%10===1 && number%100!==11){
    nth = 'st';
  }else if(number%10===2 && number%100!==12){
    nth = 'nd';
  }
  else if(number%10===3 && number%100!==13){
    nth='rd';
  }else{
    nth='th';
  }
  return `${number}${nth}`;
}

const getAge = (dob, dod) => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const birthMonth = dob.split(" ")[1];
  const birthYear = dob.split(" ")[2];

  if(dod){
    const deathMonth = dod.split(" ")[1];
    const deathYear = dod.split(" ")[2];

    if(monthNames.indexOf(deathMonth) < monthNames.indexOf(birthMonth)){
      return parseInt(deathYear, 10) - parseInt(birthYear, 10) - 1;
    }else{
      return parseInt(deathYear, 10) - parseInt(birthYear, 10);
    }
  }else{
    if(new Date().getMonth() < monthNames.indexOf(birthMonth)){
      return parseInt(new Date().getFullYear(), 10) - parseInt(birthYear, 10) - 1;
    }
    return new Date().getFullYear() - parseInt(birthYear, 10);
  }
}

const displayProphets = (prophets) => {
  const cards  = document.querySelector('div.cards');

  prophets.forEach(prophet => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let potrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    p1.textContent = `Place of Birth: ${prophet.birthplace}`;
    p2.textContent = `Date of Birth: ${prophet.birthdate}`;

    potrait.setAttribute('src', prophet.imageurl);
    potrait.setAttribute('alt', `Potrait of ${prophet.name} - ${getNth(prophet.order)} Latter-day President`);
    potrait.setAttribute('loading', 'lazy');
    potrait.setAttribute('width', '340');
    potrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(potrait);

    cards.appendChild(card);
  });
}

getProphetData();