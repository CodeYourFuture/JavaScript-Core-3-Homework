 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
function printOrder(order) {
    let totalPrice = 0;
    console.log(`QTY\tITEM\t\t\tTOTAL`)
    for(let i = 0; i < order.length; ++i) {
        let {itemName, quantity, unitPrice} = order[i];
        totalPrice += unitPrice;

        if(itemName.length > 12)
            console.log(`${quantity}\t${itemName}\t${unitPrice.toFixed(2)}`);
        else
            console.log(`${quantity}\t${itemName}\t\t${unitPrice.toFixed(2)}`);
    }
    console.log(`\nTotal: ${totalPrice.toFixed(2)}`);
}

printOrder(order);