// primitive

// 7 types : string, Number, Boolearn, null, undefined, Symbol, BigInt

// Reference (Non Primitive)
// in 
// Array, Objects, Functions

const score = 100
//number

const scoreValue = 120.4
console.log(typeof scoreValue);
//number

const isLoggedIn = false
console.log(typeof isLoggedIn);
//boolean

const SingIn = true
console.log(typeof SingIn);
//boolean

let outsideTemp = null
console.log(typeof outsideTemp);
//object


let userEmail;
console.log(typeof userEmail);
//undefined


const id = Symbol('123')
console.log(typeof id);
//symbol//

const anotherId = Symbol('123')
console.log(typeof anotherId);
//symbol



const myfunction = function  () {
    console.log("hello world");
    
}

//********************************************************************* */

//Stack(primitive), Heap(Non-primitive)

let myYoutubname = "kalsariya"
let anothername = myYoutubname
anothername = "hemali"
console.log(anothername);

console.log(myYoutubname);

