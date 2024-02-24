<?php
require_once "./standParser.php";

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Pilótáknak // For Pilots</title>
    <script src="../js/for-pilots.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/chartviewer/chart.js" type="module" defer></script>
    <script src="../js/langCookie.js?v=2"></script>
    <link rel="stylesheet" href="../css/for-pilots.css">
    <link rel="stylesheet" href="../css/nav.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="icon" href="../img/favicon.png" type="image/icon-type">
    <script async
        src="https://www.bing.com/api/maps/mapcontrol?key=Ar618W1YuXkONdzgUl4menBldwcHr22XEVUJjsVV1Z0UFAmtjvNpj2cERR85YMUw&callback=initMap">
        </script>

    <script type="text/javascript" src="../stands/LHBP/circles.js">
    </script>
</head>

<body>

    <?php
    foreach ($occupiedStands as $key => $stand) {
        echo "<input type='hidden' class='occupiedStand' value='{$key}'>";
    }
    ?>
    <div class="nav-small" id='nav-small'>
        <img id="nav-close" src="../img/navclose.svg" alt="Open Menu">

        </a>

        <div class="menuitemsSmall">
            <a href="./index.php"> <img src="../img/logo.svg" class="vacchunlogoSmall" alt="vACCHUN logo">

                <a href="../index.php" id="homeSmall"></a>
                <a href="../about-us/" id="aboutUsSmall"></a>
                <a href="../for-pilots/" id="forPilotsSmall" class="menuitem-active"></a>
                <a href="../events/" id="eventsSmall"></a>
                <a href="../booking/" id="bookingSmall"></a>
                <a href="../controllers/" id="controllersSmall"></a>
                <a href="../feedback/" id="feedbackSmall"></a>

                <div class="navscdp langsw-div"><img class="" id="langSwSmall" src="../img/en.png"
                        alt="Switch language">
                </div>
        </div>
    </div>
    <header id="header">
        <script>
            
        const METAR = async () => {
            const APIResponse = await fetch('https://metar.vatsim.net/LHBP');
            const LHBPMetar = await APIResponse.text();
            document.getElementById("rawmetar").textContent = LHBPMetar;

            if (LHBPMetar.includes("CAVOK")) {
            document.getElementById("header").classList.add("CAVOK");
            }
            if (LHBPMetar.includes("FEW")) {
                document.getElementById("header").classList.add("FEW");
            }
            if (LHBPMetar.includes("SCT")) {
                document.getElementById("header").classList.add("SCT");
            }
            if (LHBPMetar.includes("BKN")) {
                document.getElementById("header").classList.add("BKN");
            }
            if (LHBPMetar.includes("OVC", "aaa")) {
                document.getElementById("header").classList.add("OVC");
            }
            if (LHBPMetar.includes("RA")) {
                document.getElementById("header").classList.add("RA");
            }
            if (LHBPMetar.includes("SN")) {
                document.getElementById("header").classList.add("SNOW");
            }
        }
        METAR();
        /*  to be added: SNOW:"SP" "SW" "SG" "SHS"
            RA: "FG" */
        
        
        </script>

        <div id="header-center" class="header-center">
            <h1 id="headerTitle"></h1>
            <div class="curr-metar">
                <p id='rawmetar'>Loading METAR...</p>
            </div>
        </div>
    </header>
    <section class="notam-section">
        <h1 id="NOTAM">NOTAM</h1>
        <div class="controls">
            <button data-icao="lhcc" id="lhcc" class="notambtn leftbtn">LHCC</button>
            <button data-icao="lhbp" id="lhbp" class="notambtn active">LHBP</button>
            <button data-icao="lhdc" id="lhdc" class="notambtn">LHDC</button>
            <button data-icao="lhsm" id="lhsm" class="notambtn rightbtn">LHSM</button>
        </div>

        <div class="filterActive">
            <button id="filterActive">Filter Active</button>
        </div>

        <div id="notamsDisplay">
            Loading
        </div>
    </section>
    <script async
        src="https://www.bing.com/api/maps/mapcontrol?callback=initMap&key=Ar618W1YuXkONdzgUl4menBldwcHr22XEVUJjsVV1Z0UFAmtjvNpj2cERR85YMUw"></script>

    <section class="stand-standfinder">
        <h1 id="standmapHeader">Állóhelyek</h1>
        <div class="map-container">
            <div id="lhbpMap"></div>

            <div class="standfinder">
                <h1 id="standfinderHeader">Stand Finder</h1>
                <form action="./index.php#standmapHeader" method="post" class="standfinder-form" id="standfinder-form">
                    <div class='radio-container'>
                        <label class="radio-label" onclick="changeAirlineType(0)">
                            <input type="radio" class="option-input radio" name="standfinder-airlinetype"
                                id="standfinder-realairline" checked />
                            <span id="realAirline">Real Airline</span>
                        </label>
                        <label lass="radio-label" onclick="changeAirlineType(1)">
                            <input type="radio" class="option-input radio" name="standfinder-airlinetype"
                                id="standfinder-va" />
                            <span id="VirtualAirline">Virtual Airline</span>
                        </label>
                    </div>
                    <div class="standfinder-field" id="standfinder-callsigninput">
                        <img src="../img/input-icons/headset.svg" class="standfinder-label" alt="">
                        <span class="input-divider"></span>
                        <input type="text" id="callsign" name="callsign" class="standfinder-input"
                            placeholder="Callsign" maxlength="3" autocomplete="off">
                    </div>
                    <div class="standfinder-field">
                        <img src="../img/input-icons/user.svg" class="standfinder-label" alt="">
                        <span class="input-divider"></span>
                        <input type="text" id="airport" name="airport" class="standfinder-input"
                            placeholder="Destination/Departure airport" required maxlength="4" autocomplete="off">
                    </div>
                    <div class="standfinder-field">
                        <img src="../img/input-icons/atyp.svg" class="standfinder-label" alt="">
                        <span class="input-divider"></span>
                        <input type="text" id="aircraft" name="aircraft" class="standfinder-input"
                            placeholder="Aircraft ICAO" required maxlength="4" autocomplete="off">
                    </div>
                    <div class='radio-container' id="cargoOrPax" style="display: none;">
                        <label class="radio-label">
                            <input type="radio" class="option-input radio" name="standfinder-vatype"
                                id="standfinder-vatype-cargo" value="cargo" />
                            <span id="cargo">Cargo</span>
                        </label>
                        <label lass="radio-label">
                            <input type="radio" class="option-input radio" name="standfinder-vatype" value="pax"
                                id="standfinder-vatype-pax" />
                            <span id="pax">Passenger</span>
                        </label>
                    </div>
                    <button class="standfinder-submit" role="submit"><span
                            id="submit">Küldés</span></button>

                    <div class="standfinderResult">
                        <?php
                        include("../stands/LHBP/lhbp-standfinder.php");
                        if ((isset($_POST["standfinder-vatype"]) && $_POST["standfinder-vatype"] != "false") && isset($_POST["airport"]) && isset($_POST["aircraft"])) {
                            $recommendedStand = getVaStand($_POST["airport"], $_POST["aircraft"], $_POST["standfinder-vatype"]);
                            if ($recommendedStand) {
                                echo "<span class='recommendation' id='recommendation'>$recommendedStand</span>";
                                echo "<span id='stand-marked'>The recommended stand have been marked with blue on the map. Have a nice flight!</span>";
                            } else {
                                echo "<span id='unable-to-find-stand'>'We were unable to find a stand for you. Please refer to the chartviewer's info page below, to find out which stand suits your flight!</span>";
                            }
                        } else if (isset($_POST["callsign"]) && isset($_POST["airport"]) && isset($_POST["aircraft"])) {

                            $recommendedStand = getStand(strtoupper($_POST["callsign"]), strtoupper($_POST["airport"]), strtoupper($_POST["aircraft"]));
                            if ($recommendedStand) {
                                echo "<span class='recommendation' id='recommendation'>$recommendedStand</span>";
                                echo "<span id='stand-marked'>The recommended stand have been marked with blue on the map. Have a nice flight!</span>";
                            } else {
                                echo "<span id='unable-to-find-stand'>We were unable to find a stand for you. Please refer to the chartviewer's info page below, to find out which stand suits your flight!</span>";
                            }
                        }
                        ?>
                    </div>
                </form>
            </div>
        </div>
    </section>



    <script defer type="text/javascript">
        function changeAirlineType(type) {
            // 0 == Real
            // 1 == VA

            let callsignField = document.getElementById("standfinder-callsigninput");
            let cargoOrPax = document.getElementById("cargoOrPax");

            if (type == 0) {
                cargoOrPax.style.display = "none";
                callsignField.style.display = "flex";
                document.getElementById("standfinder-vatype-pax").checked = false;
                document.getElementById("standfinder-vatype-cargo").checked = false;
                document.getElementById("standfinder-vatype-cargo").value = "false";
                document.getElementById("standfinder-vatype-pax").value = "false";

            } else {
                cargoOrPax.style.display = "flex";
                callsignField.style.display = "none";
                document.getElementById("standfinder-vatype-pax").checked = false;
                document.getElementById("standfinder-vatype-cargo").checked = true;
                document.getElementById("standfinder-vatype-cargo").value = "cargo";
                document.getElementById("standfinder-vatype-pax").value = "pax";
            }
        }



        let occStandInputs = document.getElementsByClassName("occupiedStand");

        let occupiedStands = []
        for (let index = 0; index < occStandInputs.length; index++) {
            const stand = occStandInputs[index].value;
            occupiedStands.push(stand);
        }

        let red = 'rgba(243, 30, 35,0.2)'
        let green = 'rgba(147, 255, 133,0.5)'
        var map;
        function initMap() {
            map = new Microsoft.Maps.Map('#lhbpMap', {
                center: new Microsoft.Maps.Location(47.433972, 19.260377),
                mapTypeId: Microsoft.Maps.MapTypeId.aerial,

                zoom: 14
            });
            Microsoft.Maps.loadModule('Microsoft.Maps.SpatialMath', function () {
                var center = map.getCenter();


                LHBPcircles.forEach(element => {
                    let occ = occupiedStands.includes(element[4]);
                    createCircle(new Microsoft.Maps.Location(element[0], element[1]), element[2], occ ? red : green, element[4]);
                });

                if (document.getElementById("recommendation")) {
                    console.log("exist!");
                    LHBPcircles.forEach(element => {
                        if (element[4] == document.getElementById("recommendation").textContent) {
                            createCircle(new Microsoft.Maps.Location(element[0], element[1]), element[2], "rgba(52, 119, 235,0.5)", "");

                        }
                    });
                }
            });
        }
        function createCircle(center, radius, color, label) {
            var locs = Microsoft.Maps.SpatialMath.getRegularPolygon(center, radius, 36, Microsoft.Maps.SpatialMath.DistanceUnits.Miles);

            addPolygonWithLabel(new Microsoft.Maps.Polygon(locs, { fillColor: color, strokeThickness: 0 }), label)
        }





        function addPolygonWithLabel(polygon, label) {
            map.entities.push(polygon);

            var centroid = Microsoft.Maps.SpatialMath.Geometry.centroid(polygon);

            var labelPin = new Microsoft.Maps.Pushpin(centroid, {
                icon: '<svg xmlns="https://www.w3.org/2000/svg" width="1" height="1"></svg>',
                title: label
            });

            polygon.metadata = { label: labelPin };

            map.entities.push(labelPin);
        }




    </script>


    <section class="chartsection">
        <h1 id="charts"></h1>

        <div class="chartcontainer">
            <div class="leftside">
                <div class="airportsearch">
                    <input type="text" id="airportSearch" placeholder="Search for an airport... ">
                </div>
                <div class="airports-container" id="airports-container">

                </div>
            </div>

            <div class="rightside">
                <div class="topbar">
                    <span class="topbar-text topbar-active" id="infomenu" data-name="info">Info</span>
                    <span class="topbar-text" data-name="aerodrome" id="aerodromemenu">Aerodrome</span>
                    <span class="topbar-text" data-name="sid" id="sidmenu">SID</span>
                    <span class="topbar-text" data-name="star" id="starmenu">STAR</span>
                    <span class="topbar-text" data-name="approach" id="approachmenu">Approach</span>
                    <span class="topbar-text" data-name="enroute" id="enroutemenu">En-Route</span>
                </div>
                <div class="topbar hide" id="chartselect">
                </div>
                <div class="chart">
                    <div id="airport-info">

                    </div>
                    <iframe id="iframe" src="" title=""></iframe>
                </div>
            </div>
        </div>
    </section>

    <nav id="nav-normal">
        <img id="nav-icon" src="../img/nav.svg" alt="Open Menu">
        <a href="./index.php" class="vacchunlogo"><img src="../img/logo.svg" alt="vACCHUN logo">
            <div class="menuitems">
                <a href="../index.php" id="home" class="nav-link-ltr"></a>
                <a href="../about-us/" id="aboutUs" class="nav-link-ltr"></a>
                <a href="../for-pilots/" id="forPilots" class="menuitem-active nav-link-ltr"></a>
                <a href="../events/" id="events" class="nav-link-ltr"></a>
                <a href="../booking/" id="booking" class="nav-link-ltr"></a>
                <a href="../controllers/" id="controllers" class="nav-link-ltr"></a>
                <a href="../feedback/" id="feedback" class="nav-link-ltr"></a>
                <div class="langsel">
                    <div class="navscdp langsw-div"><img class="" id="langSw" src="../img/en.png" alt="Switch language">
                    </div>
                </div>

    </nav>
    <footer>
        <p>Virtual Area Control Centre Hungary</p>
        <p>Charts are for simulation purposes only!</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2024</p>
    </footer>
</body>

</html>