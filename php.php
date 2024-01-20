<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // You can add additional validation or processing logic here.

    // Example: Send an email (make sure your server supports email sending)
    $to = "your@email.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // You can customize the email message as needed
    $email_message = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Send email
    mail($to, $subject, $email_message, $headers);

    // Optionally, you can redirect the user after successful submission
    header("Location: thank_you.html");
    exit();
}
?>