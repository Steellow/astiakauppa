<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';
session_start();

if($_SESSION['user']->admin != 1) {
  header('HTTP/1.1 401 Unauthorized');
  exit;
} else {
  try {
    $db = openDb();
    $sql = "select * from orders";
    $query = $db->query($sql);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    echo json_encode($results);
  } catch (PDOException $pdoex) {
    returnError($pdoex);
  }
}