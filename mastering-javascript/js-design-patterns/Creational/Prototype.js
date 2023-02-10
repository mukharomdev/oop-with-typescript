/*
	This pattern is an object-based creational design pattern. In this, we use a sort of a "skeleton" of an existing object to create or instantiate new objects.

	This pattern is specifically important and beneficial to JavaScript because it utilizes prototypal inheritance instead of a classical object-oriented inheritance. Hence, it plays to JavaScript's strength and has native support.
*/

// using Object.create as was recommended by ES5 standard
const car = {
	noOfWheels: 4,
	start() {
		return 'started';
	},
	stop() {
		return 'stopped';
	},
};

// Object.create(proto[, propertiesObject])
/*
const myCar = Object.create(car, { owner: { value: 'John' } });
*/
const myCar = Object.create(car)

console.log(myCar.__proto__ === car); // true
console.log(myCar.prototype == car)

console.log(myCar.noOfWheels)

//module.exports = car;
