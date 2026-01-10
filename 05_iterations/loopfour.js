// Looping through an object with for...in and hasOwnProperty
//for in


const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    // console.log(`${key}:  ${myObject[key]}`);
    
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
//    console.log(programming[key]);
}

// const newmap = new Map();
// newmap.set('IN', "India")
// newmap.set('USA', "United States")
// newmap.set('Fr', "Farance")


// for (const key in newmap) {
//     console.log(key);  
// }

