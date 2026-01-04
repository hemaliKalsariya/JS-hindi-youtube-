

function MyName(){
console.log("h");
console.log("e");
console.log("m");
console.log("a");
console.log("l");
console.log("i");
}

// MyName()
// function addToNumbers(number1, number2) //peramitors
// {
    
//     console.log(number1 + number2);
    
// }

function addToNumbers(number1, number2) {
     
//    let result = number1 + number2
//    return result
    return number1 + number2
}


const result = addToNumbers(3, 4) //arguments
// console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("hemali"))
console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) //undefind, Please enter a username
