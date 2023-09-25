
        
function validateemail() {
var emailarea = document.getElementById("emailaddress");
var emailaddress = emailarea.value.trim();
var emailaddresserror = document.getElementById("emailaddresserror");

if (emailaddress === "") {
emailaddresserror.textContent = "Email address Required";
emailarea.style.borderColor = "red";
} else {
emailaddresserror.textContent = "";
emailarea.style.borderColor = "";
}
}
function validatepassword() {
var passwordarea = document.getElementById("password");
var password = passwordarea.value.trim();
var passworderror = document.getElementById("passworderror");

if (password === "") {
passworderror.textContent = "Password Required";
passwordarea.style.borderColor = "red";
} 
else if (password.length < 6) {
       passworderror.textContent = "Password must be at least 6 characters long";
       passwordarea.style.borderColor = "red";
}
else {
passworderror.textContent = "";
passwordarea.style.borderColor = "";
}
}

