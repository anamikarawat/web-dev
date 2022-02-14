const products = [
    { name: "T-Shirt", price: 25 },
    { name: "Headphones", price: 125 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 200 },
];
//get the number of products whose price is atleast 100.(use HOF only)
//sol-1

// function greaterThan100(product) {
//     return product.price >= 100;
// }
// let mapped = products.map(greaterThan100);
// let filtered = mapped.filter(Boolean);
// console.log(filtered.length);

//=================================================
//sol-2
// let productAbove100 = products.map(function(product){
//     return product.price
// })


// let productAbove100 = products.map(function(product){
//     return product.price
// }).filter(function(price){
//     return price >= 100
// })


let productAbove100 = products.map(function(product){
    return product.price
}).filter(function(price){
    return price >= 100
}).length
//length for-> find number of product=2
console.log(productAbove100)








