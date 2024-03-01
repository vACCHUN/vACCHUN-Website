import lang from "./lang.js";
var userLang = null;

if (getLanguage()) {
  userLang = getLanguage();
} else {
  userLang = navigator.language || navigator.userLanguage;
}
let language = lang.en;

const img1Clickspot = document.querySelector("#img1-clickspot");
const img2Clickspot = document.querySelector("#img2-clickspot");
const img3Clickspot = document.querySelector("#img3-clickspot");

let activeimg = img1Clickspot;

if (userLang.includes("hu")) {
  language = lang.hu;
}

function switchImage() {
  if (language == lang.en) {
    document.getElementById("langSw").src = "./img/hu.png";
    document.getElementById("langSwSmall").src = "./img/hu.png";
  } else {
    document.getElementById("langSw").src = "./img/en.png";
    document.getElementById("langSwSmall").src = "./img/en.png";
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
  document.getElementById("headerText").textContent =
    language.header.headerText;
  document.getElementById("headerEventsBtn").textContent =
    language.header.eventsBtn;
  document.getElementById("headerBoardBtn").textContent =
    language.header.boardButton;

  /* HEADER */
  /* FOOTER */
  document.getElementById("ppolicy").textContent = language.nav.ppolicy
  /* FOOTER */
  /*CARD */
  document.getElementById("ourActivities").textContent =
    language.card.ourActivities;
  document.getElementById("ourActivitiesSmall").textContent =
    language.card.ourActivities;

  document.getElementById("flyingHeader").textContent =
    language.card.flyingHeader;
  document.getElementById("flying").textContent = language.card.flying;
  document.getElementById("controllingHeader").textContent =
    language.card.controllingHeader;
  document.getElementById("controlling").textContent =
    language.card.controlling;
  document.getElementById("trainingHeader").textContent =
    language.card.trainingHeader;
  document.getElementById("training").textContent = language.card.training;

  /*CARD SMALL*/
  if (activeimg == img1Clickspot) {
    document.getElementById("cardMultiHeader").textContent =
      language.card.flyingHeader;
    document.getElementById("cardMultiText").textContent = language.card.flying;
  } else if (activeimg == img2Clickspot) {
    document.getElementById("cardMultiHeader").textContent =
      language.card.controllingHeader;
    document.getElementById("cardMultiText").textContent =
      language.card.controlling;
  } else {
    document.getElementById("cardMultiHeader").textContent =
      language.card.trainingHeader;
    document.getElementById("cardMultiText").textContent =
      language.card.training;
  }
}

applyLanguage();
switchImage();

function switchLang() {
  if (language == lang.en) {
    language = lang.hu;
    document.getElementById("langSw").src = "./img/hu.png";
    document.getElementById("langSwSmall").src = "./img/hu.png";
    setLanguage("hu");
    switchImage();
    applyLanguage();
  } else {
    language = lang.en;
    document.getElementById("langSw").src = "./img/en.png";
    document.getElementById("langSwSmall").src = "./img/en.png";
    setLanguage("en");
    switchImage();
    applyLanguage();
  }
}
document.getElementById("langSw").addEventListener("click", switchLang);
document.getElementById("langSwSmall").addEventListener("click", switchLang);

function switchActiveimg(e, active) {
  activeimg.classList.remove("cardimg-active");
  activeimg = active;
  activeimg.classList.add("cardimg-active");
  applyLanguage();
}

img1Clickspot.addEventListener("click", (e) => {
  switchActiveimg(e, img1Clickspot);
});
img2Clickspot.addEventListener("click", (e) => {
  switchActiveimg(e, img2Clickspot);
});
img3Clickspot.addEventListener("click", (e) => {
  switchActiveimg(e, img3Clickspot);
});
