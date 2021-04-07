<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    
    $firstname = filter_input(INPUT_GET, 'firstname', FILTER_SANITIZE_STRING);
    $lastname = filter_input(INPUT_GET, 'lastname', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_STRING);
    $address = filter_input(INPUT_GET, 'address', FILTER_SANITIZE_STRING);
    $city = filter_input(INPUT_GET, 'city', FILTER_SANITIZE_STRING);
    $postalcode = filter_input(INPUT_GET, 'postalcode', FILTER_SANITIZE_NUMBER_INT);
    

    $db->beginTransaction();
    $db = openDb();
    $sql = "INSERT INTO users (firstname, lastname, email, address, city, postalcode)
     VALUES (:firstname,:lastname,:email,:address,:city,:zip)";
    $query = $db->prepare($sql);
    $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
    $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->bindValue(':address', $address, PDO::PARAM_STR);
    $query->bindValue(':city', $city, PDO::PARAM_STR);
    $query->bindValue(':zip', $postalcode, PDO::PARAM_INT);
    $query->execute();
    header('HTTP/1.1 200 OK');
    
    $db->commit();

} 
catch (PDOException $pdoex) {
    $db->rollback();
  returnError($pdoex);
}