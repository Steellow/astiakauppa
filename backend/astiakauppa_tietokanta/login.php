<?php
session_start();
require_once 'inc/functions.php';
require_once 'inc/headers.php';

$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
$password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
// $email = 'muumi.mamma2@gmail.com';
//      $password = 'asdasdasd';
     $passwordHash = hash("sha256", $password);

try {
     

    $db = openDb();
    $sql = "select * from users WHERE email = :email";
    $query = $db->prepare($sql);
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->execute();
    $user = $query->fetch(PDO::FETCH_OBJ);
    if ($user) {
      $passwordFromDb = $user->password;

      //if (password_verify($password,$passwordFromDb)) 
      if ($passwordFromDb == $passwordHash){
        header('HTTP/1.1 200 OK');
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
        $_SESSION['user'] = $user;
      } else {
          header('HTTP/1.1 401 Unauthorized');
          $data = array($passwordFromDb, $user);
        }
    } else {
      header('HTTP/1.1 401 Unauthorized');
      $data = array('toka');
    }
    echo json_encode($data);
} 
catch (PDOException $pdoex) {
  returnError($pdoex);
}