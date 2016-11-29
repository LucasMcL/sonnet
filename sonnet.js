// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"
// Output the number of characters in the sonnet
// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string

// Identify div element that contains poem
var sonnetElement = document.getElementById('sonnet');
var sonnet = sonnetElement.innerHTML; //Pull contents of div

console.log("The first instance of orphans is " + sonnet.indexOf("orphans") + ".");
console.log("The number of characters in the sonnet is " + sonnet.length + ".");

sonnet = sonnet.replace("winter", "yuletide");
sonnet = sonnet.split(" the ").join( " a large ").split("The ").join("A large ");

sonnetElement.innerHTML = sonnet;