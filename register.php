<?php
require_once('db_connection.php');

// Sprawdzanie, czy formularz rejestracji został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $login = $_POST["register_username"];
    $password = $_POST["register_password"];

    // Tutaj możesz dodać logikę rejestracji
    // Przykład (niebezpieczny - nie używaj w produkcji!):
    echo "Registration successful. You can now login.";
}
?>
