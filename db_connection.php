<?php
$host = "db4free.net";
$port = 3306;
$username = "TwojaNazwaUzytkownika";
$password = "TwojeHaslo";
$database = "TwojaNazwaBazyDanych";

$conn = mysqli_connect($host, $username, $password, $database, $port);

if (!$conn) {
    die("Błąd połączenia: " . mysqli_connect_error());
}

echo "Połączenie udane!";
// Możesz zacząć pracę z bazą danych tutaj

mysqli_close($conn);
?>
