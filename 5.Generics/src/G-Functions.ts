// class ArrayUtils {
//     wrapInArray(value: number) {
//         return [value];
//     }
// }

// let utils = new ArrayUtils();
// utils.wrapInArray("1"); // i want to enter string => error

class ArrayUtils {
    wrapInArray<T>(value: T) {
        return [value];
    }
}

let utils = new ArrayUtils();
utils.wrapInArray("1"); // it worked :)