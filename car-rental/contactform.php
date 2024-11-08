<?php 
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$message = $_POST['message'];

$conn = new mysqli('localhost', 'root', '', 'carrental');
if($conn->connect_error){
    die('Connection Failed :' .$conn->connect_error);
} else{
    $stmt = $conn->prepare("insert into contact(name, email, number, message) 
    values(?, ?, ?, ?)");
    $stmt->bind_param("sssi", $name,$email,$number,$message);
    $stmt->execute();
    echo "წერილი წარმატებით გაიგზავნა";
    $stmt->close();
    $conn->close();
}
?>


