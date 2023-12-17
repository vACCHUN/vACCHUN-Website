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
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

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
    </header>

    <section class="notam-section">
        <h1 id="bookingSectionH1"></h1>
        <p style="color: white; text-align: center">This feature is under development. For now please use the old form. <br>Ez a funkció fejlesztés alatt áll. Addig kérlek használd a régi űrlapot.</p>
        <iframe src="https://vacchun.poci.hu/request/hu" class="booking-iframe" ></iframe>
    </section>

    <section style="display: none">
        <h1 id="bookingSectionH1"></h1>
        <form action="index.php#bookingFirstrow" class="booking-form" method="post">
            <?php
                if (isset($_POST["booking-time"]) && isset($_POST["booking-name"]) && isset($_POST["booking-email"]) && isset($_POST["booking-airport"]) && isset($_POST["booking-traffictype"])) {
                    $userSelectedTime = strtotime($_POST["booking-time"]);

                    // Get current server time
                    $currentServerTime = time();
                
                    // Calculate the difference in seconds
                    $timeDifference = $userSelectedTime - $currentServerTime;
                
                    // Check if the time difference is less than 6 hours (in seconds)
                    if ($timeDifference < 6 * 60 * 60) {
                        echo "<p class='booking-error' id='bookingError'>You cannot request ATC within 6 hours of departure or arrival. / Nem tudsz kérni irányítást az indulástól vagy érkezéstől számított 6 órán belül!</p>";
                    } else {
                        echo "<p id='bookingSuccess'>Booking successful. We will soon inform you about your request in email. / Sikeres foglalás. Hamarosan értesítünk emailben a foglalásról.</p>";
                        // api post request ide
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
                    <option value="departure" id="departure">Induló Forgalom</option>
                    <option value="arrival" id="arrival">Érkező Forgalom</option>
                    <option value="vfr-trainingflight" id="vfr-trainingflight">VFR gyakorlórepülés</option>
                    <option value="ifr-trainingflight" id="ifr-trainingflight">IFR gyakorlórepülés</option>
                </select>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/traffictype.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input type="text" name="booking-time" id="eobt-eta" placeholder="EOBT/ETA" class="booking-input" required>
            </div>

            <button class="booking-submit" role="submit"><span id="booking-submit">Küldés</span></button>
        </form>
    </section>


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
        <p>Virtual Area Control Centre Hungary</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2023</p>
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