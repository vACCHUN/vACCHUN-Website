import lang from "./lang.js";
var userLang = null;

if (getLanguage()) {
  userLang = getLanguage();
} else {
  userLang = navigator.language || navigator.userLanguage;
}
let language = lang.en;

if (userLang.includes("hu")) {
  language = lang.hu;
}

function switchImage() {
  if (language == lang.en) {
    document.getElementById("langSw").src = "../img/hu.png";
    document.getElementById("langSwSmall").src = "../img/hu.png";
  } else {
    document.getElementById("langSw").src = "../img/en.png";
    document.getElementById("langSwSmall").src = "../img/en.png";
  }
}

function applyLanguage() {
  Object.keys(language.forPilots).forEach(function(key) {
    var element = document.getElementById(key);
    if (element) {
        element.innerHTML = language.forPilots[key];
    }
});

Object.keys(language.nav).forEach(function(key) {
  var element = document.getElementById(key);
  if (element) {
      element.innerHTML = language.nav[key];
  }
});


document.getElementById("callsign").placeholder = language.forPilots.callsign;
document.getElementById("airport").placeholder = language.forPilots.airport;
document.getElementById("aircraft").placeholder = language.forPilots.aircraft;
}

applyLanguage();
switchImage();


function switchLang() {
  if (language == lang.en) {
    language = lang.hu;
    document.getElementById("langSw").src = "../img/hu.png";
    document.getElementById("langSwSmall").src = "../img/hu.png";
    setLanguage("hu")
    switchImage();
    applyLanguage();
  } else {
    language = lang.en;
    document.getElementById("langSw").src = "../img/en.png";
    document.getElementById("langSwSmall").src = "../img/en.png";
    setLanguage("en")
    switchImage();
    applyLanguage();
  }
}
document.getElementById("langSw").addEventListener("click", switchLang);
document.getElementById("langSwSmall").addEventListener("click", switchLang);


const notambtns = document.getElementsByClassName("notambtn");

let selectedNotam = "lhbp";
let filterActive = false;
DisplayNotams(filterActive);

async function DisplayNotams(filtered = false) {
  document.getElementById("notamsDisplay").innerHTML = "Loading... / Betöltés...";
  filtered = filtered ? "&filtered=true" : "";
  const APIResponse = await fetch(`notams.php?icao=` + selectedNotam + filtered);
  const notams = await APIResponse.json();
  document.getElementById("notamsDisplay").innerHTML = "";

  let innerhtml = `<span id="notamsCount">${notams.length} NOTAMs</span>`;
  notams.forEach(notam => {
      notam = notam.replace(/\n/g, '<br>');
      innerhtml += `<div class='notamRow'>${notam}</div>`;
  });

  document.getElementById("notamsDisplay").innerHTML = innerhtml;
}


for (let i = 0; i < notambtns.length; i++) {
  const notambtn = notambtns[i];

  notambtn.addEventListener("click", (e) => {
    const icao = notambtn.dataset.icao;
    
    document.getElementById(selectedNotam).classList.remove("active");
    selectedNotam = icao;
    notambtn.classList.add("active");

    DisplayNotams(filterActive);
    
  });
}

document.getElementById("filterActive").addEventListener("click", () => {
  filterActive = !filterActive;
  if (filterActive) {
    document.getElementById("filterActive").classList.add("active")
  } else {
    document.getElementById("filterActive").classList.remove("active");
  }
  DisplayNotams(filterActive);
})