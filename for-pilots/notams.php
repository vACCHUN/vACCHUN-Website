<?php 
if (isset($_GET["icao"])) {
    $notams = file_get_contents('https://vacchun.poci.hu/api/notam-list/' . $_GET["icao"]);
    if ($notams && (!isset($_GET["filtered"]) || $_GET["filtered"] == false)) {
        echo $notams;
    } else if ($notams && isset($_GET["filtered"]) && $_GET["filtered"] == "true") {
        $active = [];
        $pattern = "/B\) (\d{2})(\d{2})(\d{2})(\d{2})(\d{2}) C\) (\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/";

        $notams = json_decode($notams);
      
        foreach ($notams as $key => $value) {
            if (preg_match($pattern, $value, $matches)) {
                if (count($matches) === 11) {
                    $startYear = $matches[1];
                    $startMonth = $matches[2];
                    $startDay = $matches[3];
                    $startHour = $matches[4];
                    $startMinute = $matches[5];

                    $endYear = $matches[6];
                    $endMonth = $matches[7];
                    $endDay = $matches[8];
                    $endHour = $matches[9];
                    $endMinute = $matches[10];

                    $startDateTime = new DateTime("20$startYear-$startMonth-$startDay $startHour:$startMinute");
                    $endDateTime = new DateTime("20$endYear-$endMonth-$endDay $endHour:$endMinute");

                    $currentDateTime = new DateTime();

                    if ($currentDateTime >= $startDateTime && $currentDateTime <= $endDateTime) {
                        array_push($active, $value);
                    }
                } else {
                    array_push($active, $value); 
                    error_log("Unexpected number of matches for NOTAM: $value");
                }
            } else {
                array_push($active, $value);
                error_log("Pattern not matched for NOTAM: $value");
            }
        }

        echo json_encode($active);
    }
}
?>
