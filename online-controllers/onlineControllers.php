<?php 
$data = file_get_contents("https://data.vatsim.net/v3/vatsim-data.json");
$data = json_decode($data, true);
function getControllers(){
    global $data;
    $controllers = [];
    foreach ($data["controllers"] as $key => $value) {
        if ($value["callsign"][0] == "L" && $value["callsign"][1] == "H" && $value["facility"] > 0) {
            array_push($controllers, $value);
        }
    }
    return $controllers;
}

function getATIS() {
    global $data;
    $atis;
    $atisText;

    foreach ($data["atis"] as $key => $value) {
        if ($value["callsign"] == "LHBP_ATIS") {
            $atis = $value;
        }
    }

    if (isset($atis) && $atis != "") {
        $atisText = join(" ",$atis["text_atis"]);
        return $atisText;
    } 
    return false;

}




?>