var user = firebase.auth().currentUser;
function c_pass(){
                    firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {

        var password = prompt("Please new password, must be longer than 5 characters:", "");
    if (password == null){

    }
    else if (password == "") {
        alert("Error Nothing entered for password!");
    }
    if(password.length < 6){
        alert("Password must be longer than 5 characters");
    }
    else {
        var password2 = prompt("Please repeat new password:", "");
        if (password2 == null || password2 == "") {
            alert("Error Nothing entered for repeat password! Password Not Changed");
        }
        else {
            if (password == password2){
                var passre = prompt("please enter old password:");
                var credential = firebase.auth.EmailAuthProvider.credential(user.email,passre);
                user.reauthenticateAndRetrieveDataWithCredential(credential).then(function() {
    user.updatePassword(password).then(function() {
  // Update successful.
    alert("Password Changed");
        document.getElementById("password").innerHTML = password;
}).catch(function(error) {
    
  // An error happened.
}); 
                    }).catch(function(error) {
    alert("error with credential");
  // An error happened.
}); 
                //need to update server side
            }
            else{
                alert("Passwords do not match! Password not changed");
            }
        }
    }

             } else {
        // No user is signed in.

    }
});
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
            
            document.getElementById("email").innerHTML = email;
                       firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
        
            user.updateEmail(email).then(function() {
  alert("Email changed");
}).catch(function(error) {
  alert("Error");
});
            } else {
        // No user is signed in.

    }
});


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
            
            document.getElementById("name").innerHTML = firstname + " " + lastname;
            firebase.auth().onAuthStateChanged(function(user) {
    
    if (user) {
        alert("success");
                    user.updateProfile({
  displayName: firstname + " " + lastname
}).then(function() {
                
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
        
    } else {
        // No user is signed in.

    }
});

            //change in database
        }
    }
}