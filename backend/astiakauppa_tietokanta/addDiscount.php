<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    $discPrice = filter_input(INPUT_GET, 'discPrice', FILTER_SANITIZE_STRING);
    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);


    $conn = openDb();

    $stmt = $conn->prepare("UPDATE product SET discprice = :discPrice WHERE id = :id");

    if ($discPrice == 0) {
        $stmt->bindValue(":discPrice", $myNull = null, PDO::PARAM_NULL);
    } else {
        $stmt->bindValue(":discPrice", $discPrice, PDO::PARAM_STR); // No param for double so we need to use STR here
    }

    $stmt->bindValue(":id", $id, PDO::PARAM_INT);
    $stmt->execute();

    header('HTTP/1.1 200 OK');
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
