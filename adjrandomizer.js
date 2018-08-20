//create an array of adj
var adj = ["an ass","a big baby","amazingly cool"];

//ask user for his or her name
var name = prompt("What is your name?");

//create a random number
var choose = (Math.floor(Math.random() * 3));

//tell the user that he or she "is" followed by adj
window.alert(name + " is " + adj[choose])