<?php
class DBConnect{
    
   
    protected function connect()
  {
      try{
        $user = "root";
        $pwd = "";
        $dbh=new PDO('mysql:host=localhost;dbname=scandiwebtestdb',$user,$pwd);
        return $dbh;
        }catch(exception $e){
          echo "connection error" . $e->getMessage();
        die();
        }
    

            
    }
   
    

    
    
}