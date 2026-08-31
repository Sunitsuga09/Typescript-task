/**
 * An online store is processing a customer's shopping cart.
 * The customer purchased:
 * 
 * | Product             |  Price | Quantity |
 * | ------------------- | -----: | -------: |
 * | Mechanical Keyboard | 850000 |        1 |
 * | Wireless Mouse      | 275000 |        2 |
 * | Mouse Pad           | 120000 |        1 |
 * 
 * Business Rules:
 * - Customers receive 10% discount if the total purchase exceeds Rp1,000,000.
 * - Only Premium members receive free shipping.
 * - Every purchased product increases the total item counter.
 * 
 * Additional Information: Current customer is Premium member.
 * 
 * Task:
 *  - Calculate subtotal.
 *  - Count the total purchased items using an increment operator.
 *  - Determine whether a discount should be applied.
 *  - Calculate the final payment.

 */

const keyboardPrice = 850000;
const keyboardQty = 1;
const mousePrice = 275000;
const mouseQty = 2;
const mousePadPrice = 120000;
const mousePadQty = 1;
const isPremiumMember = true;

const subtotal = (keyboardPrice * keyboardQty) + (mousePrice * mouseQty) + (mousePadPrice * mousePadQty);
let itemCount = 0;
itemCount += keyboardQty;
itemCount += mouseQty;
itemCount += mousePadQty;

const discount = subtotal > 1000000 ? subtotal * 0.1 : 0;
const freeShipping = isPremiumMember;
const finalPayment = subtotal - discount;

console.log(`Subtotal: Rp${subtotal.toLocaleString('id-ID')}`);
console.log(`Total Items: ${itemCount}`);
console.log(`Discount: Rp${discount.toLocaleString('id-ID')}`);
console.log(`Free Shipping: ${freeShipping}`);
console.log(`Final Payment: Rp${finalPayment.toLocaleString('id-ID')}`);