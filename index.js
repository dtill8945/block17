let coffeeMenu = require("./coffee_data.js"); //Linking our coffee_data.js file

const coffeeNames = coffeeMenu.map(coffee => coffee.name); //.map will return with only the names
console.log(coffeeNames)

const cheaperDrinks = coffeeMenu.filter(coffee => coffee.price <= 5); //.filter will return anything less than 5 and then we use .map to return the names of these coffee's under 5
const cheaperDrinkNames = cheaperDrinks.map(coffee => coffee.name);
console.log(cheaperDrinkNames)

const evenDrinks = coffeeMenu.filter(coffee => coffee.price % 2 === 0); //.filter will return only even costing coffee's and .map will return these names
const evenDrinkNames = evenDrinks.map(coffee => coffee.name);
console.log(evenDrinkNames)

const sumOfDrinks = coffeeMenu.reduce((sum, coffee) => sum + coffee.price, 0); //using .reduce we can add the sum of the coffee.price key
console.log("Your total will be $",sumOfDrinks)

const seasonalDrinks = coffeeMenu.filter(coffee => coffee.seasonal === true); //.filter will take the two which are true for being seasonal and then .map these with a string to give us the correct output
const seasonalDrinkNames = seasonalDrinks.map(coffee => coffee.name + " with imported beans");
console.log(seasonalDrinkNames)