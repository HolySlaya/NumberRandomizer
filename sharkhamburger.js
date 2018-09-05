var hamburger = {
  veg: ["Lettuce", "Tomato", "Onion"],
  meat: "shark",
  mayo: true,
  mustard: true,
  ketchup: true,
  price: 50,
  ounces: 8
}

var x = prompt("What is the new price of the hamurger?");
hamburger.price = x;
window.alert(hamburger.price)

//ask user for how many they want to buy
var amount = prompt("How much would you like to buy?");
//tell them how much it will be AND how many ounces they will get
var totalOunces = amount * hamburger.ounces;
window.alert("You are buying, " +  totalOunces + " oz.");
var totalDollar = amount * hamburger.price;
window.alert("Your total price is: $" + totalDollar);
