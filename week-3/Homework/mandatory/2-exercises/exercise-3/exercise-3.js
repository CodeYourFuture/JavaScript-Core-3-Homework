 let order = [
     { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29},
     { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39},
     { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.80},
     { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.00},
     { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.00},
     { itemName: "Hash Brown", quantity: 4, unitPrice: 0.40}
 ]
 
 let order = [
	{ itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
	{ itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
	{ itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
	{ itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
	{ itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
	{ itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

let total = 0;
console.log("QTY	ITEM			TOTAL");
order.forEach((element) => {
	console.log(
		element.quantity +
			"	" +
			element.itemName +
			"		" +
			element.quantity * element.unitPrice
	);
	total += element.quantity * element.unitPrice;
});
console.log(" Total: " + total);

/*
function printReceipt(order) {
	let oneOrderKeys = Object.keys(order[0]);
	let orderKeys = oneOrderKeys.map(changeCase);

	console.log(orderKeys);
}
function changeCase(word) {
	return word.toUpperCase();
}
printReceipt(order);
*/
