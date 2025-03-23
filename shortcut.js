// false value
//0, -0, "", false, null, undefined

// truth value
// "adesfadsf", 4654154, {}, [], true


// const test = null;
// if(test){
//     console.log("its truthy");
// }
// else{
//     console.log("its falsy");
// }

//ternary operator
// test ? console.log("its truthy") : console.log("its falsy");


//ternary operator for multiple condition
// const num = 50;

// const result = (num >= 10 && num < 20) ? "true" : "false";
// console.log(result)

const isActive = true;
// console.log(!isActive)

const showUser = () => console.log("show user green")

const hideUser = () => console.log("hide user gray")

// isActive ? showUser() : hideUser();

//if isActive is true then call showUser function and if isActive is false then do nothing
// isActive && showUser();
//if isActive is false then call hideUser function and if isActive is true then do nothing
// isActive || hideUser();


// let num = "10";
// console.log(num);
// console.log(typeof num);
// console.log(+num);
// console.log(typeof +num);


// let num = 15;
// console.log(num);
// console.log(typeof num);
// const result = 15+""
// console.log(result);
// console.log(typeof result);


let num = "10";
console.log(num)
console.log(typeof num)
const result = num-2;
console.log(result)
console.log(typeof result)