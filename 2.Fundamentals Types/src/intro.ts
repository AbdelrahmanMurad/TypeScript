// In TS, you can annotate a variable with a number type and use underscores to separate digits for readability.
let _sales: number = 123_456_789;
let _course: string = "TypeScript";
let _is_published: boolean = true;

//In TS, we dont have always to annotate our variables. 
//Because the TS compiler can infer or detect the type of our variables based on a value.
//Hover the mouse over any variable, you will see that sales is a number, course is string and is_published is boolean.
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;

//So, Basic types are inferred dynamically in typescript when initialize it with a value.