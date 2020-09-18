 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]

 let totalPrice = 0;
 
 console.log(`QTY  ITEM          TOTAL`);
 order.forEach(({itemName, quantity, unitPrice}) => {
     console.log(`${quantity}    ${itemName}     ${unitPrice}`);
    totalPrice += unitPrice;
 })

 console.log(`Total: ${totalPrice}`);