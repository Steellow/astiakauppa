<?php
session_start();
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    $id = filter_input(INPUT_GET, 'id', FILTER_SANITIZE_NUMBER_INT);

    $conn = openDb();
    $stmt = $conn->prepare("SELECT * FROM product WHERE id = :id");
    $stmt->bindValue(":id", $id, PDO::PARAM_INT);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $results = $stmt->fetchAll();

    header('HTTP/1.1 200 OK');
    echo json_encode($results);
} catch (PDOException $pdoex) {
    returnError($pdoex);
}
