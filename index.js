const orders = []

function addCoffeeToOrder(coffee) {

}
function calculateOrderSubtotal() {

}

addCoffeeToOrder('latte')
addCoffeeToOrder('flat white')
addCoffeeToOrder('latte')
addCoffeeToOrder('long black')

const total = calculateOrderSubtotal();
const expectedTotal = 21.9

console.log(total === expectedTotal) // should be true