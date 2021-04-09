<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    $ordernum = filter_input(INPUT_GET, 'ordernum', FILTER_SANITIZE_NUMBER_INT);

    $conn = openDb();
    $stmt = $conn->prepare("SELECT * FROM order_row WHERE ordernum = :ordernum");
    $stmt->bindValue(":ordernum", $ordernum, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $results = $stmt->fetchAll();

    header('HTTP/1.1 200 OK');
    echo json_encode($results);
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
