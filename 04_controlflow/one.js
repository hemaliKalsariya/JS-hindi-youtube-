// if

 // <, >, <=, >=, ==, ===, !=, !==

const temprature = 32

// if (temprature == 34) {
//     console.log(true);
    
// } else {
//     console.log(false);   
// }

// console.log("hemali kalsariya");
const score = 250

// if (score > 100) {
//     const power = "fly"
//     console.log(`user power:  ${power}`);
// } 

const balance = 150000

// if (balance > 10000) console.log("Test");

// if (balance === 10000) {
//     console.log("Test");
// } else if (balance >= 5000)  {
//     console.log("Test 2");
// } else {
//     console.log("No Test");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = false

if (userLoggedIn && debitCard && loggedInFromGoogle) {
    console.log("Allow user to make purchase");
} else {
    console.log("Do not allow user to make purchase");
}

if (loggedInFromGoogle|| loggedInFromEmail) {
    console.log("user logged In.");
    
}