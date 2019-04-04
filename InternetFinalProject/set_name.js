firebase.auth().onAuthStateChanged(function(user) {
    var name, email;
    if (user) {
        // User is signed in.
        name = user.displayName;
        email = user.email;
        password = user.password;
        document.getElementById("labelContent").value = name;
    } else {
        // No user is signed in.

    }
});