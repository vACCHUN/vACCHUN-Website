<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>vACCHUN</title>
    <script src="js/index.js" type="module" defer></script>
    <script src="js/nav.js" type="module" defer></script>
    <script src="js/langCookie.js?v=2"></script>

    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/nav.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="icon" href="img/favicon.png" type="image/icon-type">
</head>

<body>
    <div class="nav-small" id='nav-small'>
        <img id="nav-close" src="img/navclose.svg" alt="Open Menu">
        </a>

        <div class="menuitemsSmall">
            <a href="./index.php"> <img src="img/logo.svg" class="vacchunlogoSmall" alt="vACCHUN logo">

                <a href="./index.php" id="homeSmall" class="menuitem-active"></a>
                <a href="./about-us/" id="aboutUsSmall"></a>
                <a href="./for-pilots/" id="forPilotsSmall"></a>
                <a href="./events/" id="eventsSmall"></a>
                <a href="./booking/" id="bookingSmall"></a>
                <a href="./controllers/" id="controllersSmall"></a>
                <a href="./feedback/" id="feedbackSmall"></a>

                <div class="navscdp langsw-div"><img class="" id="langSwSmall" src="img/en.png" alt="Switch language">
                </div>
        </div>
    </div>
    <header>
        <script>
        fetch("./isLhccOnline.php", {
                method: "POST",
                headers: {
                "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                },
                body: "getOnlineControllers=1",
        })
        .then((response) => response.text())
        .then((res) => {
            document.getElementById("isLHCCOnline").textContent = res ? "Show online controllers" : "We are offline";
            document.getElementById("isLHCCOnline").dataset.online = res ? "true" : "false";
        });
        </script>

        <div id="header-center" class="header-center">
            <?php require("online-controllers/onlineControllers.php"); ?>
            <h1 id="headerTitle">vACCHUN</h1>
            <p id="headerText"></p>
            <a id="isLHCCOnline" href="online-controllers/">Loading...</a>
            <div id="buttons">
                <a id="headerEventsBtn" class="btn btn-blue" href="./events/"></a>
            </div>
            
        </div>
    </header>

    <section class="ourActivities-small">
        <h1 id="ourActivitiesSmall"></h1>
        <div class="card-container-small">
            <div class="card">
                <div class="img-containers">
                    <div id="img1-clickspot" class="img-circle cardimg-small cardimg-active">
                        <img id="img1" src="./img/card/flying.svg" alt="Flying/Repülés">
                    </div>
                    <div id="img2-clickspot" class="img-circle cardimg-small">
                        <img id="img2" src="./img/card/controlling.svg" alt="Flying/Repülés">
                    </div>
                    <div id="img3-clickspot" class="img-circle cardimg-small">
                        <img id="img3" src="./img/card/training.svg" alt="Flying/Repülés">
                    </div>
                </div>
                <h2 id="cardMultiHeader"></h2>
                <p id="cardMultiText"></p>
            </div>
        </div>
    </section>
    <section class="ourActivities">
        <h1 id="ourActivities"></h1>
        <div class="card-container">
            <div class="card">
                <div class="img-circle">
                    <img src="./img/card/flying.svg" alt="Flying/Repülés">
                </div>
                <h2 id="flyingHeader"></h2>
                <p id="flying"></p>
            </div>
            <div class="card">
                <div class="img-circle">
                    <img src="./img/card/controlling.svg" alt="Controlling/Irányítás">
                </div>
                <h2 id="controllingHeader"></h2>
                <p id="controlling"></p>
            </div>
            <div class="card">
                <div class="img-circle">
                    <img class="trainingimg" src="./img/card/training.svg" alt="Training/Oktatás">
                </div>
                <h2 id="trainingHeader"></h2>
                <p id="training"></p>
            </div>
        </div>
    </section>

    <nav id="nav-normal">
        <img id="nav-icon" src="img/nav.svg" alt="Open Menu">
        <a href="./index.php" class="vacchunlogo"><img src="img/logo.svg" alt="vACCHUN logo">
            <div class="menuitems">
                <a href="./index.php" id="home" class="menuitem-active nav-link-ltr"></a>
                <a href="./about-us/" id="aboutUs" class="nav-link-ltr"></a>
                <a href="./for-pilots/" id="forPilots" class="nav-link-ltr"></a>
                <a href="./events/" id="events" class="nav-link-ltr"></a>
                <a href="./booking/" id="booking" class="nav-link-ltr"></a>
                <a href="./controllers/" id="controllers" class="nav-link-ltr"></a>
                <a href="./feedback/" id="feedback" class="nav-link-ltr"></a>
                <div class="langsel">
                    <div class="navscdp langsw-div"><img class="" id="langSw" src="img/en.png" alt="Switch language">
                    </div>
                </div>

    </nav>

    <footer>
        <p>Virtual Area Control Centre Hungary</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="./privacy-policy">Adatvédelem</a>
        <p>Copyright © 2024</p>
    </footer>
</body>

</html>