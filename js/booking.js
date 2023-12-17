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

  /* FOOTER */
  document.getElementById("ppolicy").textContent = language.nav.ppolicy
  /* FOOTER */

  document.getElementById("headerTitle").textContent =
    language.booking.headerTitle;
  document.getElementById("bookingSectionH1").textContent =
    language.booking.headerTitle;

  /* FORM */
  document.getElementById("bookingFirstrow").textContent =
    language.booking.bookingFirstrow;
  document.getElementById("bookingSecondrow").textContent =
    language.booking.bookingSecondrow;

  /* INPUTS/LABELS */

  
  document.getElementById("departure").textContent = language.booking.departure;
  document.getElementById("arrival").textContent = language.booking.arrival;
  document.getElementById("vfr-trainingflight").textContent = language.booking.vfrTrainingflight;
  document.getElementById("ifr-trainingflight").textContent = language.booking.ifrTrainingflight;
  document.getElementById("booking-submit").textContent = language.booking.submit;
  document.getElementById("LHXX").textContent = language.booking.LHXX;
  document.getElementById("booking-name").placeholder = language.booking.bookingNameLabel;
}

applyLanguage();
switchImage();

function switchLang() {
  if (language == lang.en) {
    language = lang.hu;
    document.getElementById("langSw").src = "../img/hu.png";
    document.getElementById("langSwSmall").src = "../img/hu.png";
    setLanguage("en")
    switchImage();
    applyLanguage();
  } else {
    language = lang.en;
    document.getElementById("langSw").src = "../img/en.png";
    document.getElementById("langSwSmall").src = "../img/en.png";
    setLanguage("hu")
    switchImage();
    applyLanguage();
  }
}
document.getElementById("langSw").addEventListener("click", switchLang);
document.getElementById("langSwSmall").addEventListener("click", switchLang);

let bookingFields = document.getElementsByClassName("booking-field");


for (let index = 0; index < bookingFields.length; index++) {
  const field = bookingFields[index];

  field.children[0].addEventListener("focus", () => {
    field.children[1].classList.add("label-up");
  });


  field.children[0].addEventListener("blur", () => {
    if (field.children[0].value != "") {
      field.children[1].classList.add("label-up");
    } else {
      field.children[1].classList.remove("label-up");
    }
  });
}
