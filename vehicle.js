export class Vehicle {
    constructor(color, numOfWheels, horn) {
        this.color = color || "blue";
        this.numOfWheels = numOfWheels || 4;
        this.horn = horn || "beep beep";
    }
    honkHorn() {
        console.log(this.horn);
    }
}