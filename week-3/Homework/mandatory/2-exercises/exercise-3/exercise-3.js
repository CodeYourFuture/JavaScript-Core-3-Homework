 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 

const total = order.reduce((total, { quantity, unitPrice }) => {
    total += quantity * unitPrice;
    return total;
}, 0);

const qtyPad = 7;
const itemPad = 20;

console.log('QTY'.padEnd(qtyPad), 'ITEM'.padEnd(itemPad), "TOTAL");

order.forEach(({ itemName, quantity, unitPrice }) => {
    console.log(
        quantity.toString().padEnd(qtyPad),
        itemName.padEnd(itemPad),
        (unitPrice * quantity).toFixed(2))
});

console.log("\nTotal:", total);