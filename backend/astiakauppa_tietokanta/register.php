<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    $passwordHash = hash("sha256", $password);
    $firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING);
    $lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
    $city = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING);
    $postalcode = filter_input(INPUT_POST, 'postalcode', FILTER_SANITIZE_NUMBER_INT);
    
    $db = openDb();
    $sql = "INSERT INTO users (password, firstname, lastname, email, address, city, postalcode)
     VALUES (:passwordHash,:firstname,:lastname,:email,:address,:city,:postalcode)";
    $query = $db->prepare($sql);
    $query->bindValue(':passwordHash', $passwordHash, PDO::PARAM_STR);
    $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
    $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->bindValue(':address', $address, PDO::PARAM_STR);
    $query->bindValue(':city', $city, PDO::PARAM_STR);
    $query->bindValue(':postalcode', $postalcode, PDO::PARAM_INT);
    $query->execute();
    header('HTTP/1.1 200 OK');
    Header("Location: http://localhost:3000/rekisteriok");
} 
catch (PDOException $pdoex) {
  returnError($pdoex);
}