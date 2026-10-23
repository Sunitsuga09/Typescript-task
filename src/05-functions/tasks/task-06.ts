/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  return sales.reduce((total, amount) => total + amount, 0);
}

function findHighestTransaction(sales: number[]): number {
  return Math.max(...sales);
}

function findLowestTransaction(sales: number[]): number {
  return Math.min(...sales);
}

function calculateAverageSale(sales: number[]): number {
  return sales.length === 0 ? 0 : calculateTotalSales(sales) / sales.length;
}

function countLargeTransactions(sales: number[], minimumAmount: number): number {
  return sales.filter((amount) => amount > minimumAmount).length;
}

console.log(calculateTotalSales(sales))
console.log(findHighestTransaction(sales))
console.log(findLowestTransaction(sales))
console.log(calculateAverageSale(sales))
console.log(countLargeTransactions(sales, 500000))