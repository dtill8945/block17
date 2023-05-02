// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas seperating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
    {
        name: "cappuccino",
        price: 8.00,
        seasonal: false,
    },
    {
        name: "espresso",
        price: 5.00,
        seasonal: false,
    },
    {
        name: "latte",
        price: 5.00,
        seasonal: false,
    },
    {
        name: "affogato",
        price: 9.00,
        seasonal: true,
    }, 
    {
        name: "macchiato",
        price: 6.00,
        seasonal: false,
    },
    {
        name: "americano",
        price: 7.00,
        seasonal: false,
    },
    {
        name: "iced coffee",
        price: 6.00,
        seasonal: false,
    },
    {
        name: "frappe",
        price: 8.00,
        seasonal: false,
    },
    {
        name: "cuban espresso",
        price: 10.00,
        seasonal: true,
    }
]

module.exports = coffeeMenu;