<?php 
//browser will send form data to php script in the server
//get form fields removes html tags and white space

$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

//Check the data.
if (empty($name) OR empty($message) OR !filter_var($email,FILTER_VALIDATE_EMAIL)) {
	header("Location: https://andyosullivan.com/index.php?success=-1#form");
	exit;
}



//set recipient email address
$recipient = "hello@webdesigncourse.co";

//set the email subject.
$subject = "New contact from $name";

//Build the email content. 
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

//Build the email headers.

$email_header = "from: $name <$email>";


//send the email.
mail($recipient, $subject, $email_content, $email_headers);


//redirect to the index.html page with success code 
	
header("Location https://andyosullivan.com/index.php?success=1#form");

?>