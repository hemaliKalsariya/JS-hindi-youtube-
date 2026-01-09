// Looping through an object with for...in and hasOwnProperty
//for in


const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by apple'
}

for (const key in myObject) {
    console.log(`${key}:  ${myObject[key]}`);
    
   
}