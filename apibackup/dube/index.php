<?php

    if(isset($_GET['admin'])){
      include_once 'admin_upload.php';
      exit;
    }

    else{
      include_once 'home.php';
      exit;
    }


?>

