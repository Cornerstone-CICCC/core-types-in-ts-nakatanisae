"use strict";
// Exercise 9: Using the "Never" Type in a Function
// 1. Create a function `throwError` that throws an error.
// 2. Specify the return type of the function as `never`.
// 3. Call the function and catch the error.
// 4. Return `void` and try to see the difference. Try to return something.
// function throwError(message: string, code: number):never{
//     throw{message: message, errorCode: code}
// }
function throwError(message, code) {
    `${message}. Error code: ${code}`;
}
console.log(throwError("An error occurred!", 500));
