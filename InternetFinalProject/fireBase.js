var app_fireBase = {};

(function(){

  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAuQa4Xdb5AD3CVZGiBcYxTC7H7-2cTR98",
    authDomain: "test-e1a97.firebaseapp.com",
    databaseURL: "https://test-e1a97.firebaseio.com",
    projectId: "test-e1a97",
    storageBucket: "test-e1a97.appspot.com",
    messagingSenderId: "531812764497"
    };
    firebase.initializeApp(config);


    app_fireBase = firebase;
})()