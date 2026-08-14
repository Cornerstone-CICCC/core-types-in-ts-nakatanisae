// Exercise 3: Manipulate and Reservations Array

// 1. Create an array called `reservations` containing the multiple reservations that were created in the previous exercises.
// 2. Add new property in the `reservation` interface for `pricePerDay`.
// 3. Change the property paymentInformation to be an interface of `isPayed`, `totalPrice`.
// 4. Calculate the price using the difference between `checkIn` and `checkOut`. Use the type `Date` and check how you can get the difference in days between two dates.
//    Eg: Define a price per day and make the multiplication. If the reservation is two days, make the correct calculation.
// 5. Add new reservation to the array.
// 6. Print the information of each reservation. Check how you can print just a specific property.

interface PaymentInformation {
    isPayed: boolean;
    totalPrice: number;
}
interface Reservation {
  customerInformation: string;
  paymentInformation: PaymentInformation;
  checkIn: Date;
  checkOut: Date;
  pricePerDay: number;

}

const calculateTotalPrice = (checkIn: Date, checkOut: Date, pricePerDay: number): number => {

  const diffInMs = checkOut.getTime() - checkIn.getTime();
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  return diffInDays * pricePerDay;
};

const checkIn1 = new Date("2026-08-12");
const checkOut1 = new Date("2026-08-14");
const pricePerDay1 = 50;


const reservations: Reservation[] = [
    {
  customerInformation: "Sae Nakatani",
  paymentInformation: {
    isPayed: true,
    totalPrice: calculateTotalPrice(checkIn1, checkOut1, pricePerDay1),
  },
  checkIn: checkIn1,
  checkOut: checkOut1,
  pricePerDay: pricePerDay1
}

];

const checkIn2 = new Date("2026-09-01");
const checkOut2 = new Date("2026-09-05");
const pricePerDay2 = 80;

reservations.push({
  customerInformation: "Jane Doe",
  paymentInformation: {
    isPayed: false,
    totalPrice: calculateTotalPrice(checkIn2, checkOut2, pricePerDay2),
  },
  checkIn: checkIn2,
  checkOut: checkOut2,
  pricePerDay: pricePerDay2,
});

reservations.forEach((reservation, index) => {
  console.log(`Reservation #${index + 1}:`);
  console.log(`- Customer: ${reservation.customerInformation}`);
  console.log(`- Total Price: $${reservation.paymentInformation.totalPrice}`);
  console.log(`- Is Payed: ${reservation.paymentInformation.isPayed}`);
});
