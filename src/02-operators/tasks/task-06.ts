/**
 * An internet café charges customers Rp8,000 per hour. 
 * Customers are billed for every started hour. If the total playing time exceeds 5 hours, they receive a 15% discount.
 * Today, a customer used a computer for:
 * 7 hours and 35 minutes
 * 
 * 
 * You need to determine:
 * - Total playing time in minutes
 * - Remaining minutes after full hours
 * - Total billed hours
 * - Total payment before discount
 * - Discount amount
 * - Final payment
 */

const pricePerHour = 8000;
const totalHours = 7;
const totalMinutes = 35;

const totalPlayingTimeMinutes = totalHours * 60 + totalMinutes;
const remainingMinutes = totalPlayingTimeMinutes % 60;
const billedHours = Math.ceil(totalPlayingTimeMinutes / 60);
const paymentBeforeDiscount = billedHours * pricePerHour;
const discountAmount = billedHours > 5 ? paymentBeforeDiscount * 0.15 : 0;
const finalPayment = paymentBeforeDiscount - discountAmount;

console.log(`Total Playing Time: ${totalPlayingTimeMinutes} minutes`);
console.log(`Remaining Minutes: ${remainingMinutes} minutes`);
console.log(`Billed Hours: ${billedHours} hours`);
console.log(`Payment Before Discount: Rp${paymentBeforeDiscount.toLocaleString('id-ID')}`);
console.log(`Discount Amount: Rp${discountAmount.toLocaleString('id-ID')}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString('id-ID')}`);