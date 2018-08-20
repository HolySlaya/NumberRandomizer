// I want to have computer choose what I want to eat and show it on screen

var foods = [
"Steak",
"Rice",
"Pasta"
];

var choose = (Math.floor(Math.random() * foods.length));
window.alert(foods[choose]);