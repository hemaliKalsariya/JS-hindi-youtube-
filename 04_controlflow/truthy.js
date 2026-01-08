const userEmail = "hemu@gamil.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}
    
const userEmailId = ""

if (userEmailId) {
    console.log("GOt user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values

// true, "0", "false", " " [], {}, function(){} 

if (0 == false) {
    console.log("They are equal");
} else {
    console.log("They are not equal");
}

// Nullish Coalescing Operator (??): null and undefined

let vall;
// vall = 6 ?? 10;
//  vall = null ?? 10;
// vall = undefined ?? 10;

console.log(vall);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 50;
iceTeaPrice <= 30 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");