//lets get all required elements

const form = document.querySelector("form");
statusTxt = form.querySelector(".button-area span");

form.onsubmit =(e)=>{
    e.preventDefault(); //preventing form from submiting 
    statusTxt.style.color="rgb(33, 33, 190)"
    statusTxt.style.disply="block";

    let xhr = new XMLHttpRequest(); //creating new xml object
    xhr.open("POST","message.php", true); //sending post request to message.php file
    xhr.onload=()=>{ //once ajax loaded
        if(xhr.readyState == 4 && xhr.status == 200){//if ajax response status is 200 &ready status is 4 means there is no errors
            let response = xhr.response;  //storing ajax response in a response varieble

            //if response is an error like enter a valid email address then we'll change status color to red and else reser the form
            if(response.indexOf("The Email and message field is required!") !=-1 || response.indexOf("Enter a valid Email Number")  || response.indexOf("Sorry, field to send your message!") ){
                statusTxt.style.color="red";
            }
            else{
                form.reset();
                setTimeout(() => {
                    statusTxt.style.display="none";
                }, 3000); //hide the status Text after 3 second
            }
            console.log(response);
            statusTxt.innerTxet = response;
        }
    }
    let formData = new FormData(form); //creating new formData obj. this object is used to send data
    xhr.send(formData); //sending form data
}