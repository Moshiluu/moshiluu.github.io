<?php


$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$phone = $_POST['phone'];

$email_from = 'ethanluu0405@gmail.com';

$email_subject = "New Form Submission";

$email_body = "Name: $name.\nEmail: $visitor_email.\nSubject $subject.\nPhone Number: $phone.\nMessage:$message.\n";


$to = "ethanluu0405@gmail.com"
$headers = "From $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n"

mail($to,$email_subject, $email_body, $headers);

header("Location: index.html");
?>