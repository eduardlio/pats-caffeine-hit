const orders = []
//need to make an array that adds the coffee to this array 

const menu = {
    1 : {
      "option" : "flat white",
      "price" : 4.5,
      "custName": },
    2 : {
      option : "latte",
      price : 5.3,
      custName: },
    3 : {
    option : "long black",
    price : 6.8,
    custName: }        
  };
  

console.log(menu[0])

function addCoffeeToOrder(coffee) {
    return orders.push(coffee);
};
//factor in price, perhaps an array? or is it object? 
function calculateOrderSubtotal() {
 /*   const menu = [
        "flat white": $4.5,
        "latte": $5.3,
        "long black": $6.8,
    ]*/
    // function(orders){
    //     if ("flat white") {
    //         return 4.5
    //     } else if ("latte") {
    //         return 5.3
    //     } else if ("long black") {
    //         return 6.8
    //     } else {
    //         return "Fuck off and read the menu"
    //     } //issue here that it won't add this up? 
    switch (orders) {
        case "flat white":
            return 4.5;
            break;
        case "latte":
            return 5.3;
            break;
        case "long black":
            return 6.8;
            break;
        default:
            console.log("Fuck off and read the menu")
    }


addCoffeeToOrder('latte')
addCoffeeToOrder('flat white')
addCoffeeToOrder('latte')
addCoffeeToOrder('long black')

const total = calculateOrderSubtotal();
const expectedTotal = 21.9

console.log(total === expectedTotal); // should be true

console.log("You've ordered ${orders}. That will cost ${total}");