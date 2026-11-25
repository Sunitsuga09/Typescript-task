/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */

/**
 * An online store has customer orders.
 */

const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");

const orderTotals = completedOrders.map(order => {
    const total = order.items.reduce((sum, item) => {
        return sum + (item.price * item.quantity);
    }, 0);

    return {
        customer: order.customer,
        total: total
    };
});

const highestSpender = orderTotals.reduce((highest, current) => {
    return current.total > highest.total ? current : highest;
});


const totalRevenue = orderTotals.reduce((sum, order) => {
    return sum + order.total;
}, 0);

const purchasedProducts = [
    ...new Set(
        completedOrders.flatMap(order =>
            order.items.map(item => item.product)
        )
    )
];
console.log("Completed Orders: ", completedOrders);
console.log("Order Totals :", orderTotals);
console.log("Highest Spender :", highestSpender);
console.log("Total Revenue :", totalRevenue);
console.log("Purchased Products :", purchasedProducts);