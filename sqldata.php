<?php
// Eric Sullivan
// 04/25/2020
// Script for taking SQl data to JSON
// From Sheaff's framework code
header('context-type: text/json');

$db = new SQLite3('datalog.db');
$statement = $db->prepare("select * from data order by rowid desc limit 1440");
$result = $statement->execute();

while ($row = $result->fetchArray()) {
    
    //First Temperature value
    $dtime['data1'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[2]];
    // IR Intesnity    
    $dtime['data2'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[3]];
    // Full Spectrum Intensity
    $dtime['data3'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[4]];
    // Visiuble Light Intesnity
    $dtime['data4'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[5]];
    // Illuminance, Lux
    $dtime['data5'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[6]];
    // Second Temperature value
    $dtime['data6'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[7]];
    // Pressure
    $dtime['data7'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[8]];
    // Humidity
    $dtime['data8'][] = ['t' => $row[0] . " " . $row[1], 'y' => $row[9]];
}

echo json_encode($dtime, JSON_PRETTY_PRINT);
$db->close();
?>
