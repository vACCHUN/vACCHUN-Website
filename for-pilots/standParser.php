<?php

require_once "../stands/LHBP/stands.php";

$defaultStandProximityThreshold = 0.015; // Default stand proximity threshold in nautical miles

// Target coordinate
$targetLatitude = 47.43379293716711; // LHBP coords
$targetLongitude = 19.263085337033914; // LHBP coords
$thresholdDistance = 50; // Max distance from airport (nautical miles)
$maximumAltitude = 600; // Max altitude in feet
$maxSpeed = 2; // Max speed in knots

// Fetch VATSIM data
$vatsimData = file_get_contents('https://data.vatsim.net/v3/vatsim-data.json');

if ($vatsimData !== false) {
    $vatsimData = json_decode($vatsimData, true);
    $occupiedStands = []; // Initialize array to hold occupied stands

    // Loop through each pilot in the VATSIM data
    foreach ($vatsimData['pilots'] as $pilot) {
        if (isset($pilot['latitude']) && isset($pilot['longitude']) && isset($pilot['callsign']) && isset($pilot['altitude']) && isset($pilot['groundspeed'])) {

            $pilotLatitude = floatval($pilot['latitude']);
            $pilotLongitude = floatval($pilot['longitude']);
            $pilotCallsign = $pilot['callsign'];
            $pilotAltitude = intval($pilot['altitude']);
            $pilotSpeed = floatval($pilot['groundspeed']); // Get the speed in knots

            // Calculate distance between pilot and target coordinate using haversine formula
            $distance = haversineDistance($targetLatitude, $targetLongitude, $pilotLatitude, $pilotLongitude);

            // Check if the distance is within the threshold, altitude is below the maximum, and speed is within limits
            if ($distance <= $thresholdDistance && $pilotAltitude <= $maximumAltitude && $pilotSpeed <= $maxSpeed) {
                var_dump($pilot);

                $minStandDistance = PHP_INT_MAX; // Initialize minimum stand distance to a large value
                $closestStand = null; // Initialize closest stand as null

                // Check if pilot is near any stand
                foreach ($LHBPStands as $stand) {
                    $standIdentifier = $stand[0];
                    $standLatitude = $stand[1];
                    $standLongitude = $stand[2];
                    $standProximity = isset($stand[3]) ? $stand[3] : $defaultStandProximityThreshold;

                    // Calculate distance between pilot and stand using haversine formula
                    $standDistance = haversineDistance($standLatitude, $standLongitude, $pilotLatitude, $pilotLongitude);

                    // Check if the pilot is within the stand proximity threshold and closer than previously checked stands
                    if ($standDistance <= $standProximity && $standDistance < $minStandDistance) {
                        // Update the closest stand and minimum distance
                        $minStandDistance = $standDistance;
                        $closestStand = $standIdentifier;
                    }
                }

                // If a closest stand is found, associate the pilot with that stand
                if ($closestStand !== null) {
                    // Add pilot's callsign to the occupied stands list with the closest stand number
                    $occupiedStands[$closestStand] = $pilotCallsign;
                }
            }
        }
    }

    // Print or process the list of pilots near the target coordinate and on stands
} else {
    echo "Failed to fetch VATSIM data.";
}

// Function to calculate distance between two coordinates using Haversine formula
function haversineDistance($lat1, $lon1, $lat2, $lon2)
{
    $earthRadius = 6371; // Earth's radius in km

    $deltaLat = deg2rad($lat2 - $lat1);
    $deltaLon = deg2rad($lon2 - $lon1);

    $a = sin($deltaLat / 2) * sin($deltaLat / 2) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * sin($deltaLon / 2) * sin($deltaLon / 2);
    $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

    $distance = $earthRadius * $c;

    // Convert distance from kilometers to nautical miles (1 NM = 1.852 km)
    return $distance / 1.852;
}
?>
