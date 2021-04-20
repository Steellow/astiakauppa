<?php
session_start();
require_once 'inc/functions.php';
require_once 'inc/headers.php';

if(isset($_SESSION['user'])) {
    $user = $_SESSION['user'];
    $data = array (
        'id' => $user->id,
        'lastname' => $user->lastname,
        'firstname' => $user->firstname,
        'email' => $user->email,
        'address' => $user->address,
        'city' => $user->city,
        'postalcode' => $user->postalcode,
        'admin' => $user->admin
    );
    header('HTTP/1.1 200 OK');
    echo json_encode($data);
} else {
    header("HTTP/1.0 404 Not Found");
}
