<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Online Controllers // Online Irányítók</title>
    <script src="../js/online-controllers.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/langCookie.js"></script>
    <link rel="stylesheet" href="../css/online-controllers.css">
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
                <a href="../booking/" id="bookingSmall"></a>
                <a href="../controllers/" id="controllersSmall"></a>
                <a href="../feedback/" id="feedbackSmall"></a>

                <div class="navscdp langsw-div"><img width="40px" class="" id="langSwSmall" src="../img/en.png"
                        alt="Switch language">
                </div>
        </div>
    </div>
    <header>
        <div id="header-center" class="header-center">
            <h1 id="headerTitle"></h1>
        </div>
    </header>

    <section>
        

        <div class="card-container">
            <?php 
            require("onlineControllers.php");
            $controllers = getControllers();
            $atis = getATIS();
            if (!empty($controllers)) {
                foreach ($controllers as $key => $value) {
                    $facility = "";
                    if ($value["callsign"] == "LHDC_I_TWR") {
                        $facility = "Debrecen Info";
                    } else if ($value["callsign"] == "LHSM_I_TWR") {
                        $facility = "Balaton Info";
                    } else if ($value["callsign"] == "LHPR_I_TWR") {
                        $facility = "Pér Info";
                    } else if ($value["callsign"] == "LHPP_I_TWR") {
                        $facility = "Pogány Info";
                    } else if ($value["callsign"] == "LHBS_I_TWR") {
                        $facility = "Budaörs Radio";
                    } else if ($value["callsign"] == "LHDK_I_TWR") {
                        $facility = "Dunakeszi Radio";
                    } else if ($value["callsign"] == "LHMR_I_TWR") {
                        $facility = "Maklár Radio";
                    } else if ($value["callsign"] == "LHUD_I_TWR") {
                        $facility = "Szeged Info";
                    } else if ($value["callsign"] == "LHBC_I_TWR") {
                        $facility = "Békéscsaba Info";
                    } else if ($value["callsign"] == "LHNY_I_TWR") {
                        $facility = "Nyíregyháza Info";
                    } else if (str_contains($value["callsign"], "LHKE")) {
                        $facility = "Kecskemét ";
                    } else if (str_contains($value["callsign"], "LHSN")) {
                        $facility = "Szolnok ";
                    } else if (str_contains($value["callsign"], "LHPA")) {
                        $facility = "Pápa ";
                    } else if (str_contains($value["callsign"], "LHBP") || str_contains($value["callsign"], "LHCC")) {
                        $facility = "Budapest ";
                    } else {
                        $facility = "Unknown ";
                    }

                    if (!str_contains(strtolower($facility), "info") && !str_contains(strtolower($facility), "radio")) {
                        if ($value["facility"] == 2) {
                            $facility .= "Delivery";
                        } else if ($value["facility"] == 3) {
                            $facility .= "Ground";
                        } else if ($value["facility"] == 4) {
                            $facility .= "Tower";
                        } else if ($value["facility"] == 5) {
                            $facility .= "Approach";
                        } else if ($value["facility"] == 6) {
                            $facility .= "Control";
                        }
                    }
                    $rating;
                    
    
                    if ($value["rating"] == 2) {
                        $rating = "S1";
                    } else if ($value["rating"] == 3) {
                        $rating = "S2";
                    } else if ($value["rating"] == 4) {
                        $rating = "S3";
                    } else if ($value["rating"] == 5) {
                        $rating = "C1";
                    } else if ($value["rating"] == 6) {
                        $rating = "C2";
                    } else if ($value["rating"] == 7) {
                        $rating = "C3";
                    } else if ($value["rating"] == 8) {
                        $rating = "I1";
                    } else if ($value["rating"] == 9) {
                        $rating = "I2";
                    } else if ($value["rating"] == 10) {
                        $rating = "I3";
                    } else if ($value["rating"] == 11) {
                        $rating = "SUP";
                    } else if ($value["rating"] == 12) {
                        $rating = "ADM";
                    }
    
    
                    echo "<div class='card-wrapper'>";
                    echo "<div class='controller-card'>";
                    echo "<div class='topsection'>";
                    echo "<h1 class='facility'>{$facility}</h1>";
                    echo "<h2 class='controllerName'>{$value['name']}</h2>";
                    echo "<p class='rating'>$rating</p>";
                    echo "</div>";
                    echo "<p class='frequency'>Frequency: <br>{$value['frequency']}</p>";
                    echo "</div>";
                    echo "</div>";
                }
            } else {
                echo "<h1 class='no-controllers'>There are no online controllers.</h1>";
            }

            if ($atis) {
                echo "<div class='card-wrapper'>";
                echo "<div class='controller-card'>";
                echo "<div class='topsection'>";
                echo "<h1 class='facility'>LHBP_ATIS</h1>";
                echo "</div>";
                echo "<p class='atis'>$atis</p>";
                echo "</div>";
                echo "</div>";
            }


            ?>

        </div>
    </section>

    <nav id="nav-normal">
        <img id="nav-icon" src="../img/nav.svg" alt="Open Menu">
        <a href="../index.php" class="vacchunlogo"><img src="../img/logo.svg" alt="vACCHUN logo">
            <div class="menuitems">
                <a href="../index.php" id="home" class="nav-link-ltr"></a>
                <a href="../about-us/" id="aboutUs" class="nav-link-ltr"></a>
                <a href="../for-pilots/" id="forPilots" class="nav-link-ltr"></a>
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
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2023</p>
    </footer>
</body>

</html>