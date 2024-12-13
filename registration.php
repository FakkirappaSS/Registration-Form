<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Sanitize and validate the input
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));

    
    
    // Respond with  a success message
    echo "<h3>Thank You for Registering!</h3>";
    echo "<p>Name: <strong>$name</strong></p>";
    echo "<p>Email: <strong>$email</strong></p>";
    echo "<p>Phone: <strong>$phone</strong></p>";
} else {
    echo "<p style='color:red;'>There was an error processing your request. Please try again later.</p>";
}
?>
