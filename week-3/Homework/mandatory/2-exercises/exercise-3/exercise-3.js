 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 let individualItems = ([
   item1,
   item2,
   item3,
   item4,
   item5,
   item6,
   item7,
 ] = order);

 let receipt = `
QTY     ITEM                    TOTAL
1       ${item1.itemName}             ${item1.unitPrice * item1.quantity} 
2       ${item2.itemName}             ${item2.unitPrice * item2.quantity} 
1       ${item3.itemName}             ${item3.unitPrice * item3.quantity} 
1       ${item4.itemName}             ${item4.unitPrice * item4.quantity} 
2       ${item5.itemName}             ${item5.unitPrice * item5.quantity} 
4       ${item6.itemName}             ${item6.unitPrice * item6.quantity} 

Total:       ${(item1.unitPrice * item1.quantity) +
                    (item2.unitPrice * item2.quantity) +
                    (item3.unitPrice * item3.quantity) +
                    (item4.unitPrice * item4.quantity) +
                    (item5.unitPrice * item5.quantity) +
                    (item6.unitPrice * item6.quantity) 
}



 
 `;
 console.log(receipt);
