<?php
    //lets get all form values
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $website = $_POST["website"];
    $message = $_POST["message"];

    if(!empty($email) && !empty($message)){
        if(filter_var($email, FILTER_VALIDATE_EMAIL)){ //if user entered email is valid
            $receiver = "mhakeemmwas@gamil.com"; //email receiver email address
            $subject = "From: $name  <$email>"; //subject of the mail subject looks like from: mrwiyarahmadzai@gmail.com

            //marging cincating all user values inside body varuable. \n is for new line
            $body = "Name: $name \n Email: $email \n Phone: $phone \n website: $website \n message: $message \n\n regards, \n $name";
            $sender = "From: $email"; //sender email
            if(mail($receiver, $subject, $body, $sender)){ //mail() is a inbuilt php function to send mail
                echo "Your message has been sent";
            }
            else{
                echo "Sorry, field to send your message!";
            }
        }
        else {
            echo "Enter a valid Email Number";
        }
        
    }
    else{
        echo "The Email and message field is required!";
    }
?>