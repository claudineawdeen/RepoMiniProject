function Login()
  {
   var email=document.getElementById('email').value;
   var password=document.getElementById('pass').value;

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   const inp = document.getElementsByTagName("input");

  if (email=="" && password=="") {

        for(var i=0;i<inp.length;i++)
            inp[i].style.border = "1px solid red"; 
        document.getElementById('span3').innerHTML="Look like this is not an email";
        document.getElementById('span3').style.display="inline";
        document.getElementById('span4').innerHTML="Password cannot be empty";
        document.getElementById('span4').style.display="inline";
        document.getElementsByTagName("div")[3].style.height="300px";

        return;
    }



//Check Email Address    
    if (email=="") {
            document.getElementById('span3').innerHTML="Look like this is not an email";
            document.getElementById('span3').style.display="inline";
            document.getElementById('email').style.border="1px solid red";
            return;
        }
        else if (!emailRegex.test(email)) {
            document.getElementById('span3').innerHTML="Look like this is not an email";
            document.getElementById('span3').style.display="inline";
            document.getElementById('email').style.border="1px solid red";
            return;

        }
        else{
            document.getElementById('span3').innerHTML="";
            document.getElementById('span3').style.display="none";
            document.getElementById('email').style.border="1px solid #ccc";

        }
  

//Check Password
   if (password=="") {
        document.getElementById('span4').innerHTML="Password cannot be empty";
        document.getElementById('span4').style.display="inline";
        document.getElementById('pass').style.border="1px solid red";
        return;
    }
    else if (!passwordRegex.test(password)) {
        document.getElementById('span4').innerHTML="Password Not Correct";
        document.getElementById('span4').style.display="inline";
        document.getElementById('span4').style.fontSize="14px";
        document.getElementById('pass').style.border="1px solid red";
        return;
    }
    else{
        document.getElementById('span4').innerHTML="";
        document.getElementById('span4').style.display="none";
        document.getElementById('pass').style.border="1px solid #ccc";

    }

//Get data from local storage
     var emailFromStrg=window.localStorage.getItem("email");
     var passFromStrg=window.localStorage.getItem("password");

    if(emailFromStrg==email && passFromStrg==password)
         window.alert("successful login!");
    else
         window.alert("unsuccessful login!");
}


