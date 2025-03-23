<?php 
require_once '../config.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Foglalás // Booking</title>
    <script src="../js/booking.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/langCookie.js?v=2"></script>

    <link rel="stylesheet" href="../css/booking.css">
    <link rel="stylesheet" href="../css/nav.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="icon" href="../img/favicon.png" type="image/icon-type">

</head>

<body>
    <div class="nav-small" id='nav-small'>
        <img id="nav-close" src="../img/navclose.svg" alt="Open Menu">

        </a>

        <div class="menuitemsSmall">
            <a href="../index.php"> <img src="../img/logo.svg" class="vacchunlogoSmall" alt="vACCHUN logo">

                <a href="../index.php" id="homeSmall"></a>
                <a href="../about-us/" id="aboutUsSmall"></a>
                <a href="../for-pilots/" id="forPilotsSmall"></a>
                <a href="../events/" id="eventsSmall"></a>
                <a href="../booking/" id="bookingSmall" class="menuitem-active"></a>
                <a href="../controllers/" id="controllersSmall"></a>
                <a href="../feedback/" id="feedbackSmall"></a>

                <div class="navscdp langsw-div"><img class="" id="langSwSmall" src="../img/en.png"
                        alt="Switch language">
                </div>
        </div>
    </div>
    <header>
        <div id="header-center" class="header-center">
            <h1 id="headerTitle"></h1>
        </div>
        <a href="#downarrow"><img src="../img/downarrow.svg" class="downarrow" id="downarrow" alt=""></a>
    </header>


    <section>
        <h1 id="bookingSectionH1"></h1>
        <form action="index.php#bookingFirstrow" class="booking-form" id="booking-form" method="post">
            <?php
                if (isset($_POST["booking-time"]) && isset($_POST["booking-name"]) && isset($_POST["booking-email"]) && isset($_POST["booking-airport"]) && isset($_POST["booking-traffictype"]) && isset($_POST["booking-lang"])) {
                    $userSelectedTime = strtotime($_POST["booking-time"]);

                    $currentServerTime = time();
                
                    $timeDifference = $userSelectedTime - $currentServerTime;

                    
                
                    // Check if the time difference is less than 3 hours
                    if ($timeDifference < 3 * 60 * 60) {
                        echo "<p class='booking-error' id='bookingError'>You cannot request ATC within 3 hours of departure or arrival. / Nem tudsz kérni irányítást az indulástól vagy érkezéstől számított 3 órán belül!</p>";
                    } else {
                        $data = array(
                            'airport' => array('icao' => htmlspecialchars($_POST["booking-airport"])),
                            'date' => htmlspecialchars($_POST["booking-time"]),
                            'direction' => htmlspecialchars($_POST["booking-traffictype"]),
                            'email' => htmlspecialchars($_POST["booking-email"]),
                            'en' => ($_POST["booking-lang"] == "en" ? true : false),
                            'name' => htmlspecialchars($_POST["booking-name"])
                        );

                        $url = $pociAPI;

                        $ch = curl_init($url);

                        curl_setopt($ch, CURLOPT_POST, 1);
                        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
                        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));

                        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

                        $response = curl_exec($ch);

                        if($response === false) {
                            echo "<p class='booking-error' id='bookingError'>There has been an error. / Hibába ütköztünk.</p>";
                        } else {
                            echo "<p id='bookingSuccess'>Booking successful. We will soon inform you about your request in email. / Sikeres foglalás. Hamarosan értesítünk emailben a foglalásról.</p>";

                        }

                        curl_close($ch);
                    }
                }
            ?>
            <p id="bookingFirstrow">Itt jelezheted irányítóink számára, hogy adott időpontban jelen leszel egyik
                repterünkön, így megpróbálhatunk lefedettséget biztosítani Neked!</p>
            <p id="bookingSecondrowP"><strong id="bookingSecondrow">Amennyiben valamelyik irányítónk teljesíti kérésed,
                    emailben
                    jelezzük!</strong></p>


            <div class="booking-field">
                <img src="../img/input-icons/user.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input type="text" id="booking-name" name="booking-name" class="booking-input" placeholder="Név"
                    required>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/email.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input type="email" id="booking-email" name="booking-email" class="booking-input" placeholder="Email"
                    required>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/airport.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select name="booking-airport" id="booking-airport" class="booking-input booking-select" required>
                    <option value="LHBP" id="LHBP">LHBP - Budapest Ferihegy</option>
                    <option value="LHDC" id="LHDC">LHDC - Debrecen</option>
                    <option value="LHSM" id="LHSM">LHSM - Hévíz-Balaton</option>
                    <option value="LHXX" id="LHXX">Egyéb</option>
                </select>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/traffictype.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select name="booking-traffictype" id="booking-traffictype" class="booking-input booking-select"
                    required>
                    <option value="1" id="departure">Induló Forgalom</option>
                    <option value="0" id="arrival">Érkező Forgalom</option>
                    <option value="2" id="vfr-trainingflight">VFR gyakorlórepülés</option>
                    <option value="3" id="ifr-trainingflight">IFR gyakorlórepülés</option>
                </select>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/traffictype.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input type="text" name="booking-time" id="eobt-eta" placeholder="EOBT/ETA" class="booking-input" required>
            </div>

            <input type="hidden" name="booking-lang" id="booking-lang">


            <button class="booking-submit" role="submit"><span id="booking-submit">Küldés</span></button>
        </form>
    </section>

    <script>document.getElementById("booking-form").addEventListener("submit", () => {document.getElementById("booking-lang").value = localStorage.getItem("lang")});</script>


    <nav id="nav-normal">
        <img id="nav-icon" src="../img/nav.svg" alt="Open Menu">
        <a href="../index.php" class="vacchunlogo"><img src="../img/logo.svg" alt="vACCHUN logo">
            <div class="menuitems">
                <a href="../index.php" id="home" class="nav-link-ltr"></a>
                <a href="../about-us/" id="aboutUs" class="nav-link-ltr"></a>
                <a href="../for-pilots/" id="forPilots" class="nav-link-ltr"></a>
                <a href="../events/" id="events" class="nav-link-ltr"></a>
                <a href="../booking/" id="booking" class="menuitem-active nav-link-ltr"></a>
                <a href="../controllers/" id="controllers" class="nav-link-ltr"></a>
                <a href="../feedback/" id="feedback" class="nav-link-ltr"></a>
                <div class="langsel">
                    <div class="navscdp langsw-div"><img class="" id="langSw" src="../img/en.png" alt="Switch language">
                    </div>
                </div>

    </nav>

    <footer>
        <p>Virtual Area Control Center Hungary</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2025</p>
    </footer>
</body>

</html>
<script>
    var dtt = document.getElementById('eobt-eta')
    dtt.onfocus = function (event) {
        this.type = 'datetime-local';
        this.focus();
        this.showPicker()
    }
    dtt.onblur = function (text) {
        this.type = 'text'
        this.blur();
    }

</script>