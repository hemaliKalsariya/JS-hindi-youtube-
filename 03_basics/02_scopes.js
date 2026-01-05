let a = 500                         //global scope  

if (true) {                                            //block scope
    let a = 20                                          //block scope   
    const b = 30                                        //block scope
    console.log("price:", a, b);                        //block scope
    
}                                                       //block scope            

console.log(a);                             //global scope
                     
