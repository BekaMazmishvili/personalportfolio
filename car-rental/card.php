<?php 
$name = $_POST['name'];
$number = $_POST['number'];
$start = $_POST['start'];
$end = $_POST['end'];
$cardnumber = $_POST['cardnumber'];
$cardmonth = $_POST['cardmonth'];
$cardyear = $_POST['cardyear'];
$cardcvv = $_POST['cardcvv'];

$conn = new mysqli('localhost', 'root', '', 'carrental');
if($conn->connect_error){
    die('Connection Failed :' .$conn->connect_error);
} else{
    $stmt = $conn->prepare("insert into card(name,number,start,end,cardnumber,cardmonth,cardyear,cardcvv) 
    values(?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssss", $name,$number,$start,$end,$cardnumber,$cardmonth,$cardyear,$cardcvv);
    $stmt->execute();
    echo "ტრანზაქცია წარმატებით დასრულდა";
    $stmt->close();
    $conn->close();
}
?>

