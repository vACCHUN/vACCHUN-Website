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


function applyNavLanguage() {

  Object.keys(language.controllers).forEach(function(key) {
    var element = document.getElementById(key);
    if (element) {
        element.innerHTML = language.controllers[key];
    }
});
}

function translateAllSections() {
    Object.keys(language).forEach(function (section) {
      Object.keys(language[section]).forEach(function (key) {
        var element = document.getElementById(key);
        if (element) {
          element.innerHTML = language[section][key];
        }
      });
    });
  }


applyNavLanguage();
switchImage();
translateAllSections();

function switchLang() {
  if (language == lang.en) {
    language = lang.hu;
    document.getElementById("langSw").src = "../img/hu.png";
    document.getElementById("langSwSmall").src = "../img/hu.png";
    setLanguage("hu")
    switchImage();
    applyNavLanguage();
    translateSection(section);
  } else {
    language = lang.en;
    document.getElementById("langSw").src = "../img/en.png";
    document.getElementById("langSwSmall").src = "../img/en.png";
    setLanguage("en")
    switchImage();
    applyNavLanguage();
    translateSection(section);
  }
}


document.getElementById("langSw").addEventListener("click", switchLang);
document.getElementById("langSwSmall").addEventListener("click", switchLang);

export { language, translateSection };