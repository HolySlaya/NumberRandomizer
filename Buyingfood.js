var spicyAhi = {
  fishtype: "Ahi",
  sauce: "Siriracha & Mayo",
  price: 100.00,
  rice: "White",
  onuces: 8

};

//ask the user for amount of spicy ahi to buy
var amount = prompt("Amount to buy");
//display the total amount of ounces the user willl buy
var totalOunces = amount * spicyAhi.ounces;
window.alert("Buying " +  totalOunces);
//then display the total dollar amount
var totalDollar = amount * spicyAhi.price;
window.alert("Your total price: " + totalDollar);