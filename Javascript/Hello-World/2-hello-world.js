/* 
    We will go over comments, variables, arrays, and if statements in this tutorial.
    - Comments!
    - console.log: A way to write data to the console
    - Variables: can contain a value
    - Arrays: can contain a list of items
    - Array.forEach: Iterates through the array and performs an action on each of the items in the array
    - If Statement: IF a condition is true or not true, then do this 
    - Else Statement: If a condition fails an if condition, then do this
*/

console.log("Hello World!");
// This is invisible and won't be seen. Use this to comment your code

var message = "Hello World!";

console.log(message);

var messageArray = ["Hello", "World!"];

var newMessage = "";

messageArray.forEach(function(text){    
    if(newMessage != ""){
        newMessage += " " + text;
    }else{
        newMessage = text;
    }
});

console.log(newMessage);