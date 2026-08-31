/**
 * The school cafeteria sells lunch packages to students. Today, Raka purchased 3 fried rice meals, each costing Rp18,000, and 2 bottles of mineral water, each costing Rp5,000. Because he is a member of the student council, he received a Rp10,000 discount.
 * The cashier wants to calculate:
 *  - Total price of fried rice
 *  - Total price of drinks
 *  - Total price before discount
 *  - Final amount to be paid
 *
 * Task:
 * 1. Use operators to calculate:
 *  - Total food price
 *  - Total drink price
 *  - Grand total
 *  - Final payment
 * 2. Display the calculation results.
 */

const friedRice: number= 18000;
const drink: number= 5000;
const discount: number= 10000;

console.log("\n===TOTAL FOOD PRICE===")
console.log ("friedRice * 3=", friedRice * 3);

console.log("\n===TOTAL DRINK PRICE===")
console.log ("drink * 2=", drink * 2);

console.log("\n===GRAND TOTAL===")
console.log ("drink * 2 + friedRice * 3=", drink * 2 + friedRice * 3);

console.log("\n===Final PAYMENT===")
console.log ("drink * 2 + friedRice * 3 - discount", drink * 2 + friedRice * 3 - discount);