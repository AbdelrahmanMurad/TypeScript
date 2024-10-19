"use strict";
class Ride {
    constructor() {
        this.activeRides = 0;
    }
    start() {
        this.activeRides++;
    }
    stop() {
        this.activeRides--;
    }
}
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(ride1.activeRides);
console.log(ride2.activeRides);
let ride3 = new Ride();
ride3.start();
ride3.start();
ride3.start();
console.log(ride3.activeRides);
//# sourceMappingURL=Ride.js.map