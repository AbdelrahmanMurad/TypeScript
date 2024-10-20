// https://mywebsite.com/users
// https://mywebsite.com/products

interface User {
    username: string
}

interface Product {
    title: string
}

interface Result<T> {
    //instead of
    // data: Product,
    data: T | null, // because we have Product and User
    error: string | null
}

function fetch<T>(url: string): Result<T> {
    console.log(url); // to prevent the yellow line from showing up.
    return { data: null, error: null }
}

let result1 = fetch<User>('https://mywebsite.com/users'); // if we don't specify the type, an error will be raised
let result2 = fetch<Product>('https://mywebsite.com/products');

result1.data?.username;
result2.data?.title;