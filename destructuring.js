// array destructuring

// const friends =  ["munim", "apurbo", "tawseef"];

// // const element1 = friends[0];
// // const element2 = friends[1];
// // const element3 = friends[2];

// const[element1, element3, element2] = friends;

// console.log(element1, element2, element3)


//object destructuring

const person = {
    name: "munim",
    age: 24,
    friends: ["bd", "test"],
    country: "bangladesh"
}

// console.log(person.name)

const {name,  country, friends, age} = person;
console.log(friends)