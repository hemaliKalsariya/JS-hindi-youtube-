const mynums = [1, 2, 3, 4]

// const myTotal = mynums.reduce(function(acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc * currval

// }, 1)
const myTotal = mynums.reduce((acc, currval) => acc - currval, 1);
console.log(myTotal);



const shoppingCart = [
    {
        ItemName: 'js course',
        price: 2999
    },
    {
        ItemName: 'css course',
        price: 1999
    },
    {
        ItemName: 'html course',
        price: 5999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(priceToPay);
