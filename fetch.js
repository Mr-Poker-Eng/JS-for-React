const person = {
    name: "munim",
    age: 23,
    friends: ["apurba", "tawseef", "nibir"],
    hobby:{
        gaming: "NFS",
        coding: "JS"
    }
}

const jsonData = JSON.stringify(person);
// console.log(jsonData)

const planeData = JSON.parse(jsonData);
// console.log(planeData);


//fetch
// fetch("url")
// .then(res => res.json())
// .then(data => console.log(""))

const keys = Object.keys(person);
// console.log(keys)

const values = Object.values(person)
// console.log(values)


const products = [
    {name: "redmi", brand:"xiaomi", price:3000, color: "black"},
    {name: "A55", brand:"samsung", price:5000, color: "white"},
    {name: "se", brand:"apple", price:0, color: "gold"},
    {name: "se", brand:"apple", price:5000, color: "gold"},
    {name: "14 pro max", brand:"apple", price:5000, color: "dold"},
    {name: "poco phone", brand:"xiaomi", price:2000, color: "black"},
]

const newData = {
    name: "walton",
    brand: "walton",
    price: 3000,
    color: "gray"
}

// [... = spread operator]
const newArray = [...products, newData];
// console.log(newArray)

// filter
const remainingProducts = products.filter(p => p.brand !== "xiaomi")

const updateArray = [...remainingProducts, newData]
// console.log(remainingProducts)
console.log(updateArray)