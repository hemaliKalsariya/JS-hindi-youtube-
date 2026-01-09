// for of

// ["", "", "",]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
    
}

const greetings = "Hello World";

for (const greet of greetings) {
    // console.log(greet);
    
}
   


// maps
// key value pairs
const newmap = new Map();
newmap.set('IN', "India")
newmap.set('USA', "United States")
newmap.set('Fr', "Farance")

// console.log(newmap);
 for (const [key, value] of newmap) {
    // console.log(key, ':-', value);
    
}


// looping through an object using Object.entries
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of Object.entries(myObject)) {
    console.log(key, '=', value);
}