<?php
require("eventParser.php");
determineDiff();


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Rendezvények // Events</title>
    <script src="../js/events.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/langCookie.js?v=2"></script>

    <link rel="stylesheet" href="../css/events.css">
    <link rel="stylesheet" href="../css/nav.css">
    <link rel="stylesheet" href="../css/header.css">
    <link rel="icon" href="../img/favicon.png" type="image/icon-type">

    <!-- jsCalendar -->
    <link rel="stylesheet" type="text/css" href="../calendar/jsCalendar.css">
    <link rel="stylesheet" type="text/css" href="../calendar/jsCalendar.darkseries.css">
    <script type="text/javascript" src="../calendar/jsCalendar.js"></script>
    <script type="text/javascript" src="../calendar/jsCalendar.lang.hu.js"></script>
    <script type="text/javascript" src="../calendar/jsCalendar.lang.en.js"></script>
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
                <a href="../events/" id="eventsSmall" class="menuitem-active"></a>
                <a href="../booking/" id="bookingSmall"></a>
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

    <?php 
    $earliestSNO = getEarliestEvent("Saturday Night Ops Budapest");
    $earliestTAB = getEarliestEvent("Turn around Budapest");
    ?>   

    <section class="events">
        <div class="event-card-container">
            <div class="event-card" data-hoverable="true" id="sno">
                <div class="hideable">
                    <?php 
                    echo "<img src='$earliestSNO[3]' alt='Saturday Night Ops Budapest'>"
                    ?>
                    <div class="event-info">
                        <?php 
                        $snoData = formatEventData($earliestSNO);
                        echo "<h3>{$snoData[0]}</h3>";
                        ?>
                        <div class="event-date">
                            <?php 
                            echo "<p>{$snoData[1]}</p>";
                            echo "<p>{$snoData[2]}z - {$snoData[3]}z</p>";
                            ?>
                           
                        </div>
                    </div>
                </div>

                <div class="event-calendar grey-theme" id="saturday-cal" data-month-format="month YYYY">
                </div>
            </div>
            <div class="event-card" data-hoverable="true" id="turnaroundbp">
                <div class="hideable">
                    <?php 
                    echo "<img src='$earliestTAB[3]' alt='Turn Around Budapest'>"
                    ?>
                    <div class="event-info">
                        <?php
                        $tabData = formatEventData($earliestTAB);
                        echo "<h3>{$tabData[0]}</h3>";
                        ?>
                        
                        <div class="event-date">
                            <?php 
                            echo "<p>{$tabData[1]}</p>";
                            echo "<p>{$tabData[2]}z - {$tabData[3]}z</p>";
                            ?>
                        </div>
                    </div>
                </div>

                <div class="event-calendar grey-theme" id="monday-cal" data-month-format="month YYYY">
                </div>
            </div>
            <script type="text/javascript">
                var isSnoPublished = <?php echo json_encode($earliestSNO); ?>;
                var isTabPublished = <?php echo json_encode($earliestTAB); ?>;
                if (!isSnoPublished) {
                    document.getElementById("sno").style.display = "none";
                } else if (!isTabPublished) {
                    document.getElementById("turnaroundbp").style.display = "none";
                }
            </script>

            <?php 

            foreach ($bpEvents as $key => $value) {
                if (strtolower($value["name"]) != strtolower("Turn around Budapest") && strtolower($value["name"]) != strtolower("Saturday Night Ops Budapest")) {
                    $formattedEvent = formatEventData(getEarliestEvent($value["name"]), true);
                    echo "<div class='event-card'>";
                    echo "<div class='hideable'>";
                    echo "<img src='{$value['banner']}' alt='event'>";
                    echo "<div class='event-info'>";
                    echo "<h3>{$formattedEvent[0]}</h3>";
                    echo "<div class='event-date'>";
                    echo "<p>{$formattedEvent[1]}</p>";
                    echo "<p>{$formattedEvent[2]}z - {$formattedEvent[3]}z</p>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                    echo "</div>";
                }
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
                <a href="../events/" id="events" class="menuitem-active nav-link-ltr"></a>
                <a href="../booking/" id="booking" class="nav-link-ltr"></a>
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
        <p>Copyright © 2024</p>
    </footer>
</body>

</html>