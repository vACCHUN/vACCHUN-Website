<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    <title>Irányítók // Controllers</title>
    <script src="../js/controllers.js" type="module" defer></script>
    <script src="../js/nav.js" type="module" defer></script>
    <script src="../js/langCookie.js?v=2"></script>

    <link rel="stylesheet" href="../css/controllers.css">
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
                <a href="../controllers/" id="controllersSmall" class="menuitem-active"></a>
                <a href="../feedback/" id="feedbackSmall"></a>

                <div class="navscdp langsw-div"><img class="" id="langSwSmall" src="../img/en.png"
                        alt="Switch language">
                </div>
        </div>
    </div>
    <header>
        <div id="header-center" class="header-center">
            <h1 id="headerTitle">vACCHUN</h1>
        </div>
    </header>

    <h1 id="header">Hogyan legyél virtuális légiforgalmi irányító?</h1>
    <section class="controllers">
        <div class="step">
            <h2 id="step1H"></h2>
        </div>

        <p id="step1P"></p>
    </section>
    <hr>
    <section class="controllers">
        <p id="step2P"></p>
        <div class="step">
            <h2 id="step2H"></h2>
        </div>
    </section>
    <hr>
    <section class="controllers">
        <div class="step">
            <h2 id="step3H"></h2>
        </div>

        <p id="step3P"></p>
    </section>
    <hr>
    <section class="controllers">
        <p id="step4P"></p>
        <div class="step">
            <h2 id="step4H"></h2>
        </div>
    </section>
    <section>
        <h1 id="controllersHeader">Irányítóink</h1>
        <div class="ourControllers">

            <script>
                let hoverTimeout;

                function delayHover(element) {
                hoverTimeout = setTimeout(() => {
                    element.classList.add('hovered');
                }, 300);
                }

                function resetDelayHover(element) {
                clearTimeout(hoverTimeout);
                element.classList.remove('hovered');
                }
            </script>
            <?php 
            $controllerData = file_get_contents('https://vacchun.poci.hu/api/controllers');
            if ($controllerData) {
                $controllerData = json_decode($controllerData, true);

                foreach ($controllerData as $k => $v) {
                    $headerBottom = "";
                    $sectorsText = "";
                    $remarkText = $v["atc_remark"];
                    if ($v["solo"] == null) {
                        $headerBottom = $v["rating"]["name"];
                    } else {
                        $headerBottom = "SOLO " . $v["solo"]["position"];
                    }

                    foreach ($v["sectors"] as $kS => $sector) {
                        $sectorsText .= $sector["id"] . ", ";
                    }
                    $sectorsText = rtrim($sectorsText, ', ');
                    if (strlen($sectorsText) == 0) {
                        $sectorsText = "LHBP";
                    }

                    if ($v["atc_remark"] == null) {
                        $remarkText = "None";
                    } 

                    


                    echo "<div class='controller-card' onmouseenter='delayHover(this)' onmouseleave='resetDelayHover(this)'>
                    <h1>{$v["vatsim_id"]}</h1>
                    <span>{$headerBottom}</span>
    
                    <div class='hideable'>
                        <table>
                            <tr>
                                <td><img src='../img/controllers/cid.svg' alt=''> </td>
                                <td>
                                    <span class='propertyHeader'>CID</span>
                                    <br>
                                    <span class='property'>{$v["vatsim_id"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src='../img/controllers/rating.svg' alt=''> </td>
                                <td>
                                    <span class='propertyHeader'>Rating</span>
                                    <br>
                                    <span class='property'>{$v["rating"]["name"]}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src='../img/controllers/sectors.svg' alt=''> </td>
                                <td>
                                    <span class='propertyHeader'>Sectors</span>
                                    <br>
                                    <span class='property'>{$sectorsText}</span>
                                </td>
                            </tr>
                            <tr>
                                <td><img src='../img/controllers/remarks.svg' alt=''> </td>
                                <td>
                                    <span class='propertyHeader'>Remarks</span>
                                    <br>
                                    <span class='property'>{$remarkText}</span>
                                </td>
                            </tr>";

                            if ($headerBottom == "SOLO") {
                                echo "<!--SOLO -->
                                <tr>
                                    <td><img src='../img/controllers/solo.svg' alt=''> </td>
                                    <td>
                                        <span class='propertyHeader'>Solo Position</span>
                                        <br>
                                        <span class='property'>{$v["solo"]["position"]}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src='../img/controllers/expiry.svg' alt=''> </td>
                                    <td>
                                        <span class='propertyHeader'>Solo expiry</span>
                                        <br>
                                        <span class='property'>{$v["solo"]["expiry"]}</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td><img src='../img/controllers/issuedby.svg' alt=''> </td>
                                    <td>
                                        <span class='propertyHeader'>Solo issued by</span>
                                        <br>
                                        <span class='property'>{$v["solo"]["issued_by"]["vatsim_id"]}</span>
                                    </td>
                                </tr>";
                            }

                            

                        
                        
                        
                        
                            echo "
                        </table>
                    </div>
                </div>";
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
                <a href="../events/" id="events" class="nav-link-ltr"></a>
                <a href="../booking/" id="booking" class="nav-link-ltr"></a>
                <a href="../controllers/" id="controllers" class="menuitem-active nav-link-ltr"></a>
                <a href="../feedback/" id="feedback" class="nav-link-ltr"></a>
                <div class="langsel">
                    <div class="navscdp langsw-div"><img class="" id="langSw" src="../img/en.png" alt="Switch language">
                    </div>
                </div>

    </nav>
         <p id ="rules"><a href="../assets/vACCHUN_szabalyzat_2024.pdf">Szabályzat</a></p>
    <footer>
        <p>Virtual Area Control Center Hungary</p>
        <p><a href="mailto:info@vacchun.hu">info@vacchun.hu</a></p>
        <a id="ppolicy" href="../privacy-policy">Adatvédelem</a>
        <p>Copyright © 2024</p>
    </footer>
</body>

</html>