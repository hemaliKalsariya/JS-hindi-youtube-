const coding = ["js", "rb", "py", "java", "cpp"]

// coding.forEach( function(item) {
//     console.log(item);
    
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (value, index,) => {
//     console.log(index, value);
// })

const mycoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Ruby",
        languageFileName: "rb"  
    },
    {
        languageName: "Python",
        languageFileName: "py"  
    },
    {
        languageName: "Java",
        languageFileName: "java"  
    }
]

mycoding.forEach((item) => {
    console.log(item.languageName);
    
})