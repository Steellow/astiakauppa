<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';


try {
    
  $input = json_decode(file_get_contents('php://input'));
  $firstname = filter_var($input->firstname, FILTER_SANITIZE_STRING);
  $lastname = filter_var($input->lastname, FILTER_SANITIZE_STRING);
  $email = filter_var($input->email, FILTER_SANITIZE_STRING);
  $address = filter_var($input->address, FILTER_SANITIZE_STRING);
  $city = filter_var($input->city, FILTER_SANITIZE_STRING);
  $postalcode = filter_var($input->postalcode, FILTER_SANITIZE_NUMBER_INT);
  $cart=$input->cart;

  $db = openDb();
  $db->beginTransaction();

  // USERS-TAULU

  $query = $db->prepare("INSERT INTO users (firstname, lastname, email, address, city, postalcode) VALUES(:firstname,:lastname,:email,:address,:city,:postalcode)");
  $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
  $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
  $query->bindValue(':email', $email, PDO::PARAM_STR);
  $query->bindValue(':address', $address, PDO::PARAM_STR);
  $query->bindValue(':city', $city, PDO::PARAM_STR);
  $query->bindValue(':postalcode', $postalcode, PDO::PARAM_INT);
  $query->execute();
  // var_dump(json_decode($cart));
  // exit;

  // ORDER-TAULU

  $userid = $db->lastInsertId(); 
  $curdate = date("Y-m-d");

  $order = $db->prepare("INSERT INTO orders (userid, orderdate) VALUES (?, ?)");
  $order->bindValue(1, $userid);
  $order->bindValue(2, $curdate);
  $order->execute();

  // ORDER_ROW-TAULU 

  $ordernum = $db->lastInsertId(); 
  // $cart = cart;
  // var_dump(json_decode($cart));
  // $input = json_decode(file_get_contents('php://input'));
  // $cart = $input->cart;
  $rownum = 1;

  foreach ($cart as $product) {
  $orderrow = $db->prepare("INSERT INTO order_row (ordernum, rownum, productid, amount) VALUES (:ordernum, :rownum, :productid, :amount)");
  $orderrow->bindValue(':ordernum', $ordernum, PDO::PARAM_INT);
  $orderrow->bindValue(':rownum', $rownum , PDO::PARAM_INT);
  $orderrow->bindValue(':productid', $product->product->id, PDO::PARAM_INT);
  $orderrow->bindValue(':amount', $product->amount, PDO::PARAM_INT);
  // array_push($data,$product->product->id);
  $orderrow->execute();
  $rownum++;
  }

  header('HTTP/1.1 200 OK');
  // header("Location: http://localhost:3000/"); /* oma sivu onnistuneelle checkoutille? */

  $db->commit();
}
  
catch (PDOException $pdoex) {
  $db->rollback();
  returnError($pdoex);
}