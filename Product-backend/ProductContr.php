<?php

class ProductContr extends DbQuery{

    private $sku;
    private $name;
    private $price;
    private $stype;
    private $attribute;

    
    
    
    function __construct($sku,$name,$price,$stype,$attribute)
    {
        $this->sku=$sku;
        $this->name=$name;
        $this->price=$price;
        $this->stype=$stype;
        $this->attribute=$attribute;
    }


    
    
    
    public function setProduct(){
        
        
      if($this->emptyInput()){
        $this->insert($this->sku,$this->name,$this->price,$this->stype,$this->attribute);  
        return true;
      }else{
          return false;
      }
          
      
    }
    
    private function emptyInput(){
      if(empty($this->sku)||empty($this->name)||empty($this->price)||empty($this->stype)||empty($this->attribute)){
        return false;
      }else{
        return true;
      }
    }
    
    public function check(){
      if(!$this->checkSku($this->sku)){
        return true;
      }else{
        return false;
      }

    }
}