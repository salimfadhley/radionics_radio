<?php 
$errors = '';
$myemail = ' radionicsradio@hotmail.com';//<-----Put Your email address here.
if(empty($_POST['usrname'])  || 
   empty($_POST['toughtbox']) || 
   empty($_POST['frequencies']))
{
    $errors .= "\n Error: all fields are required";
}

$name = $_POST['usrname']; 
$email_address = $_POST['toughtbox']; 
$message = $_POST['frequencies']; 

/*if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", 
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}*/

if( empty($errors))
{
	$to = $myemail; 
	$email_subject = "$name";
	$email_body = "You have received a new message. ".
	"\n UserName: $name \n Thought Box: $email_address \n Frequencies \n $message"; 
	
	$headers = "From: $myemail\n"; 
	//$headers .= "Reply-To: $email_address";
	
	mail($to,$email_subject,$email_body,$headers);
	//redirect to the 'thank you' page
	header('Location: thank-you.html');
} 
?>
