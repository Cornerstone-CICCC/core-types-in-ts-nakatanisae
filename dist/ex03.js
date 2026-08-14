"use strict";
// Exercise 3: Manipulate and Reservations Array
const calculateTotalPrice = (checkIn, checkOut, pricePerDay) => {
    const diffInMs = checkOut.getTime() - checkIn.getTime();
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays * pricePerDay;
};
const checkIn1 = new Date("2026-08-12");
const checkOut1 = new Date("2026-08-14");
const pricePerDay1 = 50;
const reservations = [
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
