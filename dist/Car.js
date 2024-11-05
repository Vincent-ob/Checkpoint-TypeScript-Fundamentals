"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log('Car engine started');
    }
}
exports.Car = Car;
// Create an instance of Car
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.start(); // Call the start method to verify
