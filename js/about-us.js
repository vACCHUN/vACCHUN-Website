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
  /* HEADER */
  document.getElementById("headerTitle").textContent = language.aboutUs.headerTitle;
  /* HEADER */
  /* FOOTER */
  document.getElementById("ppolicy").textContent = language.nav.ppolicy
  /* FOOTER */
  
  /* Introduction */
  document.getElementById("introduction").textContent = language.aboutUs.introduction;
  document.getElementById("who-are-we-title").textContent = language.aboutUs.whoAreWe.title;
  document.getElementById("who-are-we-txt").textContent = language.aboutUs.whoAreWe.txt;

  document.getElementById("why-choose-us-title").textContent = language.aboutUs.whyChooseUs.title;
  document.getElementById("why-choose-us-txt").textContent = language.aboutUs.whyChooseUs.txt;

  document.getElementById("about-the-training-title").textContent = language.aboutUs.aboutTheTraining.title;
  document.getElementById("about-the-training-txt").textContent = language.aboutUs.aboutTheTraining.txt;

  document.getElementById("theStaff").textContent = language.aboutUs.theStaff;
  document.getElementById("socialmedia").textContent = language.aboutUs.socialMedia;

  document.getElementById("SuleBalazsTitle").textContent = language.aboutUs.staffDescription.SuleBalazs.title;
  document.getElementById("SuleBalazsDesc").textContent = language.aboutUs.staffDescription.SuleBalazs.desc;

  document.getElementById("BoziBenceTitle").textContent = language.aboutUs.staffDescription.BoziBence.title;
  document.getElementById("BoziBenceDesc").textContent = language.aboutUs.staffDescription.BoziBence.desc;
  
  document.getElementById("GrobPeterTitle").textContent = language.aboutUs.staffDescription.GrobPeter.title;
  document.getElementById("GrobPeterDesc").textContent = language.aboutUs.staffDescription.GrobPeter.desc;
  
  document.getElementById("CsernakGergelyTitle").textContent = language.aboutUs.staffDescription.CsernakGergely.title;
  document.getElementById("CsernakGergelyDesc").textContent = language.aboutUs.staffDescription.CsernakGergely.desc;
 
  document.getElementById("GalyassyTamasTitle").textContent = language.aboutUs.staffDescription.GalyassyTamas.title;
  document.getElementById("GalyassyTamasDesc").textContent = language.aboutUs.staffDescription.GalyassyTamas.desc;

  document.getElementById("UjhelyiDomiTitle").textContent = language.aboutUs.staffDescription.UjhelyiDomi.title;
  document.getElementById("UjhelyiDomiDesc").textContent = language.aboutUs.staffDescription.UjhelyiDomi.desc;

  document.getElementById("CsorgoCsabiTitle").textContent = language.aboutUs.staffDescription.CsorgoCsabi.title;
  document.getElementById("CsorgoCsabiDesc").textContent = language.aboutUs.staffDescription.CsorgoCsabi.desc;


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

