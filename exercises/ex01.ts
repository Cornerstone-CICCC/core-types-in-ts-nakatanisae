// Exercise 1: Create a Reservation Object

// 1. Create an object called `reservation` with properties `customerInformation`, `paymentInformation`, `checkOut` and `checkIn`.
// 2. Make sure to specify the types for each property.
// 3. Print out the reservation's information using `console.log`.

interface Reservation {
  customerInformation: string;
  paymentInformation: string;
  checkIn: string;
  checkOut: string;
}


const reservation: Reservation = {
  customerInformation: "Sae Nakatani",
  paymentInformation: "Credit Card",
  checkIn: "2026-08-12",
  checkOut: "2026-08-14"
};


console.log(reservation);