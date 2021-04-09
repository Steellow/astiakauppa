<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
    
  $firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING);
  $lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
  $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
  $city = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING);
  $postalcode = filter_input(INPUT_POST, 'postalcode', FILTER_SANITIZE_NUMBER_INT);
  // orders-taulu    
  $status = /* M, T, null jne? */
  // order_row-taulu
  $ordernum = /* automaattisesti orders-taulusta? */
  $productid = /* shoppingcartista hakee oikean id:n? */
  $amount = /* shoppingcartista oikea amount? */



  $db = openDb();
  $db->beginTransaction();

  $query = $db->prepare("INSERT INTO users (firstname, lastname, email, address, city, postalcode) VALUES(:firstname,:lastname,:email,:address,:city,:postalcode)");
  $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
  $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
  $query->bindValue(':email', $email, PDO::PARAM_STR);
  $query->bindValue(':address', $address, PDO::PARAM_STR);
  $query->bindValue(':city', $city, PDO::PARAM_STR);
  $query->bindValue(':postalcode', $postalcode, PDO::PARAM_INT);
  $query->execute();

  $userid = $db->lastInsertId(); 
  $curdate = date("Y-m-d");

  $order = $db->prepare("INSERT INTO orders (userid, orderdate) VALUES ((SELECT id from users WHERE `id`=?), ?)");
  $order->bindValue(1, $userid);
  $order->bindValue(2, $curdate);
  $order->execute();

  header('HTTP/1.1 200 OK');
  Header("Location: http://localhost:3000/"); /* oma sivu onnistuneelle checkoutille? */
  
  $db->commit();
}
  
catch (PDOException $pdoex) {
  $db->rollback();
  returnError($pdoex);
}