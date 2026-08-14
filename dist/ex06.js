"use strict";
// Exercise 6: Union Types for Function Parameters
// 1. Create a function called `printId` that accepts either a number or a string as a parameter.
// 2. Inside the function, check the type of the parameter and print a message accordingly.
// 3. Return the function accordingly with the type, `number` or `string`.
function printId(parameter) {
    if (typeof parameter === "string") {
        return `${parameter} is string`;
    }
    else {
        return `${parameter} is number`;
    }
}
console.log(printId(123));
console.log(printId("text"));
