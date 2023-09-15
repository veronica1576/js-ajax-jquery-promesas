<?php

    ini_set('display_errors', 'Off');
    ini_set('displat_startup_errors', 'Off');
    error_reporting(0);

//route::post('/getSearch', './index.php')->name('post');


$id = $_POST['clave'];
$nombre =$_POST['nombre'];
$telefono =$_POST['celular'];

function conectarse($id, $nombre, $telefono){
  
$connect = new mysqli('localhost', 'root', '', 'usuarios');
$sql ="SELECT id, nombre, telefono FROM datos";
$result =mysqli_query($connect, $sql);

//$link = mysqli_connect('localhost', 'root', '', 'usuarios');
if (!$connect) {
   echo "Error no se conecta a la DB";
   exit();
}
$result = mysqli_select_db('usuarios',$sql);
if (!$result) {
    echo "Could not query";
    exit();
}
return $sql;

//$con=Conectarse(4,'hfg',4);

$query="SELECT * FROM datos WHERE nombre='$nombre' AND telefono ='$telefono' AND id='$id'";
$result = mysqli_query($result,$query);


//$q =mysqli_query($query, $con);

if(mysqli_num_rows($result)>0)
{
    return 1;
}else{
    return 0;
}

}