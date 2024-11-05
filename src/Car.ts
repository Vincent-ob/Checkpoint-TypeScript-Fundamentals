import { Vehicle } from './Vehicle';

export class Car implements Vehicle {
    constructor(public make: string, public model: string, public year: number) {}

    start(): void {
        console.log('Car engine started');
    }
}

// Create an instance of Car
const myCar = new Car('Toyota', 'Camry', 2022);
myCar.start();  // Call the start method to verify