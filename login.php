<?php
session_start();
require_once('db_connection.php');

// Sprawdzanie, czy formularz logowania został wysłany
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pobieranie danych z formularza
    $login= $_POST["login_username"];
    $password = $_POST["login_password"];

    // Tutaj możesz dodać logikę autentykacji
    // Przykład (niebezpieczny - nie używaj w produkcji!):
    if ($username == "example" && $password == "password") {
        $_SESSION["username"] = $login;
        header("Location: welcome.php");
    } else {
        echo "Invalid username or password.";
    }
}
?>
