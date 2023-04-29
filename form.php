<?php
if(isset($_GET["name"]) && isset($_GET["text"])){
    $name = $_GET["name"];
    $text = $_GET["text"];

    echo "이름: " . $name . "<br>";
    echo "글 내용: " . $text . "<br>";
}
?>
