const nav = document.querySelector("#nav-small");
const navsc = document.getElementById("nav-normal");
const disappeared = document.getElementsByClassName("navscdp");

window.onscroll = function () { 
    if (window.scrollY >= 1 ) {
        navsc.classList.add("color");
        navsc.classList.remove("no-color");
    } 
    else {
        navsc.classList.remove("color");
        navsc.classList.add("no-color");
    }
};

document.querySelector("#nav-icon").addEventListener("click", () => {
  nav.style.visibility = "visible";
  document.querySelector("#nav-icon").style.display = "none";
  document.querySelector("#nav-normal").style.display = "none";
  document.querySelector("#header-center").style.display = "none";
  if (!nav.classList.contains("nav-opening")) {
    nav.classList.add("nav-opening");
  }
});

document.querySelector("#nav-close").addEventListener("click", () => {
  nav.style.visibility = "hidden";
  document.querySelector("#nav-icon").style.display = "flex";
  document.querySelector("#nav-normal").style.display = "flex";
  document.querySelector("#header-center").style.display = "flex";

  if (nav.classList.contains("nav-opening")) {
    nav.classList.remove("nav-opening");
  }
});
