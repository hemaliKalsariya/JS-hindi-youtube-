let a = 500                         //global scope  

if (true) {                                            //block scope
    let a = 20                                          //block scope   
    const b = 30                                        //block scope
    // console.log("price:", a, b);                        //block scope
    
}                                                       //block scope            

//console.log(a);                             //global scope
                     
function one(){
    const username = "hemali"  

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);

    }
        // console.log(website);

    two()
                 
}

 one()

if (true){
    const username = "Hemali"
    if (username === "Hemali"){
        const website = "  YouTube"
        // console.log(username + website);     
    }
    //console.log(website);

}
// console.log(username);


//++++++++++++++++++++++++++++++++++++++++++++++ interesting example ++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));

function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}

console.log(addTwo(5));


