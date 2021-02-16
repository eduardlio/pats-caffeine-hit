# The Coffee Ordering System

Create a system which adds coffees to a list of orders. This is intended as a vehicle for learning, the complexity and scope of the application will grow as you learn more concepts which can be applied here.

## Functionality

### `addCoffeeToOrder(coffee)`

This function should add the given coffee to the array of orders.

__Parameters:__
- coffee (string): the name of the type of coffee you want to add e.g. 'flat white', 'latte', etc.

Expected Results:
```javascript
let orders = ['latte', 'flat white']
addCoffeeToOrder('long black')
console.log(orders) // [ 'latte', 'flat white', 'long black' ]
```

### `calculateOrderSubtotal()`

This function should return the total price of the coffees in the list of orders.

The prices of the coffees are as follows: 

- `'flat white'`: $4.5
- `'latte'`: $5.3
- `'long black'`: $6.8

So given `var order = ['flat white', 'latte', 'latte', 'long black']`
`calculateOrderSubtotal()` should return 21.9


### `createCoffee(coffeeObject)`
	

### `stringifyCoffee(coffeeObject)`

