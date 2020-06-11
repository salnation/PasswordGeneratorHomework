document.getElementById(document).ready(function(); {
    var getRandom = function() {
      var random; 
      if {
      //produces a value greater than or equal to 0 and less than 1
      random = Math.random() 
      //value is an integer between 1 and max
      random =  + 1;  
     
    }
  };
    //produces a value greater than or equal to 0 and less than 1
    random = Math.random() 
    //value is an integer between 0 and -1
    random = Math.floor(random)
    //value is an integer between 1 and max
    random = + 1;
}

//next variables to be set - characters, password, begin, stop, char, num 

//These are all of the possible characters that can be used to generate the passwrd - numbers and letters both upper and lowercase as well as some special characters.
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
var password = "";

// calculate the length of the password entered by the user. parselnt parses a string argument and returns an integer.
var num = parselnt($("#num"));

// time to validate the length with an if / else statement - The isNaN() function determines whether a value is not a number.
if (isNaN(num)) {
   alert("Please enter a valid number");
} else {
    //loop like like learned last lesson in class
    for (var i = 0; i < num, i++)
    //SOMETHING HAS TO GO HERE TO GET A RANDOM CHARACTER FOR EACH OF THE CHARACTERS REQUIRED IN THE PASSWORD BY THE USER.
    //get a random character from the characters string
    begin = getRandomNumber();
    stop = start + 1;
    //Using the substring() method extracts the characters from a string
    char = characters.substring();
}

//
