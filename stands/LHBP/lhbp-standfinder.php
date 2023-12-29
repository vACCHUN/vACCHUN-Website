<?php
include("stands.php");
$airlineStands = [
    ["RYR", ["R270", "R271", "R272", "R273", "R274", "R275", "R276", "R277", "37", "38"]],
    ["EZY", ["R270", "R271", "R272", "R273", "R274", "R275", "R276", "R277", "37", "38"]],
    ["EZS", ["R270", "R271", "R272", "R273", "R274", "R275", "R276", "R277"]],
    ["WZZ", ["R270", "R271", "R272", "R273", "R274", "R275", "R276", "R277", "37", "38", "R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227", "R210", "R211", "R212", "C1", "C2", "115", "117"]],
    ["EXS", ["37", "38"]],
    ["TRA", ["R278", "R279"]],
    ["EWG", ["R210", "R211", "R212"]],
    ["GWI", ["R210", "R211", "R212"]],
    ["NOZ", ["R210", "R211", "R212", "R278", "R279"]],
    ["NSZ", ["R210", "R211", "R212", "R278", "R279"]],
    ["FDX", ["R101", "R102", "R103", "R104", "R105"], true],
    ["UPS", ["R101", "R102", "R103", "R104", "R105"], true],
    ["DHL", ["R101", "R102", "R103", "R104", "R105"], true],
    ["TAY", ["R101", "R102", "R103", "R104", "R105"], true],
    ["JSH", ["R107", "R108", "R110", "R111", "R112", "R113", "R114"], true],
    ["CLX", ["C1", "C2"], true],
    ["CSC", ["C1", "C2"], true],
    ["MTL", ["R107", "R108", "R110", "R111", "R112", "R113", "R114"], true],
    ["AHU", ["R107", "R108", "R110", "R111", "R112", "R113", "R114"], true],
    ["SLD", ["R107", "R108", "R110", "R111", "R112", "R113", "R114"], true],
    ["HKH", ["R107", "R108", "R110", "R111", "R112", "R113", "R114"], true],
    ["AEE", ["42", "43", "44", "45"]],
    ["AFR", ["42", "43", "44", "45", "39"]],
    ["AZA", ["42", "43", "44", "45"]],
    ["BEL", ["42", "43", "44", "45"]],
    ["DLH", ["42", "43", "44", "45"]],
    ["FIN", ["42", "43", "44", "45"]],
    ["KLM", ["42", "43", "44", "45"]],
    ["SAS", ["42", "43", "44", "45"]],
    ["SWR", ["42", "43", "44", "45"]],
    ["TAP", ["42", "43", "44", "45"]],
    ["BER", ["42", "43", "44", "45"]],
    ["IBE", ["42", "43", "44", "45"]],
    ["VLG", ["42", "43", "44", "45"]],
    ["MAH", ["42", "43", "44", "45", "31", "31", "32", "33", "34", "35", "36", "37", "38", "39", "R210", "R211", "R212"]],
    ["TVS", ["R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227", "R210", "R211", "R212"]],
    ["TVL", ["R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227", "R210", "R211", "R212"]],
    ["AFL", ["31", "32", "33"]],
    ["BAW", ["31", "32", "33"]],
    ["FDB", ["31", "32", "33"]],
    ["BRU", ["R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227"]],
    ["QTR", ["31", "32", "33"]],
    ["THY", ["31", "32", "33"]],
    ["ELY", ["31", "32", "33", "39"]],
    ["UAE", ["31", "32", "33", "39"]],
    ["CCA", ["33", "34", "39"]],
    ["ROU", ["33", "34", "39"]],
    ["PGT", ["31", "32", "33"]],
    ["MSC", ["31", "32", "33"]],
    ["DAH", ["R278", "R279"]],
    ["EIN", ["R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227"]],
    ["CSC", ["34", "35", "36"]],
    ["STK", ["R210", "R211", "R212"]],
    ["AUA", ["R210", "R211", "R212", "42", "43", "44", "45"]],
    ["CSH", ["34", "35", "36"]],
    ["CSA", ["R210", "R211", "R212", "42", "43", "44", "45"]],
    ["ROT", ["R210", "R211", "R212", "R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227"]],
    ["LOT", ["R210", "R211", "R212", "R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227", "34", "35", "36"]],
    ["BTI", ["42", "43", "44", "45"]],
    ["HUAF", ["278", "279"]],
];

$schengen = ["BI", "EB", "ED", "EE", "EF", "EH", "EK", "EL", "EN", "EP", "ES", "EV", "EY", "GC", "LD", "LE", "LF", "LG", "LH", "LI", "LJ", "LK", "LM", "LO", "LP", "LS", "LZ"];

$schengenStands = ["R224", "R225", "R226", "R227", "R210", "R211", "R212", "R270", "R271", "R272", "R273", "R274", "R275", "R276", "R277", "R278", "R279", "42", "43", "44", "45", "C1", "C2"];
$nonSchengenStands = ["R223", "R222", "R221", "R220", "36", "35", "34", "33", "32", "31", "37", "38", "39", "C1", "C2"];


$cargostands = ["R117", "R116", "R117A", "R115", "R114", "R113", "R111", "R110", "R107", "R108", "R106", "R104", "R105", "R103", "R102", "R101", "C1", "C1L", "C1R", "C2", "C2L", "C2R"];


$acJson = fopen(__DIR__ . "/aircraft.json", "r") or die("Unable to open file!");
$acJsonContent = fread($acJson, filesize(__DIR__ . "/aircraft.json"));
$acJsonContent = json_decode($acJsonContent);
fclose($acJson);

function getAircraftWingspan($atyp)
{
    global $acJsonContent;
    try {
        foreach ($acJsonContent->aircraft as $ac) {
            if ($ac->ICAO == $atyp) {
                return $ac->Wingspan;
            }
        }
    } catch (\Throwable $th) {
        return false;
    }
}

function getStandsByWingspan($atyp)
{
    global $LHBPStands;
    try {
        $stands = [];
        $ws = getAircraftWingspan($atyp);
        foreach ($LHBPStands as $key => $value) {
            if ($ws <= $value[3]) {
                array_push($stands, $value[0]);
            }
        }
        return $stands;
    } catch (\Throwable $th) {
        return false;
    }
}

function getStandByAirline($airline)
{
    global $airlineStands;
    try {
        $stands = [];
        foreach ($airlineStands as $key => $value) {
            if ($value[0] == $airline) {
                array_push($stands, $value[1]);
            }
        }
        if (count($stands) > 0) {
            return $stands[0];
        }
        return false;
    } catch (\Throwable $th) {
        return false;
    }
}

function getStandBySchengen($icao)
{
    global $schengen;
    global $schengenStands;
    global $nonSchengenStands;
    try {
        if (isset($icao[0]) && isset($icao[1])) {
            $prefix = $icao[0] . $icao[1];
            if (in_array($prefix, $schengen)) {
                return $schengenStands;
            }
            return $nonSchengenStands;
        }
        return false;
    } catch (\Throwable $th) {
        return false;
    }
}

function getStandByAvailability()
{
    global $occupiedStands;
    global $LHBPStands;
    $occupiedStandKeys = array_keys($occupiedStands);

    $availableStands = array_filter($LHBPStands, function ($stand) use ($occupiedStandKeys) {
        return !in_array($stand[0], $occupiedStandKeys);
    });

    // Extract only the stand identifiers
    $standIdentifiers = array_map(function ($stand) {
        return $stand[0];
    }, $availableStands);

    return $standIdentifiers;
}


function getStandWingspan($standnumber)
{
    global $LHBPStands;
    foreach ($LHBPStands as $key => $value) {
        if ($value[0] == $standnumber) {
            return $value[3];
        }
    }
    return false;
}


function sortStands($stands)
{
    foreach ($stands as $key => $value) {
        if (isset($stands[$key+1])) {
            $firstWingspan = getStandWingspan($stands[$key]);
            $secondWingspan = getStandWingspan($stands[$key+1]);
            if ($firstWingspan > $secondWingspan) {
                $temp = $stands[$key];
                $stands[$key] = $stands[$key+1];
                $stands[$key+1] = $temp;
            }
        }
    }
    return $stands;
}

function getVaStand($icao, $atyp, $isCargo)
{
    global $cargostands;
    $byAtyp = getStandsByWingspan($atyp);
    $byAvail = getStandByAvailability();


    if ($isCargo == "pax") {
        $bySchengen = getStandBySchengen($icao);
        if ($bySchengen && $byAtyp && $byAvail) {
            $res = array_values(array_intersect($bySchengen, $byAtyp, $byAvail));
            $res2 = array_values(array_intersect($byAtyp, $byAvail));
            if (count($res) > 0) {
                return sortStands($res)[0];
            } elseif (count($res2)) {
                return sortStands($res2)[0];
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        if ($cargostands && $byAtyp && $byAvail) {
            $res = array_intersect($cargostands, $byAtyp, $byAvail);
            if (count($res) > 0) {
                return $res[array_rand($res)];
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}


function getStand($cs, $icao, $atyp)
{
    $byCallsign = getStandByAirline($cs);
    $bySchengen = getStandBySchengen($icao);
    $byAtyp = getStandsByWingspan($atyp);
    $byAvail = getStandByAvailability();

    //var_dump($byCallsign, $bySchengen, $byAtyp, $byAvail);
    if ($byCallsign && $bySchengen && $byAtyp && $byAvail) {
        $res = array_values(array_intersect($byCallsign, $bySchengen, $byAtyp, $byAvail));
        $res2 = array_values(array_intersect($bySchengen, $byAtyp, $byAvail));
        $res3 = array_values(array_intersect($byAtyp, $byAvail));
        if (count($res) > 0) {
            //return $res[array_rand($res)];
            return sortStands($res)[0];
        } elseif (count($res2)) {
            //return $res2[array_rand($res2)];
            return sortStands($res2)[0];
        } elseif (count($res3)) {
            //return $res3[array_rand($res3)];
            return sortStands($res3)[0];
        } else {
            return false;
        }
    } else {
        return false;
    }
}




?>