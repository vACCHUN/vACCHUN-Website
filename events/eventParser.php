<?php 
function getEvents()
{
    $f = fopen("events.json", "w");
    $data = file_get_contents("https://my.vatsim.net/api/v2/events/view/division/EUD");
    fwrite($f, $data);
    fclose($f);
    $f = fopen("timestamp.txt", "w");
    fwrite($f, date("Y/m/d h:i:sa") . "\n");
    fclose($f);
}

function determineDiff()
{
    if (!file_exists("events.json") || !file_exists("timestamp.txt")) {
        getEvents();
        return;
    }
    $f = fopen("timestamp.txt", "r");
    $fileTime = fgets($f);
    fclose($f);
    if ($fileTime == "") {
        getEvents();
        return;
    }
    $fileTime = new DateTime($fileTime);
    $currTime = date("Y/m/d h:i:sa");
    $currTime = new DateTime($currTime);
    $interval = $fileTime->diff($currTime);
    $diff = $interval->format('%H');


    if ($diff > 1) {
        getEvents();
    }
}

function parseEvents() {
    $json = file_get_contents('events.json');
  
    $json_data = json_decode($json,true);
    $eventData = $json_data["data"];

    return $eventData;
}

function getBudapestEvents($eventData) {
    $bpEvents = [];
    foreach ($eventData as $key => $value) {
        if (count($value["airports"]) > 0)  {
            $airports = $value["airports"][0]["icao"];
            if ($airports[0] == "L" && $airports[1] == "H") {
                array_push($bpEvents, $value);
            }
        }
       
    }

    //var_dump($bpEvents);

    return $bpEvents;
}

$bpEvents = getBudapestEvents(parseEvents());


function getEarliestEvent($eventTitle) {
    global $bpEvents;
    $allEvents = [];
    foreach ($bpEvents as $key => $value) {
        if (strtolower($value["name"]) == strtolower($eventTitle)) {
            $startTime = $value["start_time"];
            $endTime = $value["end_time"];
            $name = $value["name"];
            $banner = $value["banner"];
            $arr = [$name, $startTime, $endTime, $banner];
            array_push($allEvents, $arr);
        }
    }

    // Create an array of start_times to determine earliest.
    $timearr = [];
    foreach ($allEvents as $key => $value) {
        $date = date('Y-m-d', strtotime($value[1]));
        array_push($timearr, $date);
    }

    $earliestEventDate = false;

    if (count($timearr) > 0) {
        $earliestEventDate = min($timearr);
    } else {
        return false;
    }

    $earliestEvent = [];

    foreach ($allEvents as $k => $v) {
        if (str_contains($v[1], $earliestEventDate)) {
            $earliestEvent = $v;
        }
    }

    return $earliestEvent;
}

function formatEventData($event, $exam = false) {
    $title = $event[0];
    $date = date("Y.m.d.", strtotime($event[1]));
    $start = date("Hi", strtotime($event[1]));
    $end = date("Hi", strtotime($event[2]));
    return [$title, $date, $start, $end];
}


?>