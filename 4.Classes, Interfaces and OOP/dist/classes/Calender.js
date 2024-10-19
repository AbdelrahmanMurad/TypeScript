"use strict";
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        console.log("add event");
    }
    removeEvent() {
        console.log("remove event");
    }
}
let google = new GoogleCalendar("google");
google.addEvent();
//# sourceMappingURL=Calender.js.map