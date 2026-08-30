/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type product = {
    discounted: boolean;
    name: string;
    productCode: number;
    sellingPrice: number;
    stockQuantity: number;
    productWeight: string;
    averageCustomerRating: number;
};

const product1: product = {
    discounted: true,
    name: "Cocacola",
    productCode: 92781,
    sellingPrice: 6000,
    stockQuantity: 400,
    productWeight: "250g",
    averageCustomerRating: 4.6,
};

const product2: product = {
    discounted: false,
    name: "Tango",
    productCode: 92278,
    sellingPrice: 5000,
    stockQuantity: 609,
    productWeight: "98g",
    averageCustomerRating: 3.9,
};

const product3: product = {
    discounted: true,
    name: "Aqua",
    productCode: 91283,
    sellingPrice: 2500,
    stockQuantity: 900,
    productWeight: "600g",
    averageCustomerRating: 4.82,
};

console.log("\n=== PRODUCT 1 ===");
console.log(product1)

console.log("\n=== PRODUCT 2 ===");
console.log(product2)

console.log("\n=== Product 3 ===");
console.log(product3)