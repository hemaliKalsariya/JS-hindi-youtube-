

// function MyName(){
// console.log("h");
// console.log("e");
// console.log("m");
// console.log("a");
// console.log("l");
// console.log("i");
// }

// // MyName()
// // function addToNumbers(number1, number2) //peramitors
// // {
    
// //     console.log(number1 + number2);
    
// // }

// function addToNumbers(number1, number2) {
     
// //    let result = number1 + number2
// //    return result
//     return number1 + number2
// }


// const result = addToNumbers(3, 4) //arguments
// // console.log("Result:", result);

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage("hemali"))
// console.log(loginUserMessage("")) // just logged in
// console.log(loginUserMessage()) //undefind, Please enter a username


function calculateCartPrice(...num1) // reast opretor
{
    return num1 
}
// console.log(calculateCartPrice(200, 500, 600));

// const User = {
//     userName: "hemali",
//     price: 250
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.userName} and price is ${anyobject.price}`);
    
}

handleObject({
    userName: "sem",
    price: 350
})

// handleObject(User)

// const myNewArray = [200, 500, 600, 800];

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200, 500, 600, 800]));
