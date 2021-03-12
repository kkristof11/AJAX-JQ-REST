<?php
require './MySqlDB.php';

parse_str(file_get_contents('php://input',$adatom));
print_r($adatom);
echo "valami0";
$mysql= new MySqlDB();
$id = $adatom["id"];
$nev = $adatom["nev"];
$tel = $adatom["tel"];
$kep = $adatom["kep"];

$updateString = "id='". $id. "', nev='" . $nev . "', tel='". $tel . "', kep='". $kep . "'";
$mysql->frissit($telefonkonyvem, $updateString, "id=".$id);