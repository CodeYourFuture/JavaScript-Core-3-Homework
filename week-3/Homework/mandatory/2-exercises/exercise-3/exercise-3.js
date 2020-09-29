let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

console.log("QTY".padEnd(8), "ITEM".padEnd(20), "TOTAL");

let total = 0;
order.forEach((item) => {
  let { itemName, quantity, unitPrice } = item;
  let sum = quantity * unitPrice;
  total += sum;
  console.log(
    ("" + quantity).padEnd(8),
    itemName.padEnd(20),
    sum.toFixed(2)
  );
});
console.log("");
console.log("Total: " + total.toFixed(2));
