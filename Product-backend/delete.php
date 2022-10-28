<?php
if (isset($_POST['ids'])){

include '../autoload.php';

$del = new ProductView();

$del->deleteRecord($_POST['ids']);
   
}