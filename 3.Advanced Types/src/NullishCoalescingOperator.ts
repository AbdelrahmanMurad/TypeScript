// Imagine that the `speed` variable will receive a value from the user
let speed: number | null = null;
// The user didn't provide a value for `speed`, so it is initialized as `null`.

let ride = {
    // In JavaScript, "falsy" values include: null, undefined, '', 0, false, etc.

    // Using the Nullish Coalescing Operator (??) to provide a default value.
    // If `speed` is not `null` or `undefined`, it will be used.
    // if speed is null or undefined => 30 (default value)
    speed: speed ?? 30
    // instead of [speed: speed !== null ? speed : 30]
};

console.log(ride.speed);  // Output: 30 (because `speed` is `null`)