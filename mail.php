<?php
$to = 'konstantin@videosharks.com';
$subject = 'VideoSharks Website Contact';
$name = $_POST['name'];
$mail = $_POST['email'];
$phone = $_POST['phone'];
$company = $_POST['company'];
$message = "Name: " . $name . "\nPhone: " . $phone . "\nCompany: ". $company . "\n\n" . $_POST['message'];
$headers = "From:" . $mail;

mail($to, $subject, $message, $headers);
?>
