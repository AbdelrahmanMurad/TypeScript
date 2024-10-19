interface ICallender {
    name: string;
    addEvent(): void;
    removeEvent(): void;
}

//another interface inherts ICallender
interface ICloudCalendar extends ICallender {
    //we have what ICallender have.
    //and we have this sync() method.
    sync(): void;
}

class GoogleCalendar implements ICallender {
    constructor(public name: string) { }
    addEvent(): void {
        console.log("add event");
    }
    removeEvent(): void {
        console.log("remove event");
    }
}

// let cc = new ICallender();//error
let google = new GoogleCalendar("google");
google.addEvent();