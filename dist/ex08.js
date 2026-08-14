"use strict";
// Exercise 8: Guarding Against "Unknown" Type
// 1. Create a function `displayValue` that takes a parameter of type `unknown`.
// 2. Use a type guard to check if the value is a string or a number and print it accordingly.
// 3. Create a function that receives a variable of the `unknown` type and make some operations. 
//    Eg: if is a string, try to loop through to print each char. Don't handle the other cases. 
//    Check how hard is to handle a function that receives this kind of type.
function displayValue(value) {
    if (typeof value === "string") {
        return "The value is string";
    }
    else if (typeof value === "number") {
        return "The value is number";
    }
}
function displayLetter(letters) {
    if (typeof letters === "string") {
        for (const letter of letters) {
            console.log(letter);
        }
    }
}
displayLetter("Hello");
