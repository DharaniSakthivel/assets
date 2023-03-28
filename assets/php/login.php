<?php
$username = $_POST['username'];
$password = $_POST['password'];
$confirm-password = $_POST['password'];

//database conection
$conn = new mysqli('localhost','root',' ','login');
if($conn->connect_error){
    die('connection failed:'.$conn ->connect_error);
}else{
    $stmt = $conn -> prepare("insert into login datas(username,password,confirm-password) values(?,?,?)");
    $stmt ->bind_param("sii",$username,$password,$confirm-password);
    $stmt ->execute();
    echo "registeration successfully...";
    $stmt ->close();
    $conn ->close();

}

?>