<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    
    $username = filter_input(INPUT_GET, 'username', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_GET, 'password', FILTER_SANITIZE_STRING);
    $passwordHash = hash("sha256", $password);
    $firstname = filter_input(INPUT_GET, 'firstname', FILTER_SANITIZE_STRING);
    $lastname = filter_input(INPUT_GET, 'lastname', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_GET, 'address', FILTER_SANITIZE_STRING);
    $city = filter_input(INPUT_GET, 'city', FILTER_SANITIZE_STRING);
    $postalcode = filter_input(INPUT_GET, 'postalcode', FILTER_SANITIZE_NUMBER_INT);
    

    $db = openDb();
    $sql = "INSERT INTO users (username, password, firstname, lastname, email, address, city, postalcode)
     VALUES (:username,:passwordHash,:firstname,:lastname,:email,:address,:city,:postalcode)";
    $query = $db->prepare($sql);
    $query->bindValue(':username', $username, PDO::PARAM_STR);
    $query->bindValue(':passwordHash', $passwordHash, PDO::PARAM_STR);
    $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
    $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->bindValue(':address', $address, PDO::PARAM_STR);
    $query->bindValue(':city', $city, PDO::PARAM_STR);
    $query->bindValue(':postalcode', $postalcode, PDO::PARAM_INT);
    $query->execute();
    header('HTTP/1.1 200 OK');
    
} 
catch (PDOException $pdoex) {
  returnError($pdoex);
}