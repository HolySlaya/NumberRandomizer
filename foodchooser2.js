//array one will be a cooking method
var cooking = [
"Steamed",
"Fried",
"Raw",
"Stir Fry",
"Deep Fried",
"Smoked"
];

//array two will be a type of food
var type = [
"Spaghetti",
"Seafood",
"Steak",
"Hamburger",
"Curry",
"Hot Dog",
"Chicken",
"Rice",
"Human",
"Pork",
"Bread",
"Potato"
];
//make the computer choose a food and a way it is cooked
var randOne = Math.floor(Math.random() * cooking.length);
var randTwo = Math.floor(Math.random() * type.length);
window.alert(cooking[randOne] + " " + type[randTwo]);