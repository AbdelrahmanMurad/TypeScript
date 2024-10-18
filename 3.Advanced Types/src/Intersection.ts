// Intersection Type to combine types. [used for objects]

// Intersection Type is another technique to combine types, similar to Union Types.
// However, instead of using the '|' symbol (vertical bar), we use '&' to combine types.
// Intersection Types require the object to implement all the combined types.

// Union Types, like 'number | string', wouldn't work here because it's impossible to use both types at the same time.
// Here's an example with Intersection Types:

// 'Draggable' type defines an object with a 'drag' method.
type Draggable = {
    drag: () => void;
};

// 'Resizable' type defines an object with a 'resize' method.
type Resizable = {
    resize: () => void;
};

// 'UIWidget' combines 'Draggable' and 'Resizable' using an intersection.
// Any object of this type must implement both 'drag' and 'resize'.
type UIWidget = Draggable & Resizable; // Intersection of types

// Example object implementing 'UIWidget'.
let textBox: UIWidget = {
    drag: () => { },   // Provides implementation for 'drag'.
    resize: () => { }  // Provides implementation for 'resize'.
};

// This ensures that 'textBox' satisfies both 'Draggable' and 'Resizable'.



// Intersection Types combine multiple types into one. Unlike Union Types (|), where a value can be one of several types, an Intersection Type requires that the value must satisfy all combined types.