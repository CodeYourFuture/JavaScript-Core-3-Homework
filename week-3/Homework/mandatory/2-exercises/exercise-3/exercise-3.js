 let order = [

     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 let[quantity1, quantity2, quantity3, quantity4, quantity5, quantity6 ] = order;
 let [qty1,qty2, qty4] = [1, 2, 4]
 let quantity = "Qty";
 let Item = "Item";
 let Total = "TOTAL"

 console.log(`${quantity}    ${Item}              ${Total}`)
 console.log(` 1    ${quantity1.itemName}          ${quantity1.unitPrice * qty1}`);
 console.log(` 2    ${quantity2.itemName}          ${quantity2.unitPrice * qty2}`);
 console.log(` 3    ${quantity3.itemName}       ${quantity3.unitPrice * qty1}`);
 console.log(` 4    ${quantity4.itemName}   ${quantity4.unitPrice * qty1}.0`);
 console.log(` 5    ${quantity5.itemName}         ${quantity5.unitPrice *qty2}.00`);
 console.log(` 6    ${quantity6.itemName}         ${quantity6.unitPrice * qty4}0`);
 console.log(`TOTAL:${quantity1.unitPrice *qty1 + quantity2.unitPrice *qty2+ quantity3.unitPrice *qty1 
    + quantity4.unitPrice*qty1 + quantity5.unitPrice*qty2 + quantity6.unitPrice *qty4}`)