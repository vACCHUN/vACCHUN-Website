<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Visszajelzés // Feedback</title>
    <script src="../js/feedback.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/langCookie.js?v=2"></script>
    <link rel="stylesheet" href="../css/feedback.css">
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
                <a href="../feedback/" id="feedbackSmall" class="menuitem-active"></a>

                <div class="navscdp langsw-div"><img width="40px" class="" id="langSwSmall" src="../img/en.png"
                        alt="Switch language">
                </div>
        </div>
    </div>
    <header>
        <div id="header-center" class="header-center">
            <h1 id="headerTitle">Feedback</h1>
        </div>
    </header>

    <section>
        <h1 id="bookingSectionH1"></h1>
        <form action="" class="booking-form" method="post">
            <p id="feedbackTopText"></p>


            <div class="booking-field">
                <img src="../img/input-icons/user.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input disabled type="number" id="feedback-cid" name="feedback-cid" class="booking-input" placeholder="CID"
                    required>
            </div>


            <div class="booking-field">
                <img src="../img/input-icons/headset.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select disabled name="feedback-controller" id="feedback-controller" class="booking-input booking-select"
                    required>
                    <option value="1623074">Missing</option>
                </select>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/airport.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select disabled name="feedback-position" id="feedback-position" class="booking-input booking-select" required>
                    <option value="LHBP_DEL">LHBP_DEL</option>
                    <option value="LHBP_GND">LHBP_GND</option>
                    <option value="LHBP_TWR">LHBP_TWR</option>
                    <option value="LHBP_APP">LHBP_APP</option>
                    <option value="LHBP_D_APP">LHBP_D_APP</option>
                    <option value="LHCC_CTR">LHCC_CTR</option>
                    <option value="LHCC_W_CTR">LHCC_W_CTR</option>
                    <option value="LHCC_U_CTR">LHCC_U_CTR</option>
                    <option value="LHCC_2_CTR">LHCC_2_CTR</option>
                    <option value="LHCC_I_CTR">LHCC_I_CTR</option>
                    <option value="LHDC_I_TWR">LHDC_I_TWR</option>
                    <option value="LHSM_I_TWR">LHSM_I_TWR</option>
                    <option value="other" id="feedbackPositionOther">Other - Please Specify Below</option>
                </select>
            </div>

            <div class="booking-field">
                <textarea disabled name="feedback-freetext" id="feedback-freetext" cols="30" rows="10" class="booking-input" placeholder="What were your impressions about the session?" required></textarea>
            </div>

            <button disabled class="booking-submit" role="submit"><span id="feedback-submit">Küldés</span></button>

            <div class="inop">
                <h1 class="bold">INOP</h1>
                <h1>SEE T/LOG</h1>
            </div>
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
                <a href="../booking/" id="booking" class="nav-link-ltr"></a>
                <a href="../controllers/" id="controllers" class="nav-link-ltr"></a>
                <a href="../feedback/" id="feedback" class="menuitem-active nav-link-ltr"></a>
                <div class="langsel">
                    <div class="navscdp langsw-div"><img class="" id="langSw" src="../img/en.png" alt="Switch language">
                    </div>
                </div>
    </nav>

    <footer>
        <p>Virtual Area Control Center Hungary</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2024</p>
    </footer>
</body>

</html>