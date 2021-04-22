<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';
session_start();

if ($_SESSION['user']->admin != 1) {
    header('HTTP/1.1 401 Unauthorized');
    exit;
} else {
    try {
        $orderNum = filter_input(INPUT_GET, 'orderNum', FILTER_SANITIZE_NUMBER_INT);
        $status = filter_input(INPUT_GET, 'status', FILTER_SANITIZE_STRING);

        $conn = openDb();

        $stmt = $conn->prepare("UPDATE orders SET status = :status WHERE orderNum = :orderNum");

        $stmt->bindValue(":orderNum", $orderNum, PDO::PARAM_INT);
        $stmt->bindValue(":status", $status, PDO::PARAM_STR);
        $stmt->execute();

        header('HTTP/1.1 200 OK');
    } catch (PDOException $pdoex) {
        returnError($pdoex);
    }
}
