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
  /* NAV */
  /*
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
  /* HEADER */
  /*document.getElementById("headerTitle").textContent = language.controllers.headerTitle;
  /* HEADER */
  /* FOOTER */
   /*document.getElementById("ppolicy").textContent = language.nav.ppolicy
   /* FOOTER */
  /*document.getElementById("controllers-header").textContent = language.controllers.header;
  document.getElementById("step1").textContent = language.controllers.step1H;
  document.getElementById("step1P").innerHTML = language.controllers.step1P;
  document.getElementById("step2").textContent = language.controllers.step2H;
  document.getElementById("step2P").innerHTML = language.controllers.step2P;
  document.getElementById("step3").textContent = language.controllers.step3H;
  document.getElementById("step3P").innerHTML = language.controllers.step3P;
  document.getElementById("step4").textContent = language.controllers.step4H;
  document.getElementById("step4P").innerHTML = language.controllers.step4P;
  */
  Object.keys(language.controllers).forEach(function(key) {
    var element = document.getElementById(key);
    if (element) {
        element.innerHTML = language.controllers[key];
    }
});

Object.keys(language.nav).forEach(function(key) {
  var element = document.getElementById(key);
  if (element) {
      element.innerHTML = language.nav[key];
  }
});
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