<?php
class ProductView extends DbQuery{

public function deleteRecord($id){
    $this->delete($id);
}

public function getProducts(){
    
 $data=$this->getData();

 return $data;

}

} 