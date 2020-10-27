 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 

 function receipt(order)
 {
     let total=0;
     console.log("QTY   ITEM        TOTAL" )
     for(let i=0;i<order.length; i++)
     {
         let {itemName,quantity,unitPrice}=order[i];
         console.log(quantity+"   "+itemName+"        "+quantity*unitPrice);
         total+=quantity*unitPrice;
     }
     console.log(total);
 }

 receipt(order);