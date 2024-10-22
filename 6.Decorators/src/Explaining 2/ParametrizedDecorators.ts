// decorator factory
function __Component(value: number) {
    return (constructor: Function) => {
        constructor.prototype.options = value;
        constructor.prototype.uniqueId = Date.now();
    };
}

// or making one with type aliases
type ComponentOptions = {
    selector: string
}

function _Component(options: ComponentOptions) {
    return (constructor: Function) => {
        constructor.prototype.options = options;
        constructor.prototype.uniqueId = Date.now();
    };
}
@_Component({ selector: '#my-profile' }) // dont pay attention to the argument, The important is the concept.
class Profile_Component { }