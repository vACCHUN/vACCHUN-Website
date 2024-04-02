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
        <img src="../img/downarrow.svg" class="downarrow" alt="">
    </header>



    <section>
        <h1 id="bookingSectionH1"></h1>
        <form id="feedback-form" action="index.php#feedback-form" class="booking-form" method="post">
            <p id='feedbackTopText'></p>
            <?php 
                if (isset($_POST["feedback-cid"]) && isset($_POST["feedback-controller"]) && isset($_POST["feedback-position"]) && isset($_POST["feedback-freetext"])) {
                    //=======================================================================================================
                    // Create new webhook in your Discord channel settings and copy&paste URL
                    //=======================================================================================================

                    $cid = isset($_POST["feedback-cid"]) ? htmlspecialchars($_POST["feedback-cid"]) : "";
                    $controller = isset($_POST["feedback-controller"]) ? htmlspecialchars($_POST["feedback-controller"]) : "";
                    $position = isset($_POST["feedback-position"]) ? htmlspecialchars($_POST["feedback-position"]) : "";
                    $freetext = isset($_POST["feedback-freetext"]) ? htmlspecialchars($_POST["feedback-freetext"]) : "";

                    $webhookurl = "https://discord.com/api/webhooks/1224670911647584369/OIFMgUUsmOkVBTeK1grYtWAcp5u0PowM2RcrJdNaNiJsp5ehSCX5dAVzPK8XRJ81eDPS";

                    //=======================================================================================================
                    // Compose message. You can use Markdown
                    // Message Formatting -- https://discordapp.com/developers/docs/reference#message-formatting
                    //========================================================================================================

                    $timestamp = date("c", strtotime("now"));

                    $json_data = json_encode([
                        // Message
                        "content" => "",
                        
                        // Username
                        "username" => "vACCHUN Feedback",

                        // Avatar URL.
                        // Uncoment to replace image set in webhook
                        "avatar_url" => "https://i.imgur.com/ynHh9cW.png",

                        // Text-to-speech
                        "tts" => false,

                        // File upload
                        // "file" => "",

                        // Embeds Array
                        "embeds" => [
                            [
                                // Embed Title
                                "title" => "Új visszajelzés érkezett!",

                                // Embed Type
                                "type" => "rich",

                                // Embed Description
                                "description" => "",

                                // URL of title link
                                // "url" => "https://gist.github.com/Mo45/cb0813cb8a6ebcd6524f6a36d4f8862c",

                                // Timestamp of embed must be formatted as ISO8601
                                "timestamp" => $timestamp,

                                // Embed left border color in HEX
                                "color" => hexdec( "3366ff" ),

                                // Footer
                                "footer" => [
                                    "text" => "vACCHUN",
                                    "icon_url" => "https://vacchun.hu/img/favicon.png"
                                ],


                                // Thumbnail
                                //"thumbnail" => [
                                //    "url" => "https://ru.gravatar.com/userimage/28503754/1168e2bddca84fec2a63addb348c571d.jpg?size=400"
                                //],

                                // Author
                                "author" => [
                                    "name" => "Küldte: $cid",
                                    "url" => "https://stats.vatsim.net/stats/$cid"
                                ],

                                // Additional Fields array
                                "fields" => [
                                    // Field 1
                                    [
                                        "name" => "Controller: ",
                                        "value" => $controller,
                                        "inline" => true
                                    ],
                                    // Field 2
                                    [
                                        "name" => "Position: ",
                                        "value" => $position,
                                        "inline" => true
                                    ],
                                    [
                                    "name" => "Feedback: ",
                                    "value" => $freetext,
                                    "inline" => false
                                    ]
                                    // Etc..
                                ]
                            ]
                        ]

                    ], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );


                    $ch = curl_init( $webhookurl );
                    curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
                    curl_setopt( $ch, CURLOPT_POST, 1);
                    curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
                    curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
                    curl_setopt( $ch, CURLOPT_HEADER, 0);
                    curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

                    $response = curl_exec( $ch );
                    // If you need to debug, or find out why you can't send message uncomment line below, and execute script.
                    // echo $response;
                    curl_close( $ch );
                    echo "<p style='color:green'>Köszönjük a visszajelzést! // Thank you for your feedback.</p>";
                }
            ?>


            <div class="booking-field">
                <img src="../img/input-icons/user.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <input type="number" id="feedback-cid" name="feedback-cid" class="booking-input" placeholder="CID"
                    required>
            </div>


            <div class="booking-field">
                <img src="../img/input-icons/headset.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select name="feedback-controller" id="feedback-controller" class="booking-input booking-select"
                    required>
                    <option disabled selected>Irányító // Controller</option>

                    <?php 
                    $controllerData = file_get_contents('https://vacchun.poci.hu/api/controllers');
                    var_dump($controllerData);
                    if ($controllerData) {
                        $controllerData = json_decode($controllerData, true);

                        foreach ($controllerData as $k => $v) {
                            $cid = $v["vatsim_id"];
                            echo "<option value='$cid'>$cid</option>";
                        }
                    }
                    
                    ?>
                    <option value="Unknown">Ismeretlen // Unknown</option>
                </select>
            </div>

            <div class="booking-field">
                <img src="../img/input-icons/airport.svg" class="booking-label" alt="">
                <span class="input-divider"></span>
                <select name="feedback-position" id="feedback-position" class="booking-input booking-select" required>
                    <option disabled selected>Pozíció // Position</option>

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
                <textarea name="feedback-freetext" id="feedback-freetext" cols="30" rows="10" class="booking-input" placeholder="What were your impressions about the session?" required></textarea>
            </div>

            <button class="booking-submit" role="submit"><span id="feedback-submit">Küldés</span></button>

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