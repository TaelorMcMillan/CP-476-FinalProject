firebase.auth().onAuthStateChanged(function(user) {
    var name, email;
    if (user) {
        // User is signed in.
        name = user.displayName;
        email = user.email;
        password = user.password;
        document.getElementById("name").innerHTML = name;
        document.getElementById("email").innerHTML = email;
    } else {
        // No user is signed in.

    }
});