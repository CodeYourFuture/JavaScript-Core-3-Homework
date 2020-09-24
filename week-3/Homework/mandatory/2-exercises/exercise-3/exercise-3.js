let order = [
    { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
    { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
    { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
    { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
    { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
    { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
let total = 0;
function printReceipt(item) {
    console.log(`QTY  ITEM             TOTAL    `);

    order.forEach(function (item) {
        let { itemName, quantity, unitPrice } = item;
        total = total + unitPrice * quantity;
        console.log(
            `${item.quantity}    ${item.itemName}        ${(
                item.unitPrice * item.quantity
            ).toFixed(2)}`
        );
    });

    console.log(`TOTAL: ${total}`);
}

printReceipt(order);
