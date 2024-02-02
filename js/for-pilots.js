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
  /* NAV
  document.getElementById("home").textContent = language.nav.home;
  document.getElementById("homeSmall").textContent = language.nav.home;
  document.getElementById("aboutUs").textContent = language.nav.aboutUs;
  document.getElementById("aboutUsSmall").textContent = language.nav.aboutUs;
  document.getElementById("forPilots").textContent = language.nav.forPilots;
  document.getElementById("forPilotsSmall").textContent =
    language.nav.forPilots;
  document.getElementById("booking").textContent = language.nav.booking;
  document.getElementById("bookingSmall").textContent = language.nav.booking;
  document.getElementById("controllers").textContent = language.nav.controllers;
  document.getElementById("controllersSmall").textContent =
    language.nav.controllers;
  document.getElementById("feedback").textContent = language.nav.feedback;
  document.getElementById("feedbackSmall").textContent = language.nav.feedback;
  document.getElementById("events").textContent = language.nav.events;
  document.getElementById("eventsSmall").textContent = language.nav.events;
  /* NAV */

  /* HEADER 
  document.getElementById("charts").textContent = language.forPilots.charts;
  document.getElementById("headerTitle").textContent = language.forPilots.headerTitle;
  /* HEADER */
  /* FOOTER 
  document.getElementById("ppolicy").textContent = language.nav.ppolicy
  /* FOOTER */

  /*standmap
  document.getElementById("standmapHeader").textContent = language.forPilots.standmap.header;
  /*standmap*/

  /*standfinder
  document.getElementById("standfinder-header").textContent = language.forPilots.standfinder.header;
  document.getElementById("real-airline").textContent = language.forPilots.standfinder.realAirline;
  document.getElementById("virtual-airline").textContent = language.forPilots.standfinder.VirtualAirline

  document.getElementById("standfinder-type-cargo").textContent = language.forPilots.standfinder.cargo;
  document.getElementById("standfinder-type-pax").textContent = language.forPilots.standfinder.pax;

  document.getElementById("standfinder-submit").textContent = language.forPilots.standfinder.submit;
   /*standfinder



  if (document.getElementById("unable-to-find-stand")) {
    document.getElementById("unable-to-find-stand").textContent = language.forPilots.standfinder.unable;
  }
  if (document.getElementById("stand-marked")) {
    document.getElementById("stand-marked").textContent = language.forPilots.standfinder.standMarked;
  }
  */

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