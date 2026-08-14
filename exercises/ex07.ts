// Exercise 7: Using Literal Types in Function

// 1. Create a function called `printDirection` that accepts a direction parameter with a literal type of "left" or "right."
// 2. Inside the function, print a message based on the provided direction.

function printDirection (
    direction: "left" | "right"
):void{
    if(direction === "left"){
        console.log(`Direction : ${direction}`)
    } else if(direction === "right") {
        console.log(`Direction : ${direction}`)
    }
    
}

printDirection("right")