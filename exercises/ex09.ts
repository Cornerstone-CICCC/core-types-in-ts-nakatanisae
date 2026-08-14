// Exercise 9: Using the "Never" Type in a Function

// 1. Create a function `throwError` that throws an error.
// 2. Specify the return type of the function as `never`.
// 3. Call the function and catch the error.
// 4. Return `void` and try to see the difference. Try to return something.

function throwError(message: string, code: number):never{
    throw{message: message, errorCode: code}
};

try {
    throwError("An error occurred!", 500);
} catch (error){
    console.log("Caught error successfully:", error);
}

function throwErrorVoid(message: string, code: number):void{
    `${message}. Error code: ${code}`
};
//The return using "void" says "undefined" in terminal 
// I try to return something in throwErrorVoid function, but the error caised when the file is compiled


console.log(throwErrorVoid("An error occurred!", 500))