 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 function receipt([...rest]){
     let sum = 0;
     for(let i=0;i<rest.length;i++){
         sum += rest[i].unitPrice*rest[i].quantity;
     }

     console.log('QTY \t\t ITEM \t\t\t\t TOTAL');

     for(i=0;i<rest.length;i++){
         console.log(rest[i].quantity+'\t\t\t'+rest[i].itemName+'\t\t\t'+(rest[i].unitPrice*rest[i].quantity).toFixed(2));
       
  }

     console.log('\nTotal: '+ sum);
 }

 receipt(order);