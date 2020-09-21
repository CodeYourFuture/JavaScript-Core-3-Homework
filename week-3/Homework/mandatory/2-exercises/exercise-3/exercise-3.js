let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];
const receipt = (order) => {
  let totalCost = 0;
  console.log("QTY  ITEM             TOTAL");
  order.forEach(({ itemName, quantity, unitPrice }) => {
    let total = (quantity * unitPrice).toFixed(2);
    totalCost += quantity * unitPrice;
    let padding = "".padStart(17 - itemName.length, " ");
    console.log(`${quantity}    ${itemName}${padding}${total}`);
  });
  console.log(`Total: ${totalCost.toFixed(2)}`);
};

receipt(order);
