// Multiple decorators are applied in reverse order.
// Pipe followed by Component.
// f(g(x)) it's like math. g(x) is calculated first, then f(g(x)).


function Component__(constructor: Function) {
	console.log(`A ${constructor.name} is created.`);
	constructor.prototype.uniqueId = Date.now();
}

function Pipe(constructor: Function) {
	console.log("Pipe decorator called");
	constructor.prototype.pipe = true;
}

@Component__
@Pipe
class ProfileComponent___ { }