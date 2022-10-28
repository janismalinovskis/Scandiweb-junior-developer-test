<?php

include '../autoload.php';

$product=new ProductContr($_POST['sku'],$_POST['name'],$_POST['price'],$_POST['stype'],$_POST['attribute']);
  
if($product->check()){
 $data=array('res'=>'skuTaken');


}else if($product->setProduct()){
    
    $data=array('res'=>'success');


}else{
    $data=array('res'=>'error');
}

echo json_encode($data);