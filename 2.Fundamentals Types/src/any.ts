//If we declare a variable without initialization, it will be annotated 'any' type by default.
let level;
//You can initialize it many times.
level = 1;
level = "a";

//You should avoid this practice, as it goes against the main benefits of TypeScript, which are enforcing type safety and improving code quality.


/*
! function _render(document) {
    This will generate an error due to implicit 'any' type.
!    console.log(document);
! }
 */

// To fix this, either annotate `document` with the `any` type:
function render(document: any) {
    console.log(document);
}




//Not Recommended!!!
// Or, if the error occurs in multiple places [you have tons of errors of this kind], modify the `tsconfig.json` file by setting:
// in the Type Checking "noImplicitAny": false => This allows implicit 'any' types across the project.