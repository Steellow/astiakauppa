<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    // $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
    // $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
    // $passwordHash = hash("sha256", $password);

    $email = 'muumi.mamma@gmail.com';
    $passwordHash = '5fd924625f6ab16a19cc9807c7c506ae1813490e4ba675f843d5a10e0baacdb8';

    $db = openDb();
    $sql = "select * from users WHERE email = '$email' AND password = '$passwordHash'";
    $query = $db->query($sql);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    echo json_encode($results);
} 
catch (PDOException $pdoex) {
  returnError($pdoex);
}