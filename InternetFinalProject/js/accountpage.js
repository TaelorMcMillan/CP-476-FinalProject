function c_user(){
    var username = prompt("Please new username:", "");
    if (username == null){

    }
    else if (username == "") {
        alert("Error Nothing entered for username! Username Not Changed");
    }
    else {
        //check will need to be done to make sure username is availble
            //if not different alert will be dispalayed
        alert("Username Changed");
        document.getElementById("username").innerHTML = username;
    }
}
function c_pass(){
    var password = prompt("Please new password:", "");
    if (password == null){

    }
    else if (password == "") {
        alert("Error Nothing entered for password!");
    }
    else {
        var password2 = prompt("Please repeat ne password:", "");
        if (password2 == null || password2 == "") {
            alert("Error Nothing entered for repeat password! Password Not Changed");
        }
        else {
            if (password == password2){
                alert("Password Changed");
                document.getElementById("password").innerHTML = password;
                //need to update server side
            }
            else{
                alert("Passwords do not match! Password not changed");
            }
        }
    }

}
function c_email(){
    var email = prompt("Please new email:", "");
    if (email == null){

    }
    else if (email == "") {
        alert("Error Nothing entered for email! Email Not Changed");
    }
    else {
        //check will need to be done to make sure username is availble
            //if not different alert will be dispalayed
        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            alert("Invalid Format Email not Changed");
        }
        else{
            alert("Email changed");
            document.getElementById("email").innerHTML = email;
        }
    }
}

function c_name(){
    var firstname = prompt("Please first name", "");
    if (firstname == null){

    }
    else if (firstname == "") {
        alert("Nothing Entered for First Name. Name Will not be Changed");
    }
    else {
        var lastname = prompt("Please last name", "");
        if (lastname == null){

        }
        else if (lastname == "") {
            alert("Nothing Entered for Last Name. Name Will not be Changed");
        }
        else{
            alert("Name Changed ");
            document.getElementById("name").innerHTML = firstname + " " + lastname;
            //change in database
        }
    }
}