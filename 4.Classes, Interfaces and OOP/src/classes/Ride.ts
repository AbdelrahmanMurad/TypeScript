//lets say we are building an uber application
class Ride {
    // there is some properities ...
    // `activeRides`: keeps track of the number of rides for each individual instance.
    // Initialized to 0 (no need for a constructor to set it).
    activeRides: number = 0;

       // Method to start a ride (increments the `activeRides` for the instance).
    start(): void {
        this.activeRides++;
    }

    // Method to stop a ride (decrements the `activeRides` for the instance).
    stop(): void {
        this.activeRides--;
    }
}

// Example of using the Ride class:

// Creating the first ride instance and starting it.
let ride1 = new Ride();
ride1.start();

// Creating the second ride instance and starting it.
let ride2 = new Ride();
ride2.start();

// Both instances have separate `activeRides` properties.
console.log(ride1.activeRides); // Outputs: 1
console.log(ride2.activeRides); // Outputs: 1

// why we are getting 1 active rides if we activated 2 ??
// Explanation:
// Each `Ride` instance has its own `activeRides` property.
// `ride1` and `ride2` are completely separate objects, so they do not share the `activeRides` value.

let ride3 = new Ride();
ride3.start();
ride3.start();
ride3.start();

console.log(ride3.activeRides); // Outputs: 3

// Explanation:
// Since `ride3` is a separate instance, it tracks its own number of active rides.
// In this case, `ride3.start()` was called three times, so `activeRides` is now 3.

//# continue in class RideEx2 