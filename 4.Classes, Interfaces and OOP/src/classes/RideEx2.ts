// If we want to track the total number of active rides across all instances (i.e., shared by all objects),
// we can use static members to keep a shared count of active rides.

class RideEx2 {
    // `private static _activeRide`: shared across all instances of the RideEx2 class.
    // Tracks the total number of active rides, but we make it private to prevent
    // direct modification from outside the class (i.e., encapsulation).
    private static _activeRide = 0;

    // Method to start a ride: increments the static `_activeRide` counter.
    start(): void {
        RideEx2._activeRide++;
    }

    // Method to stop a ride: decrements the static `_activeRide` counter.
    stop(): void {
        RideEx2._activeRide--;
    }

    // Static getter to access the total number of active rides (across all instances).
    // This allows controlled access to the private _activeRide property.
    // If a method needs to access or modify a static variable, that method must be static, including the getters and setters.
    static get activeRides(): number {
        return RideEx2._activeRide;
    }
}

// Example of using the RideEx2 class:

let ride_1 = new RideEx2();
ride_1.start(); // Increment the total active rides by 1.

let ride_2 = new RideEx2();
ride_2.start(); // Increment the total active rides by 1.

console.log(RideEx2.activeRides); // Outputs: 2 (shared total active rides across all RideEx2 instances).

ride_2.stop();
console.log(RideEx2.activeRides); // Outputs: 1 (shared total active rides across all RideEx2 instances).