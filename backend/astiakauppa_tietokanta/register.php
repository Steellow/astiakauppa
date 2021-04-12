<?php
require_once 'inc/functions.php';
require_once 'inc/headers.php';

try {
  $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);
  $passwordHash = hash("sha256", $password);
  $firstname = filter_input(INPUT_POST, 'firstname', FILTER_SANITIZE_STRING);
  $lastname = filter_input(INPUT_POST, 'lastname', FILTER_SANITIZE_STRING);
  $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
  $address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_STRING);
  $city = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_STRING);
  $postalcode = filter_input(INPUT_POST, 'postalcode', FILTER_SANITIZE_NUMBER_INT);

  $db = openDb();
  // katsotaan onko sähköposti jo tietokannassa
  $emailsql = "SELECT * FROM users WHERE email = '$email'";
  $check = $db->query($emailsql);
  $results = $check->fetchAll(PDO::FETCH_ASSOC);

  // jos sposti ei ole tietokannassa, rekisteröidään normaalisti
  if (!$results) {
    $sql = "INSERT INTO users (password, firstname, lastname, email, address, city, postalcode)
    VALUES (:passwordHash,:firstname,:lastname,:email,:address,:city,:postalcode)";
    $query = $db->prepare($sql);
    $query->bindValue(':passwordHash', $passwordHash, PDO::PARAM_STR);
    $query->bindValue(':firstname', $firstname, PDO::PARAM_STR);
    $query->bindValue(':lastname', $lastname, PDO::PARAM_STR);
    $query->bindValue(':email', $email, PDO::PARAM_STR);
    $query->bindValue(':address', $address, PDO::PARAM_STR);
    $query->bindValue(':city', $city, PDO::PARAM_STR);
    $query->bindValue(':postalcode', $postalcode, PDO::PARAM_INT);
    $query->execute();
    header('HTTP/1.1 200 OK');
  } else {
    // jos sposti on tietokannassa, napataan salasana muuttujaan
    foreach($results as $row) {
      $dbpw = $row['password'];
    }
    
    // jos salasana on null tietokannassa, tallennetaan syötetty salasana sinne.
    if (!$dbpw) {
      $sql = "UPDATE users SET `password` = :passwordHash WHERE email = :email";
      $query = $db->prepare($sql);
      $query->bindValue(':passwordHash', $passwordHash, PDO::PARAM_STR);
      $query->bindValue(':email', $email, PDO::PARAM_STR);
      $query->execute();
      header('HTTP/1.1 200 OK');
    } else {
      // jos tietokannassa on jo jokin salasana, sähköpostia on käytetty rekisteröitymiseen aiemmin
      header('HTTP/1.1 401 Unauthorized');
    }
  }
} 
catch (PDOException $pdoex) {
  returnError($pdoex);
}