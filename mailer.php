<?php 
//browser will send form data to php script in the server
//get form fields removes html tags and white space

$name = strip_tags(trim($_POST["name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["message"]);

//Check the data.
if (empty($name) OR empty($message) OR !filter_var($email,FILTER_VALIDATE_EMAIL)) {
	header("Location: ");
	exit;
}
?>