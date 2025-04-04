<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_form";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get and sanitize form data
    $name = $conn->real_escape_string($_POST['name'] ?? '');
    $email = $conn->real_escape_string($_POST['email'] ?? '');
    $phone_number = $conn->real_escape_string($_POST['phone_number'] ?? ''); // Changed from $phone to $phone_number
    $subject = $conn->real_escape_string($_POST['subject'] ?? '');
    $message = $conn->real_escape_string($_POST['message'] ?? '');

    // Validate required fields
    if (empty($name) || empty($email) || empty($phone_number) || empty($subject)) {
        die("Error: Please fill all required fields");
    }

    // Prepare and execute SQL query
    $sql = "INSERT INTO submissions (name, email, phone_number, subject, message) 
            VALUES ('$name', '$email', '$phone_number', '$subject', '$message')";

    if ($conn->query($sql) === TRUE) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $conn->error;
    }

    $conn->close();
} else {
    echo "Form not submitted";
}
?>