firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("tester2").innerHTML = "did it work???";
    } else {
        // No user is signed in.
        document.getElementById("tester2").innerHTML = "didntntntntntntn it work???";
    }
});