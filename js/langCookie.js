function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  return true;
}

function getLanguage() {
  return localStorage.getItem("lang");
}

console.log("langc")