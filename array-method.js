const products = [
    {name: "redmi", brand:"xiaomi", price:3000, color: "black"},
    {name: "A55", brand:"samsung", price:5000, color: "white"},
    {name: "se", brand:"apple", price:0, color: "gold"},
    {name: "se", brand:"apple", price:5000, color: "gold"},
    {name: "14 pro max", brand:"apple", price:5000, color: "dold"},
    {name: "poco phone", brand:"xiaomi", price:2000, color: "black"},
]
// map
// const result = products.map(product => {
//     console.log(product.price)
// });
// console.log(result)


//forEach
// products.forEach(product => console.log(product))


// filter
// const result = products.filter(product => product.brand === "apple")
// const result = products.filter(product => product.price >= 5000)
// console.log(result)


// find
const result = products.find(product => product.brand === "apple")

console.log(result)