"use strict";
class RideEx2 {
    start() {
        RideEx2._activeRide++;
    }
    stop() {
        RideEx2._activeRide--;
    }
    static get activeRides() {
        return RideEx2._activeRide;
    }
}
RideEx2._activeRide = 0;
let ride_1 = new RideEx2();
ride_1.start();
let ride_2 = new RideEx2();
ride_2.start();
console.log(RideEx2.activeRides);
ride_2.stop();
console.log(RideEx2.activeRides);
//# sourceMappingURL=RideEx2.js.map