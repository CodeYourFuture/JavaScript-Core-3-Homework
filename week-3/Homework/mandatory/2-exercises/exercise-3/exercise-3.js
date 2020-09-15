 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 /*
Write a program that will print out the receipt for this order.
- Log each individual item to the console.
- Log the total cost of the order to the console.
 */

 function printOrderReceipt(orderArray) {
     console.log(`QTY   ITEM                TOTAL`);
     let total = 0;
     let itemTotal = 0;
    orderArray.forEach((item) => {
        let {itemName, quantity, unitPrice} = item;
        itemTotal = unitPrice * quantity;
        console.log(`${quantity}    ${itemName}             ${itemTotal}`);
        total += itemTotal;

    })
    console.log("");
    console.log(`Total: ${total}`);
 }

 printOrderReceipt(order);