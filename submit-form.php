<?php
if(isset($_POST['submit'])) {
    $to = "your-email@example.com"; // Enter your email address here
    $name = $_POST['name'];
    $from = $_POST['email'];
    $message = $_POST['message'];
    $subject = "New message from CV contact form";

    $headers = "From: $name <$from>" . "\r\n" .
        "Reply-To: $from" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    mail($to, $subject, $message, $headers);
}
?>
