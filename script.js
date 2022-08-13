const superHeroInput = document.getElementById("SHInput");
const superHeroSearchBtn = document.getElementById("SHsearch");
const randomHero = document.getElementById("randomHero");
const characterDetailsDiv = document.getElementById("aboutSuperHero");

let check;

const findSuperHero = (clickedBtn) => {
  if (check === true) {
    fetch(
      `https://superheroapi.com/api.php/5445904342114523/search/${clickedBtn}`
    )
      .then((reseponse) => reseponse.json())
      .then((json) => {
        characterDetailsDiv.innerHTML = `
      <h2> ${json.results[0].name} </h2>
    <img src='${json.results[0].image.url}' height='250' width'250'> 
    `;
        console.log(json.results[0].powerstats);
        Object.keys(json.results[0].powerstats).map((stat) => {
          characterDetailsDiv.innerHTML += `<div> ${stat.toUpperCase()}: ${json.results[0].powerstats[stat]}</div>`;
        });
      });
  } else {
    fetch(`https://superheroapi.com/api.php/5445904342114523/${clickedBtn}`)
      .then((reseponse) => reseponse.json())
      .then((json) => {
        characterDetailsDiv.innerHTML = `
        <h2> ${json.name} </h2>
        <img src='${json.image.url}' height='250' width'250'>
        `;
        Object.keys(json.powerstats).map((stat) => {
          characterDetailsDiv.innerHTML += `<div> ${stat.toUpperCase()}: ${json.powerstats[stat]}</div>`;
        });
      });
  }
};

superHeroSearchBtn.onclick = () => {
  check = true;
  console.log(check);
  findSuperHero(superHeroInput.value);
};

randomHero.onclick = () => {
  check = false;
  let random = Math.floor(Math.random() * 731) + 1;
  findSuperHero(random);
};
