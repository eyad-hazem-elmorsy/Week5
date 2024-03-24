import { Vehicle } from "./vehicle.js";

export class Bicycle extends Vehicle {
    constructor(color, numOfWheels, horn) {
        super(color, numOfWheels || 2, horn || "honk honk");
    }
}