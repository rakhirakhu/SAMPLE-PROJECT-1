function validateName() {
    var NameField = document.getElementById("Name");
    var Name = NameField.value.trim();
    var NameError = document.getElementById("NameError");

    if (Name === "") {
        NameError.textContent = " Name is required";
        NameField.style.borderColor = "red";
    } else {
        NameError.textContent = "";
        NameField.style.borderColor = "";
    }
}


function validateEmail() {
    var emailField = document.getElementById("email");
    var email = emailField.value;
    var emailError = document.getElementById("emailError");

    if (email === "") {
        emailError.textContent = "Email Address is required";
        emailField.style.borderColor = "red";
    } else {
        emailError.textContent = "";
        emailField.style.borderColor = "";
    }
}
function validateComment() {
    var commentField = document.getElementById("comment");
    var comment = commentField.value;
    var commentError = document.getElementById("commentError");

    if (comment === "") {
        commentError.textContent = "add a comment";
        comment.style.borderColor = "red";
    } else {
        commentError.textContent = "";
        commentField.style.borderColor = "";
    }
}