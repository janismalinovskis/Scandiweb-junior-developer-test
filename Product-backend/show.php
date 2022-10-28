<?php
include '../autoload.php';
$show=new ProductView();
$rows = $show->getProducts();
$data = array('rows' =>$rows);
echo json_encode($data);