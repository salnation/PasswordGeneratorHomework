"use strict"
document.getElementById(document).ready(function() {
    var getRandom = function(max) {
      var random; 
      if {!isNaN(max)) {
      // Produces a value greater than or equal to 0 and less than 1
      random = Math.random(); 
      // Value is an integer between 0 and max -1
      random = Math.floor(random*max);
      //value is an integer between 1 and max
      random = random + 1;  
    }
    return random;
  };

  $("#generate").click(function() {
    $("#password").val( "" ); // clear previous entry

// Next are variables to be set - characters, password, begin, stop, char, num 

// All of the possible characters that can be used to generate the passwrd - numbers and letters both upper and lowercase as well as some special characters.
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
var password = "";
var begin, stop, char;

// calculate the length of the password entered by the user. parselnt parses a string argument and returns an integer.
var num = parselnt($("#num").val() );

// validate the length with an if / else statement - The isNaN() function determines whether a value is not a number.
if (isNaN(num)) {
   alert("Please enter a valid number");
} else {
    //loop like like learned last lesson in class
    for (var i = 0; i < num, i++) {
    //get a random character from the characters string
    begin = getRandom(characters.length);
    stop = begin + 1;
    //Using the substring() method extracts the characters from a string
    char = characters.substring(begin, stop);

    // Adding the random character to the password string
    password = password += char;
  }

    // show the password string when the loop is done 
    $("#password").val( password );
  }
}); // end click()

$("#clear").click(function() {
    //The val() method returns or sets the value attribute of the selected elements
    $("#num").val( "" );
    $("#password").val( "" );
    //The focus() method triggers the focus event, or attaches a function to run when a focus event occurs.
    $("#num").focus();
}) // end click()

//set focus on initial load 
$("#num").focus();
}); // end ready()