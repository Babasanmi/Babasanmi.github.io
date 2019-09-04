var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var message = document.getElementById("message");



function myFunction() {
    document.getElementById("name").minLength = "4";
    document.getElementById("name").innerHTML = "Minimum number of characters allowed in the text field is now 4.";
  }