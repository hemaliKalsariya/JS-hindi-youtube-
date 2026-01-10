const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// const newNums = myNumbers.map( (num) => num + 10 )
// const newNums2 = myNumbers.map( (num) =>{return num*5} )
const newNums = myNumbers
                        .map((num) => num * 10)
                        .map( (num) => num + 5)
                        .filter( (num) => num > 45)

 console.log(newNums);
// console.log(newNums2);

// myNumbers.forEach( (Number) => {
//     console.log(`${Number} = ${10}`);
    
// } )

