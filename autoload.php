<?php
spl_autoload_register('autoloader');

function autoloader($classname){
$path="Product-backend/";
$extension =".php";
$fullpath=$path.$classname.$extension;

include_once $fullpath;

}