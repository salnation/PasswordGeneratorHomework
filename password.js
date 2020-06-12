"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            // Produces a value greater than or equal to 0 and less than 1
            random = Math.random(); 
            // Value is an integer between 0 and max -1
            random = Math.floor(random * max); 
            // Value is an integer between 1 and max
            random = random + 1; 
        }
        return random;
    };
    
    $("#generate").click(function() {
        // The val() method returns or sets the value attribute of the selected elements.
        $("#password").val( "" ); // Clear previous entry.
    
        // Next are variables to be set - chars, password, begin, stop, char, num.

        // All of the possible characters that can be used to generate the password - numbers and letters both upper and lowercase as well as some special characters.
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        var password = "";
        var start, stop, char;

        // Calculate the length of the password entered by the user. parselnt parses a string argument and returns an integer.
        var num = parseInt( $("#num").val() );

        // Validate the length with an if / else statement - The isNaN() function determines whether a value is not a number.
        if (isNaN(num)) {
            alert("Please enter a valid number");
        } else {
             // Loop number of times entered by user like we learned last class.
            for (var i = 0; i < num; i++) {
                // Get a random character from the chars string.
                start = getRandomNumber(chars.length);
                stop = start + 1;
                // Using the substring() method extracts the characters from a string.
                char = chars.substring(start, stop);

                // Adding the random character to the password string.
                password = password += char;
            }
             // Show the password string when the loop is done.
            $("#password").val( password );
        }
    }); // end click()
    
    $("#clear").click(function() {
        // The val() method returns or sets the value attribute of the selected elements.
        $("#num").val( "" );
        $("#password").val( "" );
        // The focus() method triggers the focus event, or attaches a function to run when a focus event occurs.
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()