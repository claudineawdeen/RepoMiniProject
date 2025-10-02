function claim()
  {
   var firstName=document.getElementById('fname').value;
   var lastName=document.getElementById('lname').value;
   var email=document.getElementById('email').value;
   var password=document.getElementById('pass').value;
   var confirmPassword=document.getElementById('confirmPass').value;

   const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
   const nameRegex = /^[A-Za-z]+(?:[ -'][A-Za-z]+)*$/;
   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   const inp = document.getElementsByTagName("input");

  if (firstName==""&& lastName=="" && email=="" && password=="" && confirmPassword=="")  {

        for(var i=0;i<inp.length;i++)
            inp[i].style.border = "1px solid red"; 
   
        document.getElementById('span1').innerHTML="First Name cannot be empty";
        document.getElementById('span1').style.display="inline";
        document.getElementById('span2').innerHTML="Last Name cannot be empty";
        document.getElementById('span2').style.display="inline";
        document.getElementById('span3').innerHTML="Look like this is not an email";
        document.getElementById('span3').style.display="inline";
        document.getElementById('span4').innerHTML="Password cannot be empty";
        document.getElementById('span4').style.display="inline";
        document.getElementById('span5').innerHTML="confirmed Password cannot be empty";
        document.getElementById('span5').style.display="inline";
        document.getElementsByTagName("div")[3].style.height="580px";

        return;
    }
//Check First Name
  if (firstName=="") {
        document.getElementById('span1').innerHTML="First Name cannot be empty";
        document.getElementById('span1').style.display="inline";
        document.getElementById('fname').style.border="1px solid red";
        return;
    }
    else if (!nameRegex.test(firstName)) {
        document.getElementById('span1').innerHTML="First Name cannot be empty";
        document.getElementById('span1').style.display="inline";
        document.getElementById('fname').style.border="1px solid red";
        return;
    }
    else{
        document.getElementById('span1').innerHTML="";
        document.getElementById('span1').style.display="none";
        document.getElementById('fname').style.border="1px solid #ccc";

    }


//Check Last Name
    if (lastName=="") {
        document.getElementById('span2').innerHTML="Last Name cannot be empty";
        document.getElementById('span2').style.display="inline";
        document.getElementById('lname').style.border="1px solid red";
        return;
    }
   else if (!nameRegex.test(lastName)) {
        document.getElementById('span2').innerHTML="Last Name cannot be empty";
        document.getElementById('span2').style.display="inline";
        document.getElementById('lname').style.border="1px solid red";
        return;
    }
    else{
        document.getElementById('span2').innerHTML="";
        document.getElementById('span2').style.display="none";
        document.getElementById('lname').style.border="1px solid #ccc";

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
        document.getElementById('span4').innerHTML="Password must have at least 8 characters and numbers and sympol";
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
//Check Confirmed Password
   if (confirmPassword=="") {
        document.getElementById('span5').innerHTML="Confirmed Password cannot be empty";
        document.getElementById('span5').style.display="inline";
        document.getElementById('span5').style.border="1px solid red";
        document.getElementById('span5').style.border="none";

        return;
    }
    else if (confirmPassword!== password) {
        document.getElementById('span5').innerHTML="Confirmed Password dose not match with password";
        document.getElementById('span5').style.display="inline";
        document.getElementById('span5').style.fontSize="14px";
        document.getElementById('span5').style.border="none";
        document.getElementById('confirmPass').style.border="1px solid red";
        return;
    }
    else{
        document.getElementById('span5').innerHTML="";
        document.getElementById('span5').style.display="none";
        document.getElementById('confirmPass').style.border="1px solid #ccc";

    }

//Store data in local storage
    localStorage.setItem('firstName', firstName); 
    localStorage.setItem('lastName', lastName); 
    localStorage.setItem('email', email); 
    localStorage.setItem('password', password);
    localStorage.setItem('ConfirmedPassword', confirmPassword);

    window.alert("successful Sighn up!");
}