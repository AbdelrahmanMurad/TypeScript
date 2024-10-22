// Decorators are functions that get called by the javascript runtime (engine).
// Depedning on where we want to apply this decorator, the number and type of paramaters varies.
// Here is an example where we aplly it to a class so we provide a construcor function.
// Pascal Naming
function Component(constructor: Function) {
    // Here whare we change
    // Because it is a class, the parameter is constructor & the type is Function.

    // Here we have a chance to modify members of the target class. 
    console.log(`A ${constructor.name} is created.`);
    constructor.prototype.uniqueId = Date.now();
    // every object in javascript has a prototype from which it inherits various properties and methods
    // we add to it new properties and methods, so every instance of ProfileComponent or any class that has the Component decorator will inherit those new properties and methods
}
// This functions get called only once, even if we don't create any object of the class.

@Component // $ This is how we call a Decorator.
class ProfileComponent { }


/*
- we can use inheritance as another way to solve the same problem.
- decorator is just another tool in our toolbox.

class Component {
    - operation added
}

class ProfileComponent extends Component{

}
*/