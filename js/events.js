import lang from "./lang.js";
var userLang = null;

if (getLanguage()) {
  userLang = getLanguage();
} else {
  userLang = navigator.language || navigator.userLanguage;
}
let language = lang.en;

var satCal = new jsCalendar("#saturday-cal");
var mondayCal = new jsCalendar("#monday-cal");

setCalendarSaturdays(getOddSaturdays(new Date().getFullYear()));
setCalendarMondays(getMondays(new Date().getFullYear()));

if (userLang.includes("hu")) {
  language = lang.hu;
  satCal.setLanguage("hu");
  mondayCal.setLanguage("hu");
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
  document.getElementById("headerTitle").textContent =
    language.events.headerTitle;

  /* FOOTER */
  document.getElementById("ppolicy").textContent = language.nav.ppolicy
  /* FOOTER */
}

applyLanguage();
switchImage();

function switchLang() {
  if (language == lang.en) {
    language = lang.hu;
    document.getElementById("langSw").src = "../img/hu.png";
    document.getElementById("langSwSmall").src = "../img/hu.png";
    setLanguage("hu");
    switchImage();
    applyLanguage();
  } else {
    language = lang.en;
    document.getElementById("langSw").src = "../img/en.png";
    document.getElementById("langSwSmall").src = "../img/en.png";
    setLanguage("en");
    switchImage();
    applyLanguage();
  }
}
document.getElementById("langSw").addEventListener("click", switchLang);
document.getElementById("langSwSmall").addEventListener("click", switchLang);

function getOddSaturdays(year) {
  const daysInYear = (year) =>
    (new Date(year + 1, 0, 1) - new Date(year, 0, 1)) / (24 * 60 * 60 * 1000);

  const firstSatDate = (year) => {
    const week_day = new Date(year, 0, 1).getDay();
    const satDate = new Date(year, 0, 7 - week_day);
    return satDate.getDate();
  };

  const yearDays = daysInYear(year);
  const first = firstSatDate(year);
  const oddsaturdays = [];
  let i = 0;
  for (let day = first; day <= yearDays; day = day + 7) {
    if (i % 2 == 0) {
      const date = new Date(year, 0, day);
      const day_str = String(date.getDate()).padStart(2, "0");
      const month_str = String(date.getMonth() + 1).padStart(2, "0");
      oddsaturdays.push(day_str + "/" + month_str + "/" + date.getFullYear());
    }
    i += 1;
  }
  return oddsaturdays;
}

function getMondays(year) {
  const daysInYear = (year) =>
    (new Date(year + 1, 0, 1) - new Date(year, 0, 1)) / (24 * 60 * 60 * 1000);

  const firstMonDate = (year) => {
    const week_day = new Date(year, 0, 1).getDay();
    const monDate = new Date(year, 0, 9 - week_day);
    return monDate.getDate();
  };

  const yearDays = daysInYear(year);
  const first = firstMonDate(year);
  const mondays = [];
  for (let day = first; day <= yearDays; day = day + 7) {
    const date = new Date(year, 0, day);
    const day_str = String(date.getDate()).padStart(2, "0");
    const month_str = String(date.getMonth() + 1).padStart(2, "0");
    mondays.push(day_str + "/" + month_str + "/" + date.getFullYear());
  }
  return mondays;
}

function setCalendarSaturdays(saturdays) {
  saturdays.forEach((sat) => {
    satCal.select(sat);
  });
}

function setCalendarMondays(mondays) {
  mondays.forEach((mon) => {
    mondayCal.select(mon);
  });
}
