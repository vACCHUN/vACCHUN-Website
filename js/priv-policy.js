import lang from "./lang.js";
var userLang = null;

if (getLanguage("lang")) {
  userLang = getLanguage("lang");
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
  document.getElementById("headerTitle").textContent = language.privacyPolicy.headerTitle;
  /* HEADER */
  /* Introduction */
  document.getElementById("dearVisitor-title").textContent = language.privacyPolicy.dearVisitor.title;
  document.getElementById("dearVisitor-txt").innerHTML = language.privacyPolicy.dearVisitor.txt;

  document.getElementById("autoInfo-title").textContent = language.privacyPolicy.autoInfo.title;
  document.getElementById("autoInfo-txt").innerHTML = language.privacyPolicy.autoInfo.txt;

  document.getElementById("contact-title").textContent = language.privacyPolicy.contact.title;
  document.getElementById("contact-txt").innerHTML = language.privacyPolicy.contact.txt;

  document.getElementById("cookies-title").textContent = language.privacyPolicy.cookies.title;
  document.getElementById("cookies-txt").innerHTML = language.privacyPolicy.cookies.txt;

  document.getElementById("others-title").textContent = language.privacyPolicy.others.title;
  document.getElementById("others-txt").innerHTML = language.privacyPolicy.others.txt;

  document.getElementById("rights-title").textContent = language.privacyPolicy.rights.title;
  document.getElementById("rights-txt").innerHTML = language.privacyPolicy.rights.txt;

  document.getElementById("official-title").textContent = language.privacyPolicy.official.title;
  document.getElementById("official-txt").innerHTML = language.privacyPolicy.official.txt;
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

