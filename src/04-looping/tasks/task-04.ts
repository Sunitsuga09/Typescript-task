/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */
const sales: number[] = [
    125000, 350000, 78000, 910000, 150000, 420000, 275000, 99000, 640000, 18000 
];

const aw: number = 300000;
let amountWorth: number= 0;
let totalRevenue: number = 0;
let highestTransaction: number = 0;
let lowestTransaction: number = 0;

for (let i: number = 0; i < sales.length; i++) {
    const currentSales: number = sales[i]

    totalRevenue += currentSales
    highestTransaction = Math.max(...sales)
    lowestTransaction = Math.min(...sales)

    if (sales[i] >= aw) {
    amountWorth++;
    }
}
const averageWorth: number = totalRevenue / sales.length;

console.log (`Total Revenue = ${totalRevenue}`)
console.log (`Highest transaction = ${highestTransaction}`)
console.log (`Lowest transaction = ${lowestTransaction}`)
console.log (`Number of transactions worth Rp300,000 or more = ${amountWorth}`)
console.log(`Average Worth = ${averageWorth}`);