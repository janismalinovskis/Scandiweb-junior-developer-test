<?php
abstract class DbQuery extends DBConnect{

    protected function checkSku($sku){
        $sql="SELECT sku FROM products WHERE sku=?";
        $stmt=$this->connect()->prepare($sql);
        $stmt->execute([$sku]);

        if($stmt->rowCount()>0){
            return false;
        }else{
            return true;
        }
    }
   
    
    
    
    protected function insert($sku,$name,$price,$attribute,$stype){
    
    
    
    $sql="INSERT INTO products (sku,name,price,properties,attribute) VALUES (?,?,?,?,?)";
        
    $stmt=$this->connect()->prepare($sql);
    $stmt->execute([$sku,$name,$price,$attribute,$stype]);
    return true; 
    
   
    
    
        
    }

    protected function getData(){
    $data = [];
    if($sql=$this->connect()->query("SELECT * FROM products")){
        while ($row=$sql->fetch(PDO::FETCH_ASSOC)){
            $data[] = $row;
        }
    }
    return $data;
    }


    protected function delete($id){
        
        $ids = array_map('intval', explode(',', $id));
        $placeHolder = str_repeat('?,', count($ids) - 1) . '?';
        $sql=" DELETE FROM products WHERE id IN($placeHolder)";
       $stmt=$this->connect()->prepare($sql);
       $stmt->execute($ids);
        
        
        return true;
        
            
    }

}