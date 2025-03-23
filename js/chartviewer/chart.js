import airport from "./airports.js";

const milAip = {
  LHKE: "https://www.ket.hm.gov.hu/milaiphun/Megosztott%20dokumentumok/Forms/AllItems.aspx?RootFolder=%2Fmilaiphun%2FMegosztott%20dokumentumok%2FMILAIP%2FPart%203%20AERODROMES%20(AD)%2FAERODROMES%202%2FLHKE%20KECSKEMÉT&FolderCTID=0x01200005F7E2F6A0763B489FB0273C8D5D9532&View=%7B3CC9DF8E-BB97-4202-8765-273B2108092C%7D",
  LHPA: "https://www.ket.hm.gov.hu/milaiphun/Megosztott%20dokumentumok/Forms/AllItems.aspx?RootFolder=%2Fmilaiphun%2FMegosztott%20dokumentumok%2FMILAIP%2FPart%203%20AERODROMES%20(AD)%2FAERODROMES%202%2FLHPA%20PÁPA&FolderCTID=0x01200005F7E2F6A0763B489FB0273C8D5D9532&View=%7B3CC9DF8E-BB97-4202-8765-273B2108092C%7D",
  LHSN: "https://www.ket.hm.gov.hu/milaiphun/Megosztott%20dokumentumok/Forms/AllItems.aspx?RootFolder=%2Fmilaiphun%2FMegosztott%20dokumentumok%2FMILAIP%2FPart%203%20AERODROMES%20(AD)%2FAERODROMES%202%2FLHSN%20SZOLNOK&FolderCTID=0x01200005F7E2F6A0763B489FB0273C8D5D9532&View=%7B3CC9DF8E-BB97-4202-8765-273B2108092C%7D",
};

const airports = airport.airport;
const infos = airport.info;
const charts = airport.chart;

let airportSelected = "LHBP";
let airportSubmenu = "info";

const airportsContainer = document.querySelector("#airports-container");

for (const icao in airports) {
  // LHPA, LHKE, LHSN
  const div = document.createElement("div");
  div.classList.add("airport");

  div.dataset.icao = icao;
  div.dataset.name = airports[icao];

  const pIcao = document.createElement("p");
  pIcao.textContent = icao;
  pIcao.style.fontWeight = "bold";
  const pName = document.createElement("p");
  pName.textContent = airports[icao];

  div.appendChild(pIcao);
  div.appendChild(pName);
  if (icao == "LHPA" || icao == "LHKE" || icao == "LHSN") {
    div.classList.add("airport-mil");
    const pMIL = document.createElement("p");
    pMIL.classList.add("MIL");
    pMIL.textContent = "MILITARY";
    div.appendChild(pMIL);
  }
  airportsContainer.appendChild(div);
}

const airportDivs = document.getElementsByClassName("airport");

function searchAirport(keyword) {
  if (keyword != "") {
    for (let index = 0; index < airportDivs.length; index++) {
      const element = airportDivs[index];
      const icao = element.dataset.icao.toLowerCase();
      const name = element.dataset.name.toLowerCase();
      keyword = keyword.toLowerCase();

      if (icao.includes(keyword) || name.includes(keyword)) {
        if (!element.classList.contains("show-airport")) {
          element.classList.add("show-airport");
        }
      } else {
        element.classList.remove("show-airport");
      }
    }
  } else {
    for (let index = 0; index < airportDivs.length; index++) {
      const element = airportDivs[index];
      element.classList.add("show-airport");
    }
  }
}

document.querySelector("#airportSearch").addEventListener("keyup", (e) => {
  searchAirport(e.target.value);
});

searchAirport("");

const topbarTexts = document.getElementsByClassName("topbar-text");

function setinfopage(icao) {
  const infopage = document.querySelector("#airport-info");
  if (icao != false && icao != undefined) {
    infopage.innerHTML = infos[icao];
  } else {
    infopage.innerHTML = "";
  }
}

setinfopage("LHBP");
selectSubmenu("info", document.querySelector("#infomenu"));

function selectAirport(icao) {
  if (icao == "LHKE" || icao == "LHSN" || icao == "LHPA") {
    window.open(milAip[icao], "_blank");
    return;
  }
  airportSelected = icao;
  selectSubmenu("info", document.querySelector("#infomenu"));

  let aerodrome = false;
  let sid = false;
  let star = false;
  let approach = false;
  let enroute = false;

  for (const type in charts[airportSelected]) {
    type == "aerodrome" ? (aerodrome = true) : "";
    type == "sid" ? (sid = true) : "";
    type == "star" ? (star = true) : "";
    type == "approach" ? (approach = true) : "";
    type == "enroute" ? (enroute = true) : "";
  }

  const aerodromemenu = document.querySelector("#aerodromemenu");
  const sidmenu = document.querySelector("#sidmenu");
  const starmenu = document.querySelector("#starmenu");
  const approachmenu = document.querySelector("#approachmenu");
  const enroutemenu = document.querySelector("#enroutemenu");
  const infomenu = document.querySelector("#infomenu");

  aerodrome
    ? (aerodromemenu.style.display = "flex")
    : (aerodromemenu.style.display = "none");
  sid ? (sidmenu.style.display = "flex") : (sidmenu.style.display = "none");
  star ? (starmenu.style.display = "flex") : (starmenu.style.display = "none");
  approach
    ? (approachmenu.style.display = "flex")
    : (approachmenu.style.display = "none");
  enroute
    ? (enroutemenu.style.display = "flex")
    : (enroutemenu.style.display = "none");

}

selectAirport("LHBP");

function openChartNewTab(path) {
  window.open(path);
}

function selectChart(path, name, element) {
  iframe.title = name;
  iframe.src = path;
  iframe.classList.remove("hide");

  const chartselectBtns = document.getElementsByClassName("chartselectable");
  for (let i = 0; i < chartselectBtns.length; i++) {
    let e = chartselectBtns[i];
    if (e.classList.contains("chart-active")) {
      e.classList.remove("chart-active");
    }
  }

  element.classList.add("chart-active");
}

function addListeners() {
  const chartselectBtns = document.getElementsByClassName("chartselectable");
  for (let index = 0; index < chartselectBtns.length; index++) {
    const element = chartselectBtns[index];
    element.addEventListener("click", () => {
      selectChart(element.dataset.path, element.dataset.name, element);
      element.classList.add("chart-active");
    });
  }

  const openNewTabBtns = document.getElementsByClassName("chart-opennewtab");
  for (let index = 0; index < openNewTabBtns.length; index++) {
    const element = openNewTabBtns[index];
    element.addEventListener("click", () => {
      openChartNewTab(element.dataset.path);
    });
  }
}

function selectSubmenu(sub, element) {
  airportSubmenu = sub;

  /* SET TOPBAR ACTIVE */
  for (let index = 0; index < topbarTexts.length; index++) {
    const e = topbarTexts[index];
    if (e.classList.contains("topbar-active")) {
      e.classList.remove("topbar-active");
    }
  }

  element.classList.add("topbar-active");

  var e = document.querySelector("#chartselect");
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
  /* SET TOPBAR ACTIVE */

  /* Display the right content*/

  const iframe = document.querySelector("#iframe");
  const chartselect = document.querySelector("#chartselect");
  if (sub == "info") {
    setinfopage(airportSelected);
    iframe.classList.add("hide");
    chartselect.classList.add("hide");
  } else {
    setinfopage();

    chartselect.classList.remove("hide");
    let chartIndex = 0;
    for (const chartname in charts[airportSelected][airportSubmenu]) {
      const span = document.createElement("span");
      span.classList.add("chartselectable");
      span.textContent = chartname;
      span.dataset.path = charts[airportSelected][airportSubmenu][chartname];
      span.dataset.name = chartname;
      if (chartIndex == 0) {
        span.dataset.autoselect = "true";
      } else {
        span.dataset.autoselect = "false";
      }

      chartIndex++;

      const img = document.createElement("img");
      img.src = "../img/opennewtab.svg";
      img.classList.add("chart-opennewtab");
      img.dataset.path = span.dataset.path;

      span.appendChild(img);

      chartselect.appendChild(span);
    }

  }
  /* Display the right content*/

  const chartselectBtns = document.getElementsByClassName("chartselectable");
  for (let i = 0; i < chartselectBtns.length; i++) {
    let e = chartselectBtns[i];
    if (e.dataset.autoselect == "true") {
      selectChart(e.dataset.path, e.dataset.name, e);
    }
  }

  addListeners();
}

for (let index = 0; index < airportDivs.length; index++) {
  const element = airportDivs[index];
  element.addEventListener("click", () => {
    selectAirport(element.dataset.icao);
  });
}

for (let index = 0; index < topbarTexts.length; index++) {
  const element = topbarTexts[index];
  element.addEventListener("click", () => {
    selectSubmenu(element.dataset.name, element);
  });
}
