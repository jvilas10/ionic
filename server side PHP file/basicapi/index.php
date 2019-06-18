<?php
if (isset($_SERVER['PHP_AUTH_USER']) && $_SERVER['PHP_AUTH_USER']== 'absar' &&  $_SERVER['PHP_AUTH_PW']== 'hsn') {
  // the user is authenticated and handle the rest api call here

 header( "Content-type: application/json" );

    $jsonAnswer = array('User' => $_SERVER['PHP_AUTH_USER']);
    echo json_encode($jsonAnswer);

} else {
    header('WWW-Authenticate: Basic realm="My Realm"');
    header('HTTP/1.0 401 Unauthorized');
    echo '401 Unauthorized-access';
    exit;

}
?>