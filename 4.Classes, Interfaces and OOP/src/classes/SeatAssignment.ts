class SeatAssignment {
    // lets say we are building a tickiting application for  concerts. 
    // and for each concert we want to know who is setting where.

    // A1, A2, ...
    // Mosh is setting on A1
    // Rami is setting on A2
    // so on...

    /* [indevidual properties]
    A1: string;
    A2: string;
    A3: string;
    so on...

    Problem:
    - Defining individual properties for each seat (e.g., A1, A2) can be cumbersome, especially if we have many seats (e.g., 1000+).
    - What if we have other numbering systems like B1, H4, etc.?

    Solution:
    - Use an index signature to dynamically assign seat numbers.
    */

    // Index signature to dynamically define seat assignments:
    [seatNumber: string]: string;
    // The first string represents the seat number (e.g., 'A1').
    // The second string represents the person assigned to the seat (e.g., 'Murad'). 
    // [you can store anything here. A person or a customer object...]
}

// Example usage:
const seats = new SeatAssignment();
seats.A1 = 'Murad';  // Assign seat A1 to Murad.
seats['A2'] = 'Sada'; // Another way to assign seat A2 to Sada.

// seats.A3 = 2; // Error: TypeScript will prevent assigning non-string values due to type enforcement.

console.log(seats); // SeatAssignment { A1: 'Murad', A2: 'Sada' }