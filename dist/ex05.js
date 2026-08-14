"use strict";
// Exercise 5: Create an Enum
// 1. Create an enum called `Day` with values representing the days of the week (e.g., Sunday, Monday, etc.).
// 2. Declare variables using the `Day` enum to represent the current day and print it.
// 3. Create an interface of `Race`, add some properties, like participants, first, second and third places, and also the `day` of the race using the enum.
var Day;
(function (Day) {
    Day["Sunday"] = "SUNDAY";
    Day["Monday"] = "MONDAY";
    Day["Tuesday"] = "TUESDAY";
    Day["Wednesday"] = "WEDNESDAY";
    Day["Thursday"] = "THURSDAY";
    Day["Friday"] = "FRIDAY";
    Day["Saturday"] = "SATURDAY";
})(Day || (Day = {}));
const currentDay = {
    month: "August",
    date: "14th",
    day: Day.Friday
};
const race = {
    participants: ["John", "Jane", "Max", "Lisa", "James"],
    firstPlace: "John",
    secondPlace: "Lisa",
    thirdPlace: "Max",
    eventDay: Day.Saturday,
};
console.log(race);
