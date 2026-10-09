/**
 * A warehouse stores the stock quantity of each product in following array.
 * Warehouse Rules:
 * - Out of Stock → quantity = 0
 * - Low Stock → quantity < 10
 * - Safe Stock → quantity ≥ 10
 * 
 * Students have to Calculate:
 * - Number of Out of Stock products
 * - Number of Low Stock products
 * - Number of Safe Stock products
 * - Total inventory
 * - Average stock quantity
 */

const stocks = [
    25, 0, 18, 6, 42,
    9, 0, 55, 13, 2,
    30, 8, 41, 0, 16
];

let totalInventory : number = 0;
let lowStock : number = 0;
let outOfStock : number = 0;
let safeStock : number = 0;

for (let i: number = 0; i < stocks.length; i++) {
    const currentStock: number = stocks [i];

    totalInventory += currentStock

    if (stocks[i] == 0) {
        outOfStock++
    }
  
    else if (stocks[i] >= 10){
        safeStock++
    }

    else {
        lowStock++
    }
}

const averageStock: number = totalInventory / stocks.length
console.log(`${outOfStock} Out of Stock products`)
console.log(`${lowStock} Low Stock products`)
console.log(`${safeStock} Safe Stock products`)
console.log(`${totalInventory} Total inventory`)
console.log(`Average Stock = ${averageStock}`)

