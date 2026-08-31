/**
 * A hotel calculates a guest's payment based on the following information.
 * | Information          | Value  |
 * | -------------------- | ------ |
 * | Room Price per Night | 650000 |
 * | Nights Stayed        | 4      |
 * | Service Charge       | 120000 |
 * | Tax                  | 11%    |
 * | VIP Member           | Yes    |
 * 
 * Business Rules
 * - VIP guests receive a 12% room discount.
 * - Tax is calculated after the discount.
 * - Service charge is not discounted.
 * - The hotel also offers free breakfast if the guest stays at least 3 nights or is a VIP member.
 * 
 * The system must calculate:
 * - Room subtotal
 * - Discount
 * - Tax
 * - Final payment
 * - Whether the guest is eligible for free breakfast
 */

const roomPrice = 650000;
const nightsStayed = 4;
const serviceCharge = 120000;
const taxRate = 0.11;
const isVipMember = true;

const roomSubtotal = roomPrice * nightsStayed;
const discount = isVipMember ? roomSubtotal * 0.12 : 0;
const discountedRoomPrice = roomSubtotal - discount;
const tax = discountedRoomPrice * taxRate;
const finalPayment = discountedRoomPrice + serviceCharge + tax;
const freeBreakfast = nightsStayed >= 3 || isVipMember;

console.log(`Room Subtotal: Rp${roomSubtotal.toLocaleString('id-ID')}`);
console.log(`Discount: Rp${discount.toLocaleString('id-ID')}`);
console.log(`Tax: Rp${tax.toLocaleString('id-ID')}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString('id-ID')}`);
console.log(`Free Breakfast Eligible: ${freeBreakfast}`);