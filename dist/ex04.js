"use strict";
// Exercise 4: Create a Tuple
// 1. Create a tuple called `coordinate` with two elements: a number representing the x-coordinate and a number representing the y-coordinate.
// 2. Assign values to the tuple elements.
// 3. Create an interface of location with the properties `description` and the tuple that you created.
// 4. Print out the interface and coordinates.
const coordinate = [10, 20];
const myLocation = {
    description: "Vancouver",
    coordinate: coordinate
};
console.log("location object: ", myLocation);
console.log("Coordinate: ", myLocation.coordinate);
